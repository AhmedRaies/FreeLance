import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddParkComponent } from './GestionPark/add-park/add-park.component';
import { RemoveParkComponent } from './GestionPark/remove-park/remove-park.component';
import { ShowParksComponent } from './GestionPark/show-parks/show-parks.component';
import { SideNavAgentComponent } from './GestionPark/side-nav-parks/side-nav-agent.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './Services/Auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'parks/affiche-park', pathMatch: 'full',canActivate: [AuthGuard] },

{
  path: 'parks',
  component: SideNavAgentComponent,
  canActivate: [AuthGuard],
  children: [
    { path: 'affiche-park', component: ShowParksComponent, pathMatch: 'full'  },
    { path: 'ajout-park', component: AddParkComponent },
    { path: 'tash-park', component: RemoveParkComponent},
  ]
},
{
  path: 'login',
  component: LoginComponent,
  
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
