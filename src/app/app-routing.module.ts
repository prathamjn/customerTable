import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'; 
import {CustomerListingComponent} from './customer-listing/customer-listing.component';
import {AddCustomerComponent} from './add-customer/add-customer.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'customer', component: CustomerListingComponent},
  {path: 'add-customer', component: AddCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
