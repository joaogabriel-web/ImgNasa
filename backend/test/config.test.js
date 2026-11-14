import assert from 'node:assert/strict';
import { test } from 'node:test';
import { loadConfig } from '../src/config.js';

test('loadConfig requires database credentials', () => {
  assert.throws(
    () => loadConfig({}),
    /MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE/,
  );
});

test('loadConfig parses and returns server and database settings', () => {
  assert.deepEqual(
    loadConfig({
      PORT: '4100',
      MYSQL_HOST: 'localhost',
      MYSQL_PORT: '3307',
      MYSQL_USER: 'imgnasa',
      MYSQL_PASSWORD: 'local-password',
      MYSQL_DATABASE: 'imgnasa',
    }),
    {
      port: 4100,
      database: {
        host: 'localhost',
        port: 3307,
        user: 'imgnasa',
        password: 'local-password',
        database: 'imgnasa',
      },
    },
  );
});

test('loadConfig rejects invalid ports', () => {
  assert.throws(
    () =>
      loadConfig({
        MYSQL_HOST: 'localhost',
        MYSQL_USER: 'imgnasa',
        MYSQL_PASSWORD: 'local-password',
        MYSQL_DATABASE: 'imgnasa',
        MYSQL_PORT: 'not-a-port',
      }),
    /MYSQL_PORT must be an integer between 1 and 65535/,
  );
});
