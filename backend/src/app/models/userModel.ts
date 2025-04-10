import { abrirDB } from "../lib/db";

export interface Usuario {
    id:number;
    nombre:string;
    apellido:string;
    correo:string;
    password:string;
    rol:string;
}

export async function getUsuarioPorEmail(email: string): Promise<Usuario | undefined>{
    const db = await abrirDB();
    return db.get('SELECT * FROM usuarios WHERE correo = ?', [email]);
}