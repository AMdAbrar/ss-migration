import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private router: Router) {}

  // Navigate to Welcome Page
  navigateToWelcome() {
    this.router.navigate(['/welcomePage']);
  }

  // Mock Send Authentication Code
  sendAuthenticationCode() {
    alert('Authentication code sent to your email!');
  }
}
