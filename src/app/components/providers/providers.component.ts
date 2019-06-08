import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/services/provider.service';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})

export class ProvidersComponent implements OnInit {

  public providers: Array<Person> = new Array();

  constructor(private providerService: ProviderService) {
    this.providerService.getAllProviders((res) => {
      this.providers = res;
    });
  }

  ngOnInit() {
  }

}
