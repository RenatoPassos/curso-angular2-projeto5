/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */ 
import {Perfil} from "../../perfil";

export class Usuario {
    _id: number;
    nome: string;
    idade: number;
    perfil: Perfil;
    constructor() {
        this.perfil = {nome: ''};
    }
}
