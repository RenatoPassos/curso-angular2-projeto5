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
var usuario_1 = require("../class/usuario");
var usuario_service_1 = require("../service/usuario.service");
var perfil_service_1 = require("../../perfil/service/perfil.service");
var UsuarioComponent = (function () {
    function UsuarioComponent(usuarioService, perfilService) {
        this.usuarioService = usuarioService;
        this.perfilService = perfilService;
        this.usuarioObject = new usuario_1.Usuario();
        this.edit = false;
    }
    UsuarioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usuarioService.getList()
            .subscribe(function (result) { return _this.usuarios = result; }, function (error) { return _this.errorMessage = error; });
        this.perfilService.getList().then(function (result) { return _this.perfis = result; });
    };
    // ngOnInit(): void {
    //     this.usuarioService.getList().then(result => this.usuarios = result);
    //     this.perfilService.getList().then(result => this.perfis = result);
    // }
    UsuarioComponent.prototype.listarUsuarios = function () {
        return this.usuarios;
    };
    UsuarioComponent.prototype.deletarUsuario = function (index) {
        this.usuarios.splice(index, 1);
    };
    UsuarioComponent.prototype.salvarUsuario = function (usuario) {
        this.usuarios.push(usuario);
        this.initUsuario();
    };
    UsuarioComponent.prototype.editarUsuario = function (usuario, persistir) {
        if (persistir === void 0) { persistir = false; }
        this.edit = true;
        this.usuarioObject = usuario;
        if (persistir) {
            this.initUsuario();
            this.edit = false;
        }
    };
    UsuarioComponent.prototype.initUsuario = function () {
        this.usuarioObject = new usuario_1.Usuario();
    };
    return UsuarioComponent;
}());
UsuarioComponent = __decorate([
    core_1.Component({
        providers: [usuario_service_1.UsuarioService, perfil_service_1.PerfilService],
        selector: 'usuario',
        templateUrl: "app/usuario/template/usuario.template.html"
    }),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService,
        perfil_service_1.PerfilService])
], UsuarioComponent);
exports.UsuarioComponent = UsuarioComponent;
//# sourceMappingURL=usuario.component.js.map