import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppComponent }   from '../../component/app.component';
import {HomeComponent} from "../../home/component/home.component";
import { UsuarioComponent } from '../../usuario/component/usuario.component';
import { UsuarioService } from '../../usuario/service/usuario.service';
import { PerfilComponent } from '../../perfil/component/perfil.component';
import { AlunoComponent } from '../../aluno/aluno.component';
import {PerfilService} from "../../perfil/service/perfil.service";
import {routing} from "../routes/routes";

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule,
                  routing
                ],
  declarations: [ AppComponent,
                  HomeComponent,
                  UsuarioComponent,
                  PerfilComponent,
                  //PerfilComponentForm,
                  AlunoComponent ],
  providers:    [ UsuarioService,
                  PerfilService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {  }
