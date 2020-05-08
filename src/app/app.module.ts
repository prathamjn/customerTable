import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { CustomerListingComponent } from './customer-listing/customer-listing.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ConfigService } from './config.service';
import { NgxSpinnerModule } from "ngx-spinner";
export const configFactory = (configService: ConfigService) => {
  return () => configService.loadConfig();
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerListingComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [ConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
