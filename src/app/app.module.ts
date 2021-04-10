import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperAdminComponent } from './Admin/super-admin/super-admin.component';
import { AdminHeaderComponent } from './Headers/admin-header/admin-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SideNavComponent } from './GestionClient/side-nav/side-nav.component';
import { AfficheClientComponent } from './GestionClient/affiche-client/affiche-client.component';
import { AjoutClientComponent } from './GestionClient/ajout-client/ajout-client.component';
import { SupprimeClientComponent } from './GestionClient/supprime-client/supprime-client.component';
import { AfficheAgentComponent } from './GestionAgent/affiche-agent/affiche-agent.component';
import { AjoutAgentComponent } from './GestionAgent/ajout-agent/ajout-agent.component';
import { SideNavAgentComponent } from './GestionAgent/side-nav-agent/side-nav-agent.component';
import { AgentHeaderComponent } from './Headers/agent-header/agent-header.component';
import { AgentComponent } from './Admin/agent/agent.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './Services/Auth/auth.guard';
import { AuthService } from './Services/Auth/auth.service';
import { TashAgentComponent } from './GestionAgent/tash-agent/tash-agent.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperAdminComponent,
    AdminHeaderComponent,
    SideNavComponent,
    AfficheClientComponent,
    AjoutClientComponent,
    SupprimeClientComponent,
    AfficheAgentComponent,
    AjoutAgentComponent,
    SideNavAgentComponent,
    AgentHeaderComponent,
    AgentComponent,
    LoginComponent,
    TashAgentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
