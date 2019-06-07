import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient) {}

  getAllBookings(): Observable<Array<Booking>> {
    return this.httpClient.get<Array<Booking>>('http://localhost:3000/bookings');
  }
}