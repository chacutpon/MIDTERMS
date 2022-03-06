import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Flight } from './flight';


@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  flight: Flight[] = [];
  flightForm: FormGroup;

  constructor(
    private fb: FormBuilder

  ) {
    this.flightForm = this.fb.group({
      fullName: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      type: ['', Validators.required],
      adults: ['', [Validators.required, Validators.pattern('^[0-9]{0,1}')]],
      departure: ['', Validators.required],
      children: ['', [Validators.required, Validators.pattern('^[0-9]{0,1}')]],
      infants: ['', [Validators.required, Validators.pattern('^[0-9]{0,1}')]],
      arrival: ['', Validators.required],
    });


  }

  ngOnInit(): void {
  }

}
