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
var perfil_service_1 = require("../service/perfil.service");
var PerfilComponent = (function () {
    function PerfilComponent(perfilService) {
        this.perfilService = perfilService;
    }
    PerfilComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.perfilService.getList().then(function (perfis) { return _this.perfis = perfis; });
    };
    PerfilComponent.prototype.listar = function () {
        return this.perfis;
    };
    return PerfilComponent;
}());
PerfilComponent = __decorate([
    core_1.Component({
        providers: [perfil_service_1.PerfilService],
        selector: 'perfil',
        templateUrl: "app/perfil/template/perfil.template.html"
    }),
    __metadata("design:paramtypes", [perfil_service_1.PerfilService])
], PerfilComponent);
exports.PerfilComponent = PerfilComponent;
//# sourceMappingURL=perfil.component.js.map