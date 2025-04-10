// src/app/api/auth/login/route.ts
import { getUserByEmail } from '../../../models/userModel';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {

  const { correo, password } = await req.json();
  const user = await getUserByEmail(correo);

  if (!user || user.password !== password) {
    return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 });
  }

  return NextResponse.json({ message: 'Login exitoso', user });
}
