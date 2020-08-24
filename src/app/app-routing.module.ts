import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerminiComponent } from './components/termini/termini.component';
import { ParticipantiComponent } from './components/participanti/participanti.component';

const routes: Routes = [


 {path: '', component: TerminiComponent},
 {path: '', redirectTo:'termini', pathMatch:'full'},
 {path: '**', redirectTo: 'termini', pathMatch: 'full'},

 {path: 'participanti/:GGUID', component: ParticipantiComponent},
 {path: '', redirectTo: 'participanti', pathMatch: 'full'},
 {path: '**', redirectTo: 'participanti', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
