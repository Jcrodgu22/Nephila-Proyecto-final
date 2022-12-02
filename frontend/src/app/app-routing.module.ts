import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';
import { Page404Component } from './routes/page404/page404.component';
import { ServicesComponent } from './routes/services/services.component';
import { SignupComponent } from './routes/signup/signup.component';
import { StoreComponent } from './routes/store/store.component';
import { WeAreComponent } from './routes/we-are/we-are.component';

const routes: Routes = [
  {path:"", pathMatch: "full",redirectTo: "/home" },
  
  {path: "home", component: HomeComponent},
  {path: "weAre", component: WeAreComponent},
  {path: "store", component: StoreComponent},
  {path: "login", component: LoginComponent},
  {path: "services", component: ServicesComponent},
  {path:"signup", component: SignupComponent },
  {path:"**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
