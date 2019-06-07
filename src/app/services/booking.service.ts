import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  public bookings: Array<Booking>;

  constructor(private httpClient: HttpClient) {
    this.loadAllBookings();
  }

  loadAllBookings() {
    this.httpClient.get('http://localhost:3000/bookings').subscribe((response: Array<Booking>) => {
      this.bookings = response;
    });
  }

  getAllBookings(): Array<Booking> {
    return this.bookings;
  }

}