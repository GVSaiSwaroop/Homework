import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeedata:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    mobile:new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    dob:new FormControl(null,[Validators.required]),
    address:new FormGroup({
      addressLine:new FormControl(null,[Validators.required]),
      city:new FormControl(null,[Validators.required]),
      state:new FormControl(null,[Validators.required]),
      pincode:new FormControl(null,[Validators.required]),
    }),
    education:new FormArray([]),
    details:new FormControl(),

  })
  get educationFormArray(){
    return this.employeedata.get('education') as FormArray;
  }

  addtocart()
  {
    this.educationFormArray.push(
      new FormGroup({
        qualification:new FormControl(null,[Validators.required]),
        year:new FormControl(null,[Validators.required,Validators.minLength(1),Validators.maxLength(20)]),  
        percentage:new FormControl(null,[Validators.required,Validators.minLength(1),Validators.maxLength(20)]),  

      })
    )  
  }
  delete(i:any)
  {
    this.educationFormArray.removeAt(i)
  }

  submit()
  {
    this.employeedata.markAllAsTouched();
    console.log(this.employeedata);
  }
  

  

  constructor() { 
    this.employeedata.get('details')?.valueChanges.subscribe(
      data=>{
        if(data=='Frontend')
        {
          this.employeedata.addControl('HTML',new FormControl(null,[Validators.required]));
          this.employeedata.addControl('CSS',new FormControl(null,[Validators.required]));
          this.employeedata.addControl('js',new FormControl(null,[Validators.required]));
          this.employeedata.addControl('angular',new FormControl(null,[Validators.required]));
          this.employeedata.removeControl('nodejs');
          this.employeedata.removeControl('expressjs');
          this.employeedata.removeControl('mongodb');

        }
        else
        {
          this.employeedata.addControl('nodejs',new FormControl(null,[Validators.required]));
          this.employeedata.addControl('expressjs',new FormControl(null,[Validators.required]));
          this.employeedata.addControl('mongodb',new FormControl(null,[Validators.required]));
          this.employeedata.removeControl('HTML');
          this.employeedata.removeControl('CSS');
          this.employeedata.removeControl('js');
          this.employeedata.removeControl('angular');



        }
        console.log(this.employeedata)
      }
    )
   }




  ngOnInit(): void {
  }

}
