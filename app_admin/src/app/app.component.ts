import { Component } from '@angular/core';
import { TripListingComponent } from './trip-listing/TripListingComponent';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, TripListingComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Travlr Getaways merlin admin side';
}
