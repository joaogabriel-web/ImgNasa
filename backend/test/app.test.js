import assert from 'node:assert/strict';
import { once } from 'node:events';
import { afterEach, test } from 'node:test';
import { createServer } from 'node:http';
import { createApp } from '../src/app.js';

const servers = [];

afterEach(async () => {
  await Promise.all(
    servers.splice(0).map(
      (server) =>
        new Promise((resolve, reject) => {
          server.close((error) => (error ? reject(error) : resolve()));
        }),
    ),
  );
});

async function startServer(database, logger) {
  const server = createServer(createApp(database, logger));
  servers.push(server);
  server.listen(0);
  await once(server, 'listening');
  return `http://127.0.0.1:${server.address().port}`;
}

test('GET /health returns healthy when the database responds', async () => {
  const url = await startServer({
    query: async () => [[{ result: 1 }]],
  });

  const response = await fetch(`${url}/health`);

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { status: 'ok', database: 'ok' });
});

test('GET /health returns service unavailable when the database fails', async () => {
  const loggedErrors = [];
  const url = await startServer({
    query: async () => {
      throw new Error('Database unavailable');
    },
  }, {
    error: (...args) => loggedErrors.push(args),
  });

  const response = await fetch(`${url}/health`);

  assert.equal(response.status, 503);
  assert.deepEqual(await response.json(), {
    status: 'error',
    database: 'unavailable',
  });
  assert.equal(loggedErrors.length, 1);
});

test('unknown routes return not found', async () => {
  const url = await startServer({ query: async () => [[{ result: 1 }]] });

  const response = await fetch(`${url}/not-a-route`);

  assert.equal(response.status, 404);
  assert.deepEqual(await response.json(), { error: 'Not found' });
});
