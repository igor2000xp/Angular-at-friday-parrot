import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketingCardComponent } from './marketing-card/marketing-card.component';
import { marketingData } from '../data/marketing-data';

@Component({
  selector: 'app-marketing',
  standalone: true,
  imports: [CommonModule, MarketingCardComponent],
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent {
  data = marketingData;
}

