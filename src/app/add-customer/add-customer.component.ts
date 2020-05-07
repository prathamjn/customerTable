import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  addCustomerSuccess = '';
  customerForm = new FormGroup({
    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    Address: new FormControl('', [Validators.required]),
    Phonenumber: new FormControl('', [Validators.required])
  })
  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  submitCustomer() {
    console.log('Form value',this.customerForm.value);
    this.customerService.addCustomer(this.customerForm.value).subscribe((data:string) => {
      this.addCustomerSuccess = data;
      setTimeout(() => {
        this.addCustomerSuccess = '';
        this.router.navigate(['customer']);
      }, 2000)
    });
  }
}
