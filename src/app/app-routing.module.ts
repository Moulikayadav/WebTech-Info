import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { HOMEComponent } from './home/home.component';
import { HTMLComponent } from './html/html.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { PythonComponent } from './python/python.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SQLComponent } from './sql/sql.component';
import { TechnologiesComponent } from './technologies/technologies.component';

const routes: Routes = [
  {path:'home',component:HOMEComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'technologies',component:TechnologiesComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'html',component:HTMLComponent},
  {path:'javascript',component:JavascriptComponent},
  {path:'bootstrap',component:BootstrapComponent},
  {path:'footer',component:FooterComponent},
  {path:'sql',component:SQLComponent},
  {path:'python',component:PythonComponent},
  
  


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
