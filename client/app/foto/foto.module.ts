import {NgModule} from '@angular/core';
import {FotoComponent} from './foto.component';
import {FiltroPorTitulo} from './foto.pipes';
@NgModule({
    declarations:[FotoComponent, FiltroPorTitulo],// informa tudo o que esse modulo possui e que pode ser usado
    exports:[FotoComponent, FiltroPorTitulo]//informa tudo que pode ser exportado para ser usado
})
export class FotoModule{}