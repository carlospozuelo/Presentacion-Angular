import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetEjemploComponent } from './pages/get-ejemplo/get-ejemplo.component';
import { PostEjemploComponent } from './pages/post-ejemplo/post-ejemplo.component';

@NgModule({
  declarations: [
    AppComponent,
    GetEjemploComponent,
    PostEjemploComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
