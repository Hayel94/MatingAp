import { NotExpr } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister=new EventEmitter();
 model:any={};
  constructor(private authService:AuthService ) { }

  ngOnInit() {
  }
  register(){
    return this.authService.register(this.model).subscribe(
     ()=>{console.log('تم الاشتراك')},
    error=>{console.error(error)}

    )
  }
  cancel(){
    console.log('canceled tyr later');
    this.cancelRegister.emit(false);
  }

}
