import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TripCard } from "./trip-card/trip-card";
import { TripListing } from "./trip-listing/trip-listing";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('Travlr Getaways Admin!');
}
