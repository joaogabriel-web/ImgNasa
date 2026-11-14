import mysql from 'mysql2/promise';

export function createDatabase(config) {
  return mysql.createPool({
    ...config,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
}
