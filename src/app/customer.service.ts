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
    'Authorization': 'Bearer TempAuth1234'
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
    console.log('Test', Math.random().toString(36).substring(12));
    const addHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer TempAuth1234',
      'transactionID': this.makeid(12),
      'agentID': Math.random().toString(36).substring(5)
    })
    return this.httpClient.post(`${this.configService.config.apiUrl}Customer`, customerObj, { headers: addHeaders });
  }

  public makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
}
