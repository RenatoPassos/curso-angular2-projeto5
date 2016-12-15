/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { Component, OnInit } from '@angular/core';
import { UsuarioInterface } from './usuario.interface';
import { Usuario } from '../class/usuario';
import { UsuarioService } from '../service/usuario.service';
import {Perfil} from "../../perfil/class/perfil";
import {PerfilService} from "../../perfil/service/perfil.service";

@Component({
  providers: [UsuarioService, PerfilService],
  selector: 'usuario',
  templateUrl: "app/usuario/template/usuario.template.html"
})
export class UsuarioComponent implements UsuarioInterface, OnInit { 
    usuarios: Usuario[];
    usuarioObject = new Usuario();
    perfis: Perfil[];
    edit = false;
    errorMessage: string;

    constructor(private usuarioService: UsuarioService,
                private perfilService: PerfilService) {  }
    
    ngOnInit(): void {
        this.usuarioService.getList()
            .subscribe(
                result => this.usuarios = result,
                error => this.errorMessage = <any>error);
        this.perfilService.getList()
            .then(
                result => this.perfis = result);
    }

    // ngOnInit(): void {
    //     this.usuarioService.getList().then(result => this.usuarios = result);
    //     this.perfilService.getList().then(result => this.perfis = result);
    // }
        
    listar(): Usuario[] {
        return this.usuarios;
    }

    excluir(id: string): void {
        //this.usuarios.splice(id, 1);
    }
    // excluir(index: number): void {
    //     this.usuarios.splice(index, 1);
    // }

    salvar(usuario): void {
        this.usuarios.push(usuario);
        this.initUsuario();
    }


    editar(usuario, persistir = false): void {
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

