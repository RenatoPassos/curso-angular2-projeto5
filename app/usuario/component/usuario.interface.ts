/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { Usuario } from './../class/usuario';
 
export interface UsuarioInterface {
    listar(): Usuario[];
    excluir(index: number): void;
    salvar(usuario: Usuario): void;
    editar(usuario: Usuario, persistir: boolean): void;
}

