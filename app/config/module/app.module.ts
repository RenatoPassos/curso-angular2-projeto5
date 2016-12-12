import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//adicione essa linha
import { HttpModule }    from '@angular/http';

import { AppComponent }   from './../../component/app.component';
import { UsuarioComponent } from './../../usuario/component/usuario.component';
import { UsuarioService } from '../../usuario/service/usuario.service';
import { PerfilComponent } from './../../perfil.component';
import { AlunoComponent } from './../../aluno.component';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule ],
  declarations: [ AppComponent,
                  UsuarioComponent,
                  PerfilComponent,
                  AlunoComponent ],
  providers:    [ UsuarioService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
