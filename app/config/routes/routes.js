"use strict";
/**
 * Created by treina.coede on 15/12/2016.
 */
var router_1 = require("@angular/router");
var usuario_component_1 = require("../../usuario/component/usuario.component");
var perfil_component_1 = require("../../perfil/component/perfil.component");
var home_component_1 = require("../../home/component/home.component");
exports.routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'usuario', component: usuario_component_1.UsuarioComponent },
    { path: 'usuario/:id', component: usuario_component_1.UsuarioComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'perfil', component: perfil_component_1.PerfilComponent },
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=routes.js.map