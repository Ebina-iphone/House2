import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { DetailsComponent } from '../details/details.component';


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css','../details/details.Component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
