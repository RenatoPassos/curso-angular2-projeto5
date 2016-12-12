/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { Usuario } from './../class/usuario';
 
export interface UsuarioInterface {
    listarUsuarios(): Usuario[];
    deletarUsuario(index): void;
    salvarUsuario(usuario): void;
    editarUsuario(usuario, persistir): void;
}

