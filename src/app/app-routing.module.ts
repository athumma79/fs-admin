import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { BookingsComponent } from './components/bookings/bookings.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'providers', component: ProvidersComponent },
  { path: 'properties', component: PropertiesComponent },
  { path: 'bookings', component: BookingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
