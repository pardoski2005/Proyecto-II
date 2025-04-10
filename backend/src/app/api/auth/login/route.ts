import { NextRequest } from 'next/server';
import { getUsuarioPorEmail } from '../../../models/userModel';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const SECRET_KEY = 'super_secreta';

export async function POST(req: NextRequest) {
  const { correo, password } = await req.json();

  const user = await getUsuarioPorEmail(correo);
  if (!user) {
    return Response.json({ error: 'Usuario no encontrado' }, { status: 401 });
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return Response.json({ error: 'Contraseña incorrecta' }, { status: 401 });
  }

  const token = jwt.sign({ id: user.id, rol: user.rol }, SECRET_KEY, { expiresIn: '1h' });

  return Response.json({ token, rol: user.rol });
}
