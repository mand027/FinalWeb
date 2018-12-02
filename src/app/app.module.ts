import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainindexComponent } from './mainindex/mainindex.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PartnersignupComponent } from './partnersignup/partnersignup.component';
import { UserComponent } from './user/user.component';
import { UserempresaComponent } from './userempresa/userempresa.component';
import { FormUserCompComponent } from './form-user-comp/form-user-comp.component';
import { FormsModule } from '@angular/forms';
import { ContactFormComponentComponent } from './contact-form-component/contact-form-component.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { SpotifyService } from './services/spotify.service';

//importing angular material, animation
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { EmpresaPublicComponent } from './empresa-public/empresa-public.component';
// MaterialModule
import { MaterialModule } from './material.module';

//Angular maps

import { AgmCoreModule } from '@agm/core';
import { EditarmapaComponent } from './editarmapa/editarmapa.component';
//import { MapaEditarComponent } from './mapa-editar.component';

=======
import { EmpresaPublicComponent } from './empresa-public/empresa-public.component';
>>>>>>> 7794ea404aedca90775cc819439301c5bc030db6

const appRoutes: Routes = [
{path: 'user', component: UserComponent},
{path: 'login', component: LoginComponent},
{path: 'main', component: MainindexComponent},
{path: 'partnersignup', component: PartnersignupComponent},
{path: 'userempresa', component: UserempresaComponent},
{path: 'signup', component: SignupComponent},
{path: 'home', component: HomeComponent},
{path: 'maps', component: EmpresaPublicComponent},
{path: '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    MainindexComponent,
    LoginComponent,
    SignupComponent,
    PartnersignupComponent,
    UserComponent,
    UserempresaComponent,
    FormUserCompComponent,
    ContactFormComponentComponent,
<<<<<<< HEAD
    HomeComponent,
    EmpresaPublicComponent,
    EditarmapaComponent,
  //  MapaEditarComponent
=======
    EmpresaPublicComponent
>>>>>>> 7794ea404aedca90775cc819439301c5bc030db6
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBo_yYzDg-znlZfLyBJAZDPiR9x80lhh3E'
    }),
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
