import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
//import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';
import { AdminComponent } from './routes/admin/admin.component';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';
import { Page404Component } from './routes/page404/page404.component';
import { StoreComponent } from './routes/store/store.component';
import { SignupComponent } from './routes/signup/signup.component';
import { WeAreComponent } from './routes/we-are/we-are.component';
import { ShopcartComponent } from './routes/shopcart/shopcart.component';

const routes: Routes = [
  {path:"", pathMatch: "full",redirectTo: "/home" },
  
  {path: "home", component: HomeComponent},
  {path: "store", component: StoreComponent, canActivate:[UserGuard]},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "admin", component: AdminComponent},//canActivate: [AdminGuard]},
  {path: "weAre", component: WeAreComponent},
  {path: "shopcart", component: ShopcartComponent},
  {path:"**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
