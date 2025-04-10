// src/lib/initDb.ts
import { createUsersTable } from '../createTables/createUserTable';

export async function initDb() {
  await createUsersTable();
}
