import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripCard } from '../trip-card/trip-card';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';
import { Router } from '@angular/router';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCard],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css',
  providers: [TripDataService]
})

export class TripListing implements OnInit {

  trips!: Trip[];
  message: string = '';

  constructor(
    private tripDataService: TripDataService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private authenticationService: Authentication
  ) {
    console.log('trip-listing constructor');
  }

  private getStuff(): void {
    this.tripDataService.getTrips()
      .subscribe({
        next: (value: any) => {
          this.trips = value;
          if(value.length > 0)
          {
            this.message = 'There are ' + value.length + ' trips available.';
          }
          else{
            this.message = 'There were no trips retireved from the database';
          }
          console.log(this.message);
          this.cdr.markForCheck();
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
  }

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }
}