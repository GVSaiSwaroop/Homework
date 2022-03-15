import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllEmployeesService } from '../all-employees.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {
  employees:any=[];

  delete(id:any)
  {
    this.allemployeeServices.deleteemployeesdata(id).subscribe(
      (data:any)=>{
        alert("Deleted Successfully")
      },
      (error:any)=>{
        alert("server down")
      }
    )
  }

  /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/ 

  view(id:any){
    this.router.navigateByUrl("/dashboard/employee-details/"+id)
  }

  constructor(private allemployeeServices:AllEmployeesService,private router:Router) {
    this.allemployeeServices.getallemployeesdata().subscribe(
      (data:any)=>{
        this.employees=data;
      },
      (error:any)=>{
        alert("server down")
      }
    )

    
 
   }

  ngOnInit(): void {
  }

}
