import { Component } from '@angular/core';


interface Usuario{
  name: string;
  email: string;
  password: string;
}



@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class AuthComponent {}
