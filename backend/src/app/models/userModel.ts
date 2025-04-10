// src/models/userModel.ts
import { db } from '../lib/db';

export async function getUserByEmail(correo: string) {
  return await db.get('SELECT * FROM usuarios WHERE correo = ?', [correo]);
}
