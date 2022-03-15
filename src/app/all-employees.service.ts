import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllEmployeesService {

  constructor(private httpClient:HttpClient) { }
  getallemployeesdata():Observable<any>
  {
    return this.httpClient.get("https://6222413b666291106a21d80b.mockapi.io/employees")
  }
  deleteemployeesdata(id:any):Observable<any>
  {
    return this.httpClient.delete("https://6222413b666291106a21d80b.mockapi.io/employees/"+id);
  }
  createVehicle(data:any):Observable<any> 
  {
    return this.httpClient.post("https://6222413b666291106a21d80b.mockapi.io/employees",data); 
  }
  UpdateVehicle(id:any,data:any):Observable<any> 
  {
    return this.httpClient.put("https://6222413b666291106a21d80b.mockapi.io/employees/"+id,data); 
  }
  getDetails(id:any):Observable<any>
  {
    return this.httpClient.get("https://6222413b666291106a21d80b.mockapi.io/employees/"+id)
  }




}
