import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DeviceDetectorModule } from 'ngx-device-detector';


import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaskPipe, NgxMaskModule} from 'ngx-mask';
import { RequestInterceptor } from './modules/shared/http-interceptor/http.interceptor';
import { ConnectionServiceModule } from 'ng-connection-service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SharedModule } from './modules/shared/shared.module';
import {DashboardModule} from './modules/dashboard/dashboard.module';
import { MaterialModules } from './modules/materials.module';
import { Services } from './modules/shared/services';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxMaskModule.forRoot({}),
    DeviceDetectorModule.forRoot(),
    AppRoutingModule,
    AuthenticationModule,
    BrowserAnimationsModule,
    ConnectionServiceModule,
    HttpClientModule,
    MaterialModules,
    DashboardModule,
    SharedModule,
  ],
  providers: [
    Services,
    {
      provide: MaskPipe,
      useClass: MaskPipe,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
