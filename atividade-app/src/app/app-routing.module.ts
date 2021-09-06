import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SobreComponent} from "./sobre/sobre.component";
import {CorpoComponent} from "./corpo/corpo.component";
import {ContatoComponent} from "./contato/contato.component";

const routes: Routes = [
  {path: 'sobre', component: SobreComponent},
  {path: '', component: CorpoComponent},
  {path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
