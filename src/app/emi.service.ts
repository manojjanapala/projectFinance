import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Emi} from './emi';
@Injectable({
  providedIn: 'root'
})
export class EmiService {

  baseUrl: string = 'http://localhost:8080/';
  constructor(private myhttp:HttpClient) { }
  getAllEmis(userName:string) :Observable<Emi[]>
  {
    return this.myhttp.get<Emi[]>(this.baseUrl+"getAllUserEMIs/"+userName);
  }
}
