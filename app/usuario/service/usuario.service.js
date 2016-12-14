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
//adicione as linhas abaixo:
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var UsuarioService = (function () {
    //adicione o construtor da classe
    function UsuarioService(http) {
        this.http = http;
        //adicione esta linha:
        //private usuarioUrl = 'https://cursoangularjs2restful.herokuapp.com/usuario';
        this.usuarioUrl = 'https://natanieltse.herokuapp.com/usuario';
    }
    /**
     *
     * @returns {Observable<Usuario[]>}
     */
    UsuarioService.prototype.getList = function () {
        //adicione esse trecho de código
        return this.http.get(this.usuarioUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // getList(): Promise<Usuario[]> {
    //     return Promise.resolve(USUARIOS);
    // }
    //Crie esse método
    UsuarioService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return UsuarioService;
}());
UsuarioService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map