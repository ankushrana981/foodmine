import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { LoadingInterceptor } from './components/shared/interceptors/loader.interceptor';
import { AuthInterceptor } from './auth/auth.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [ provideHttpClient(withFetch()),provideRouter(routes), provideClientHydration(), 
    provideAnimations(),
    provideToastr(),
    { provide:HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi:true},
    { provide:HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}
  ]
};
