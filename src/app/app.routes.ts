import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';


import { RetosComponent } from './retos/retos.component';
import { InicioComponent } from './inicio/inicio.component';
import { AjustesComponent } from './ajustes/ajustes.component';
import { BaulComponent } from './baul/baul.component';
import { CreateideaComponent } from './createidea/createidea.component';
import { IdeasComponent } from './ideas/ideas.component';
import { InvitarComponent } from './invitar/invitar.component';
import { LoginComponent } from './login/login.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroComponent } from './registro/registro.component';



const APP_ROUTES: Routes = [
     { path: '', redirectTo: 'inicio', pathMatch: 'full' },     
     { path: 'inicio', component: InicioComponent },
     { path: 'retos', component: RetosComponent },
 { path: 'ajustes', component: AjustesComponent },
     { path: 'baul', component: BaulComponent },
     { path: 'createidea', component: CreateideaComponent },
     { path: 'ideas', component: IdeasComponent },
     { path: 'invitar', component: InvitarComponent },
     { path: 'login', component: LoginComponent },
     { path: 'noticias', component: NoticiasComponent },
     { path: 'perfil', component: PerfilComponent },
     { path: 'registro', component: RegistroComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }