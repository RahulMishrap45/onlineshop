import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { Model, sellerlogIn } from '../shared/model.model';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
users: Model[];
showlogIn=true;
Invalid:string | undefined;
constructor(private userservice:UserService,private route:Router){}

ngOnInit():void{
  
}

UsersignupPage(value:Model){
  this.userservice.userRegister(value)
}

Userlogin(){
this.showlogIn =false;
}

UserloginPage(value:Model){
  this.userservice.userlogin(value).subscribe(result =>{
    console.log(result)
    if(result==true){
      this.route.navigate(['/home'])
    }else{
      this.Invalid="Invalid Credential!!";
      setTimeout(()=>{
        this.Invalid=undefined
      },2000);
    }
  })
}

UserSignUp(){
this.showlogIn =true;
}
}
