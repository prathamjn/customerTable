import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer-listing',
  templateUrl: './customer-listing.component.html',
  styleUrls: ['./customer-listing.component.scss']
})
export class CustomerListingComponent implements OnInit {
  customerList;
  searchLname: string;
  showListing: boolean = true;
  tableColumns: string[] = ['position', 'FirstName', 'LastName', 'Address', 'Phonenumber']
  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe((data) => {
      
      this.customerList = data;
      this.customerList.map((customer, index) => {
        customer['position'] = index + 1;
      });
    });
  }

  ngAfterContentInit(): void {}

  searchCustomer() {
    this.customerService.getSpecificCustomer(this.searchLname).subscribe((data) => {
      this.customerList = data;
      this.customerList.map((customer, index) => {
        customer['position'] = index + 1;
      });
    });
  }

  showAddForm() {
    this.showListing = false;
  }

  addCustomer() {
    this.router.navigate(['add-customer']);
  }

}
