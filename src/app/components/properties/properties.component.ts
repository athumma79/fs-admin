import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})

export class PropertiesComponent implements OnInit {

  public properties: Array<Property> = new Array();

  constructor(private propertyService: PropertyService) {
    this.propertyService.getAllProperties((res) => {
      this.properties = res;
    });
  }

  ngOnInit() {
  }

}
