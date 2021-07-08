import { ListaEmpleadoComponent } from './components/formulario/lista-empleado/lista-empleado.component';
import { EmpleadoComponent } from './components/formulario/empleado/empleado.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelComponent } from './componets/model/model.component';
import { TemplateComponent } from './componets/template/template.component';
import { RickymortyComponent } from './components/rickymorty/rickymorty.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HttpComponent } from './components/http/http.component';
import { PaisesComponent } from './components/paises/paises.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { AnimationComponent } from './components/animation/animation.component';

const routes: Routes = [
  // explicacion de validadores
  // { path: '', pathMatch:'full', redirectTo:'/model'},
  { path:'template', component: TemplateComponent  },
   { path:'model', component: ModelComponent  },

  // ejercicio formularios
  { path: 'formulario', component: FormularioComponent},
  { path: 'new', component: EmpleadoComponent  },
  { path: 'lista', component: ListaEmpleadoComponent  },
// ricky  morty
  { path: 'ricky', component: RickymortyComponent },
  { path: 'http', component: HttpComponent },
  { path: 'paises', component: PaisesComponent},
  { path: 'pipe', component: PipeComponent },
  { path: 'animacion', component: AnimationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
