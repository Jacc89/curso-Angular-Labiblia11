import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// pipe
import localeES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';


// componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './componets/template/template.component';
import { ModelComponent } from './componets/model/model.component';
import { EmpleadoComponent } from './components/formulario/empleado/empleado.component';
import { ListaEmpleadoComponent } from './components/formulario/lista-empleado/lista-empleado.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HttpComponent } from './components/http/http.component';
import { PaisesComponent } from './components/paises/paises.component';
import { RickymortyComponent } from './components/rickymorty/rickymorty.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { ReversoPipe } from './pipes/reverso.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { NumarrayPipe } from './pipes/numarray.pipe';
// animaciones
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AnimationComponent } from './components/animation/animation.component';

// inicializa pipe
registerLocaleData(localeES);

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ModelComponent,
    EmpleadoComponent,
    ListaEmpleadoComponent,
    FormularioComponent,
    HttpComponent,
    PaisesComponent,
    RickymortyComponent,
    PipeComponent,
    ReversoPipe,
    CapitalizePipe,
    NumarrayPipe,
    AnimationComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    // llamado de pipe
    {provide: LOCALE_ID, useValue: 'es-ES'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
