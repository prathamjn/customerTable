import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  addCustomerSuccess = '';
  errorMsg = '';
  customerForm = new FormGroup({
    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    Address: new FormControl('', [Validators.required]),
    Phonenumber: new FormControl('', [Validators.required])
  })
  constructor(private customerService: CustomerService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  submitCustomer() {
    console.log('Form value',this.customerForm.value);
    this.spinner.show();
    this.customerService.addCustomer(this.customerForm.value).subscribe((data:string) => {
      this.spinner.hide();
      this.addCustomerSuccess = data;
      this.errorMsg = '';
      setTimeout(() => {
        this.addCustomerSuccess = '';
        this.router.navigate(['customer']);
      }, 2000)
    }, error => {
      this.spinner.hide();
      this.errorMsg = error.error.Message;
      
    });
  }
}
