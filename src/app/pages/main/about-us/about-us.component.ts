// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-about-us',
//   standalone: true,
//   imports: [],
//   templateUrl: './about-us.component.html',
//   styleUrl: './about-us.component.scss'
// })
// export class AboutUsComponent {

// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsCardComponent } from './about-us-card/about-us-card.component';
import { aboutUsData } from '../data/about-us-data';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, AboutUsCardComponent],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  data = aboutUsData;
}

