/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { Component } from '@angular/core';
import { PerfilInterface } from './perfil.interface';
import { Perfil } from './perfil';

const PERFIS: Perfil[] = [
    { nome: 'João' },
    { nome: 'Maria' },
    { nome: 'Joana' },
    { nome: 'José' },
    { nome: 'Magneta' },
    { nome: 'RubberMan' },
    { nome: 'Dynama' },
    { nome: 'Dr IQ' },
    { nome: 'Nataniel' },
    { nome: 'Jéssica' }
];

@Component({
  selector: 'perfil',
  templateUrl: "app/perfil.template.html"
})
export class PerfilComponent implements PerfilInterface { 
    perfis = this.listar();
    
    listar(): Perfil[] {
        return PERFIS;
    }
}