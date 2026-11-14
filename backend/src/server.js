import { createServer } from 'node:http';
import { createApp } from './app.js';
import { loadConfig } from './config.js';
import { createDatabase } from './database.js';

const config = loadConfig();
const database = createDatabase(config.database);
const server = createServer(createApp(database));

server.on('error', (error) => {
  console.error('Backend server failed:', error);
  process.exitCode = 1;
});

server.listen(config.port, () => {
  console.info(`Backend listening on port ${config.port}`);
});

async function shutdown(signal) {
  console.info(`Received ${signal}; shutting down backend.`);
  server.close(async (error) => {
    if (error) {
      console.error('Failed to close backend server:', error);
      process.exitCode = 1;
    }

    try {
      await database.end();
    } catch (databaseError) {
      console.error('Failed to close database pool:', databaseError);
      process.exitCode = 1;
    }
  });
}

process.once('SIGINT', () => shutdown('SIGINT'));
process.once('SIGTERM', () => shutdown('SIGTERM'));
