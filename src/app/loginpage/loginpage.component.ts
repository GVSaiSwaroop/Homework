import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  loginForm:FormGroup=new FormGroup({})

  login()
  {
    this.loginService.postlogindata(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("posted Successfully")
        localStorage.setItem("token",data.token)
        this.router.navigateByUrl("/dashboard")
      },
      (error:any)=>{
        alert("server down")
      }
    )
  }

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

}
