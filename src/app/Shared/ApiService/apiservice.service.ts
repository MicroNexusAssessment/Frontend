import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  baseURL='http://localhost:2004'

  constructor(
    private http:HttpClient,
  ) 
  { }


  apiService_insertScore(data:any){    
    return this.http.post(`${this.baseURL}/api/firstroute/insertScore`,data)
  }


  apiService_getScoreIdBased(player_id:any){
    return this.http.get(`${this.baseURL}/api/firstroute/getScoreIdBased/${player_id}`)
  }
  

  apiService_DeleteScoreIdBased(data:any){
    return this.http.post(`${this.baseURL}/api/firstroute/deleteScore`,data)
  }
  
}
