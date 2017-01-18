import{platformBrowserDynamic}from '@angular/platform-browser-dynamic';
import{AppModule} from './app.module';

const platform = platformBrowserDynamic();//Objeto responsavel por dar inicio no carregamento dos scripts necessarios do Angular

platform.bootstrapModule(AppModule);