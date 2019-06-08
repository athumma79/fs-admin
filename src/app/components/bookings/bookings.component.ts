import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})

export class BookingsComponent implements OnInit {

  public bookings: Array<Booking> = new Array();

  constructor(private bookingService: BookingService) {
    this.bookingService.getAllBookings((res) => {
      this.bookings = res;
    });
  }

  ngOnInit() {
  }

}
