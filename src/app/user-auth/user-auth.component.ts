import { Component } from '@angular/core';
import { observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { Model, sellerlogIn } from '../shared/model.model';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
showlogIn=true;
constructor(private userservice:UserService){}

ngOnInit():void{
  
}
users: Model[]=[];
UsersignupPage(value:Model){
  console.log(value);
  this.userservice.userPostMessage(value)
}

Userlogin(){
this.showlogIn =false;
}

UserloginPage(value:sellerlogIn){
  this.userservice.usergetMessage(value);
}

UserSignUp(){
this.showlogIn =true;
}
}
