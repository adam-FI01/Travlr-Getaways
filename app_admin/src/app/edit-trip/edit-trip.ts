import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.html',
  styleUrl: './edit-trip.css',
})
export class EditTrip implements OnInit {
  editForm!: FormGroup;
  submitted = false;
  tripCode!: string;
  message: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private tripDataService: TripDataService
  ) {}

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      id: [],
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });

    const tripCode = this.route.snapshot.paramMap.get('code');
    if (!tripCode) {
      alert("Something wrong, couldn't find the trip code to edit!");
      this.router.navigate(['']);
      return;
    }

    this.tripCode = tripCode;
    console.log('EditTrip component::tripCode: ' + tripCode);

    this.tripDataService.getTrip(tripCode)
      .subscribe({
        next: (value: any) => {
          if (value && value.length > 0) {
            this.editForm.patchValue(value[0]);
            this.message = 'Trip: ' + tripCode + ' retrieved';
          } else {
            this.message = 'No Trip Retrieved!';
          }
          console.log(this.message);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      });
  }

  public onSubmit() {
    this.submitted = true;

    if (this.editForm.valid) {
      this.tripDataService.updateTrip(this.editForm.value)
        .subscribe({
          next: (value: any) => {
            console.log(value);
            this.router.navigate(['']);
          },
          error: (error: any) => {
            console.log('Error: ' + error);
          }
        });
    }
  }

  get f() { return this.editForm.controls; }
}