/**
 * Created by treina.coede on 15/12/2016.
 */
import {Routes, RouterModule} from "@angular/router";
import {UsuarioComponent} from "../../usuario/component/usuario.component";
import {PerfilComponent} from "../../perfil/component/perfil.component";
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "../../home/component/home.component";

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'usuario/:id', component: UsuarioComponent },
    { path: 'home', component: HomeComponent },
    { path: 'perfil', component: PerfilComponent },
    //{ path: 'perfil-add', component: PerfilComponentForm },
    //{ path: 'perfil-edit/:id', component: PerfilComponentForm }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);