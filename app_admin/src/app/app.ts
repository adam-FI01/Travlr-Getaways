import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TripListing } from './trip-listing/trip-listing';

@Component({
  selector: 'app-root',
  imports: [TripListing],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('Travlr Getaways Admin!');
}
