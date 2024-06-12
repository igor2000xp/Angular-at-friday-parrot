import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsCardComponent } from './tools-card/tools-card.component';
import { toolsData } from '../data/tools-data';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [CommonModule, ToolsCardComponent],
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {
  data = toolsData;
}

