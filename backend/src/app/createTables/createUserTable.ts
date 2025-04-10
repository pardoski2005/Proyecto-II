// src/createTables/createUsersTable.ts
import { db } from '../lib/db';

export async function createUsersTable() {
  await db.exec(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      apellido TEXT NOT NULL,
      correo TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      rol TEXT NOT NULL
    );
  `);


  console.log('Creando tabla')
}
