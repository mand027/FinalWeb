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
import { EmpresaPublicComponent } from './empresa-public/empresa-public.component';

const appRoutes: Routes = [
{path: 'user', component: UserComponent},
{path: 'login', component: LoginComponent},
{path: 'main', component: MainindexComponent},
{path: 'partnersignup', component: PartnersignupComponent},
{path: 'userempresa', component: UserempresaComponent},
{path: 'signup', component: SignupComponent},
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
    EmpresaPublicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
