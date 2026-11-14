import express from 'express';

export function createApp(database, logger = console) {
  const app = express();

  app.get('/health', async (_request, response) => {
    try {
      await database.query('SELECT 1');
      response.status(200).json({ status: 'ok', database: 'ok' });
    } catch (error) {
      logger.error('Database health check failed:', error);
      response.status(503).json({
        status: 'error',
        database: 'unavailable',
      });
    }
  });

  app.use((_request, response) => {
    response.status(404).json({ error: 'Not found' });
  });

  return app;
}
