import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegistrationComp } from '../pages/registration/registration';
import { TestComp } from '../pages/test/test';
import { DataApiModule } from './data/api.module';
import { HttpModule } from '@angular/http';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { CanvaComp } from '../pages/canva/canva';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RegistrationComp,
    TestComp,
    CanvaComp
  ],
  imports: [
    BrowserModule,
    DataApiModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RegistrationComp,
    TestComp,
    CanvaComp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
