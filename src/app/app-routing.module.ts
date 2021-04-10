import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AfficheAgentComponent } from './GestionAgent/affiche-agent/affiche-agent.component';
import { AjoutAgentComponent } from './GestionAgent/ajout-agent/ajout-agent.component';
import { SideNavAgentComponent } from './GestionAgent/side-nav-agent/side-nav-agent.component';
import { TashAgentComponent } from './GestionAgent/tash-agent/tash-agent.component';
import { AfficheClientComponent } from './GestionClient/affiche-client/affiche-client.component';
import { AjoutClientComponent } from './GestionClient/ajout-client/ajout-client.component';
import { SideNavComponent } from './GestionClient/side-nav/side-nav.component';
import { SupprimeClientComponent } from './GestionClient/supprime-client/supprime-client.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './Services/Auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/sidenav/afficheclients', pathMatch: 'full',canActivate: [AuthGuard] },
{
  path: '*',
  pathMatch: 'full',
  component: SideNavComponent,
  canActivate: [AuthGuard],
  children: [
    { path: 'afficheclients', component: AfficheClientComponent, pathMatch: 'full'  },
    { path: 'ajoutclients', component: AjoutClientComponent },
    { path: 'supprimeclients', component: SupprimeClientComponent },
  ]
},
{
  path: 'sidenav',
  component: SideNavComponent,
  canActivate: [AuthGuard],
  children: [
    { path: 'afficheclients', component: AfficheClientComponent, pathMatch: 'full'  },
    { path: 'ajoutclients', component: AjoutClientComponent },
    { path: 'supprimeclients', component: SupprimeClientComponent },
  ]
},
{
  path: 'sidenav-agent',
  component: SideNavAgentComponent,
  canActivate: [AuthGuard],
  children: [
    { path: 'affiche-agents', component: AfficheAgentComponent, pathMatch: 'full'  },
    { path: 'ajout-agents', component: AjoutAgentComponent },
    { path: 'tash-agents', component:TashAgentComponent},
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
