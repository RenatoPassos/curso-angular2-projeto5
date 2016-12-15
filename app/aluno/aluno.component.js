"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var core_1 = require("@angular/core");
var aluno_1 = require("./aluno");
var ALUNOS = [];
var AlunoComponent = (function () {
    function AlunoComponent() {
        this.alunos = ALUNOS;
        this.alunoAtual = new aluno_1.Aluno();
        this.edit = false;
    }
    AlunoComponent.prototype.listar = function () {
        return this.alunos;
    };
    AlunoComponent.prototype.incluir = function (aluno) {
        this.alunos.push(aluno);
        this.alunoAtual = new aluno_1.Aluno();
    };
    AlunoComponent.prototype.editar = function (aluno, persistir) {
        if (persistir === void 0) { persistir = false; }
        this.edit = true;
        this.alunoAtual = aluno;
        if (persistir) {
            this.alunoAtual = new aluno_1.Aluno();
            this.edit = false;
        }
    };
    AlunoComponent.prototype.excluir = function (indice) {
        this.alunos.splice(indice, 1);
    };
    return AlunoComponent;
}());
AlunoComponent = __decorate([
    core_1.Component({
        selector: 'aluno',
        templateUrl: 'app/aluno/aluno.template.html'
    }),
    __metadata("design:paramtypes", [])
], AlunoComponent);
exports.AlunoComponent = AlunoComponent;
//# sourceMappingURL=aluno.component.js.map