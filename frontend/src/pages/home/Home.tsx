import { useEffect } from 'react';
import React from 'react';

import Navbar from '../../components/navbar/Navbar.tsx';

export default function HomePage() {
  useEffect(() => {
    const initDatabase = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/init'); // ← Ruta absoluta
        const text = await res.text();
        console.log('Init DB:', text);
      } catch (err) {
        console.error('Error iniciando DB:', err);
      }
    };

    initDatabase();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <h1 >Bienvenido</h1>
        <p className='text-center'>La base de datos se crea automáticamente al cargar esta página.</p>
      </main>
    </>
  );
}
