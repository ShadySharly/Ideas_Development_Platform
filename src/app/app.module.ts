import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProjectListComponent } from './auth/project-list/project-list.component';
import { HeaderComponent } from './common/header/header.component';
import { LoaderComponent } from './common/loader/loader.component';
import { AjustesComponent } from './ajustes/ajustes.component';
import { BaulComponent } from './baul/baul.component';
import { CreateideaComponent } from './createidea/createidea.component';
import { IdeasComponent } from './ideas/ideas.component';
import { InvitarComponent } from './invitar/invitar.component';
import { LoginComponent } from './login/login.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { RetosComponent } from './retos/retos.component';
import { AppRoutingModule } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    HeaderComponent,
    LoaderComponent,
    AjustesComponent,
    BaulComponent,
    CreateideaComponent,
    IdeasComponent,
    InvitarComponent,
    LoginComponent,
    NoticiasComponent,
    PerfilComponent,
    RegistroComponent,
    InicioComponent,
    RetosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
