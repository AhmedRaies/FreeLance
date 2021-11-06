import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperAdminComponent } from './Admin/super-admin/super-admin.component';
import { AdminHeaderComponent } from './Headers/admin-header/admin-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SideNavAgentComponent } from './GestionPark/side-nav-parks/side-nav-agent.component';
import { LoginComponent } from './login/login.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './Services/Auth/auth.guard';
import { AuthService } from './Services/Auth/auth.service';
import { AddParkComponent } from './GestionPark/add-park/add-park.component';
import { RemoveParkComponent } from './GestionPark/remove-park/remove-park.component';
import { ShowParksComponent } from './GestionPark/show-parks/show-parks.component';


@NgModule({
  declarations: [
    AppComponent,
    SuperAdminComponent,
    AdminHeaderComponent,
    AddParkComponent,
    RemoveParkComponent,
    ShowParksComponent,
    SideNavAgentComponent,
    LoginComponent,
  ],
  imports: [
    ReactiveFormsModule,
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
