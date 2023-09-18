/* Esses imports estavam no arquivo em 2017
Usado para fazer o Two-way binding e formulários
import { FormsModule } from '@angular/forms';

Usado para fazer as requisições AJAX do projeto
import { HttpModule } from '@angular/http'; */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
    // HttpModule - 2017
  ],
  providers: [], // possuí o escopo global da aplicação
  bootstrap: [AppComponent]
})
export class AppModule { }
