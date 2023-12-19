import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { TestPage2Component } from './pages/test-page2/test-page2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    TestPageComponent,
    TestPage2Component
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,

    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
