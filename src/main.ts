import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import {provideFirebaseApp, initializeApp} from '@angular/fire/app';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {environment} from './environments/environment';
import {provideHttpClient} from '@angular/common/http';
bootstrapApplication(AppComponent, {
  providers: [
    //{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(()=> getFirestore()),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideIonicAngular(),
    //provideRouter(routes, withPreloading(PreloadAllModules)),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ]
});
