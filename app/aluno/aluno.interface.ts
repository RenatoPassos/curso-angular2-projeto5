/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { Aluno } from './aluno';

export interface AlunoInterface {
    listar(): Aluno[];
    incluir(aluno: Aluno): void;
    editar(aluno: Aluno, persistir: boolean): void;
    excluir(indice: number): void;
}

