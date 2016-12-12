/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { Component } from '@angular/core';
import { Aluno } from './aluno';
import { AlunoInterface } from './aluno.interface';

const ALUNOS: Aluno[] = [
    
];

@Component({
    selector: 'aluno',
    templateUrl: 'app/aluno.template.html'
})
export class AlunoComponent implements AlunoInterface {
    alunos = ALUNOS;
    alunoAtual = new Aluno();
    edit = false;
    
    listar(): Aluno[] {
        return this.alunos;
    }
    incluir(aluno: Aluno): void {
        this.alunos.push(aluno);
        this.alunoAtual = new Aluno();
    }
    editar(aluno: Aluno, persistir: boolean = false): void {
        this.edit = true;
        this.alunoAtual = aluno;
        if (persistir) {
            this.alunoAtual = new Aluno();
            this.edit = false;
        }
    }
    excluir(indice: number): void {
        this.alunos.splice(indice, 1);
    }
}
