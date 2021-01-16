import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Business } from '../business/business';

@Injectable()
export class BusinessService {

  constructor(private httpClient:HttpClient) { }

  path = 'https://api.zaguru.com/api/Classes/getClasses';

  getBusinesses():Observable<Business[]>{
      return this.httpClient.get<Business[]>(this.path);
  }


}
