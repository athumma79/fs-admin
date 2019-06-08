import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient) {}

  getAllBookings(assign: Function) {
    this.httpClient.get('http://localhost:3000/bookings').subscribe((response: Array<Booking>) => {
      assign(response);
    });
  }

}