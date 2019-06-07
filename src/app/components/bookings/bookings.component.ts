import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  public bookings: Array<Booking>;

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.bookingService.getAllBookings().subscribe((response) => {
      this.bookings = response;
    });
  }

}
