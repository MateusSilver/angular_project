import { Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { SecondComponent } from './components/second/second.component';
import { EmiterComponent } from './components/emiter/emiter.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventsComponent } from './components/events/events.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path: 'aula01', component: FirstComponentComponent},
  {path: 'aula02', component: SecondComponent},
  {path: 'aula03', component: Directive},
  {path: 'aula04', component: IfRenderComponent},
  {path: 'aula05', component: EventsComponent},
  {path: 'aula06', component: EmiterComponent},
  {path: 'aula07', component: ListRenderComponent},
  {path: 'aula08', component: PipeComponent},
  {path: 'aula09', component: TwoWayBindingComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
