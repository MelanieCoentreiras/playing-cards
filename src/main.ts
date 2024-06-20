import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';

// Définissez vos routes ici si nécessaire
const routes: Routes = [
  // { path: '', component: SomeComponent }
];

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserModule), provideRouter(routes)],
}).catch((err) => console.error(err));
