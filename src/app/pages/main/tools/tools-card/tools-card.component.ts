// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-tools-card',
//   standalone: true,
//   imports: [],
//   templateUrl: './tools-card.component.html',
//   styleUrl: './tools-card.component.scss'
// })
// export class ToolsCardComponent {

// }

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tools-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tools-card.component.html',
  styleUrls: ['./tools-card.component.scss']
})
export class ToolsCardComponent {
  @Input() tool: any;
}

