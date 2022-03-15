import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';
import { AllEmployeesService } from '../all-employees.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  Details:any={};
  
  constructor(private allEmployeeService:AllEmployeesService,private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data);
        this.allEmployeeService.getDetails(data.id).subscribe(
          (data:any)=>{
            this.Details=data;
          },
          (error:any)=>{
            alert("server down")
          }
        )   
      }
    )

  }
  ngOnInit(): void {
  }

}
