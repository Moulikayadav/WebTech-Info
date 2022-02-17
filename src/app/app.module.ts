import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HOMEComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HTMLComponent } from './html/html.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { FooterComponent } from './footer/footer.component';
import { SQLComponent } from './sql/sql.component';
import { PythonComponent } from './python/python.component';

@NgModule({
  declarations: [
    AppComponent,
    HOMEComponent,
    AboutUsComponent,
    ContactUsComponent,
    TechnologiesComponent,
    SigninComponent,
    SignupComponent,
    HTMLComponent,
    JavascriptComponent,
    BootstrapComponent,
    FooterComponent,
    SQLComponent,
    PythonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
