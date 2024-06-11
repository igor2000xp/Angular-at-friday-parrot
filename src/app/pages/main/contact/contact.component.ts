import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { contactData } from '../data/contact-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  data = contactData;
}
