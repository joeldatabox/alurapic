import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'; //indica que a aplicação é executada atravez de um navegador
import {AppComponent} from './app.component';
import {FotoModule} from './foto/foto.module';
import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import {PainelModule}from './painel/painel.module';
import {CadastroComponent} from './cadastro/cadastro.component';
import {ListagemComponent} from './listagem/listagem.component';
import {routing} from './app.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//NgModule transforma a classe em um modulo do angular
@NgModule({
    imports:[BrowserModule, FotoModule, HttpModule, PainelModule, routing, FormsModule, ReactiveFormsModule],
    declarations:[AppComponent, CadastroComponent, ListagemComponent],//o que ele declara o que faz parte dele 
    bootstrap:[AppComponent]//indica qual o primeiro arquivo que será carregado pelo angular
})
export class AppModule{}