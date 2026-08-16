import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css',
})
export class TripCard implements OnInit {

  @Input('trip') trip: any;

  constructor(
    private router: Router,
    private authenticationService: Authentication
  ) {}

  ngOnInit(): void {}

  public editTrip(): void {
    localStorage.setItem('tripCode', this.trip.code);
    this.router.navigate(['edit-trip']);
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

}
