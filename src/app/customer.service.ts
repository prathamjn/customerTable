import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  reqHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer TempAuthToken1234'
  })
  constructor(private httpClient: HttpClient, private configService: ConfigService) { }

  public getAllCustomers() {
    console.log('URL', this.configService.config);
    return this.httpClient.get(`${this.configService.config.apiUrl}Customer`, { headers: this.reqHeaders });
  }

  public getSpecificCustomer(cusLname) {
    return this.httpClient.get(`${this.configService.config.apiUrl}Customer?lastName=` + cusLname, { headers: this.reqHeaders });
  }

  public addCustomer(customerObj) {
    this.reqHeaders['transactionID'] = Math.random().toString(36).substring(12);
    this.reqHeaders['agentID'] = Math.random().toString(36).substring(5);
    return this.httpClient.post(`${this.configService.config.apiUrl}Customer`, customerObj, { headers: this.reqHeaders });
  }
}
