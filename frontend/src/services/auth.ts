interface LoginResponse {
  token: string;
  rol: string;
}

const API_URL = 'http://localhost:3001/api/auth/login';

export async function login(email: string, password: string): Promise<LoginResponse> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ correo: email, password }),
  });

  const text = await response.text(); // 👈 obtenemos el texto sin asumir que es JSON
  console.log('Respuesta cruda del backend:', text); // 👈 debug

  if (!response.ok) {
    try {
      const error = JSON.parse(text); // intenta convertir el texto en JSON
      throw new Error(error.error || 'Error al iniciar sesión');
    } catch {
      throw new Error('Error desconocido');
    }
  }

  try {
    return JSON.parse(text); // solo si el backend realmente devolvió JSON válido
  } catch {
    throw new Error('Respuesta inválida del servidor');
  }
}
