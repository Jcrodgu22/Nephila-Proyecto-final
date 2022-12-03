import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';
import { SignupComponent } from './routes/signup/signup.component';
import { AdminComponent } from './routes/admin/admin.component';
import { Page404Component } from './routes/page404/page404.component';
//import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http' //-- permite consumir apis con el cliente http de angular
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "./components/footer/footer.component";
import { StoreComponent } from './routes/store/store.component';
import { WeAreComponent } from './routes/we-are/we-are.component';
import { ServicesComponent } from './routes/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    //CardsComponent,
    FooterComponent,
    //FormularyComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    Page404Component,
    SignupComponent,
    StoreComponent,
    WeAreComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
