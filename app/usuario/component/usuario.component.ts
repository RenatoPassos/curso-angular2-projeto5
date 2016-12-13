/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { Component, OnInit } from '@angular/core';
import { UsuarioInterface } from './usuario.interface';
import { Usuario } from '../class/usuario';
import { UsuarioService } from '../service/usuario.service';
import {Perfil} from "../../perfil";

@Component({
  providers: [UsuarioService],
  selector: 'usuario',
  templateUrl: "app/usuario/template/usuario.template.html"
})
export class UsuarioComponent implements UsuarioInterface, OnInit { 
    usuarios: Usuario[];
    usuarioObject = new Usuario();
    perfis: Perfil[] = [
        {nome: 'Administrador'}
        , {nome: 'Oreia'}
        , {nome: 'Professor'}
    ];
    edit = false;
    errorMessage: string;
    
    constructor(private usuarioService: UsuarioService) {  }
    
    ngOnInit(): void {
        this.usuarioService.getListUsuario()
            .subscribe(
                usuarios => this.usuarios = usuarios,
                error => this.errorMessage = <any>error);
    }
            
//    ngOnInit(): void {
//        this.usuarioService.getListUsuario().then(usuarios => this.usuarios = usuarios);
//    }    
        
    listarUsuarios(): Usuario[] {
        return this.usuarios;
    }    
    deletarUsuario(index): void {
        this.usuarios.splice(index, 1);
    }
    salvarUsuario(usuario): void {
        this.usuarios.push(usuario);
        this.initUsuario();
    }


    editarUsuario(usuario, persistir = false): void {
        this.edit = true;
        this.usuarioObject = usuario;
        if (persistir) {
            this.initUsuario();
            this.edit = false;
        }
    }

    private initUsuario() {
        this.usuarioObject = new Usuario();
    }
}

