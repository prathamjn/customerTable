import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  public getAllCustomers() {
    const reqHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer TempAuthToken1234'
    })
    return this.httpClient.get(`https://testwebapiabhi.azurewebsites.net/api/Customer`, { headers: reqHeaders });
  }

  public getSpecificCustomer(cusLname) {
    const reqHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer TempAuthToken1234'
    });
    return this.httpClient.get(`https://testwebapiabhi.azurewebsites.net/api/Customer?lastName=` + cusLname, { headers: reqHeaders });

  }

  public addCustomer(customerObj) {
    const reqHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer TempAuthToken1234',
      'transactionID': Math.random().toString(36).substring(12),
      'agentID':  Math.random().toString(36).substring(5),
    });
    return this.httpClient.post(`https://testwebapiabhi.azurewebsites.net/api/Customer`, customerObj, { headers: reqHeaders });
  }
}
