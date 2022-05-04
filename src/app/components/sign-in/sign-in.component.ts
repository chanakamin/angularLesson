import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private userService: UserService) { }

  userName = '';
  password = '';

  ngOnInit(): void {
  }

  signIn(event: any) {
    this.userService.signIn(this.userName, this.password)
  }

}
