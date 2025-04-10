// backend/src/app/api/init/route.ts
import { initDb } from '../../lib/initDB';

export async function GET() {
  try {
    await initDb();
    return new Response('✅ Tablas creadas correctamente', { status: 200 });
  } catch (error) {
    console.error('Error al inicializar la DB:', error);
    return new Response('❌ Error al crear las tablas', { status: 500 });
  }
}
