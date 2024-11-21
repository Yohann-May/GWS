import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) { }
  
  navigateToEsport() {
    this.router.navigate(['/esport']);
  }
  navigateToBadminton(): void {
    this.router.navigate(['/basketball']);
  }
  navigateToHandball(): void {
    this.router.navigate(['/handball']);
  }
  navigateToVolleyball(): void {
    this.router.navigate(['/volleyball']);
  }
  navigateToFootball(): void {
    this.router.navigate(['/football']);
  }
  navigateToKickBoxing(): void {
    this.router.navigate(['/boxing']);
  }
  navigateToGymnastic(): void {
    this.router.navigate(['/gymnastic']);
  }
  navigateToRunning(): void {
    this.router.navigate(['/running']);
  }
  navigateToLacrosse(): void {
    this.router.navigate(['/lacrosse']);
  }
}
