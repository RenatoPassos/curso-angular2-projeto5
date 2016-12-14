/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Component, OnInit} from '@angular/core';
import { PerfilInterface } from './perfil.interface';
import { Perfil } from '../class/perfil';
import {PerfilService} from "../service/perfil.service";

@Component({
  providers: [PerfilService],
  selector: 'perfil',
  templateUrl: "app/perfil/template/perfil.template.html"
})
export class PerfilComponent implements PerfilInterface, OnInit {
    perfis: Perfil[];

    constructor(private perfilService: PerfilService) {  }
    
    ngOnInit(): void {
        this.perfilService.getList().then(perfis => this.perfis = perfis);
    }

    listar(): Perfil[] {
        return this.perfis;
    }
}