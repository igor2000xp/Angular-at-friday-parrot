import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marketing-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marketing-card.component.html',
  styleUrls: ['./marketing-card.component.scss']
})
export class MarketingCardComponent {
  @Input() marketing: any;
}

