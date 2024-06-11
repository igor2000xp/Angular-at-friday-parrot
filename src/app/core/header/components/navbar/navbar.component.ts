// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [],
//   templateUrl: './navbar.component.html',
//   styleUrl: './navbar.component.scss'
// })
// export class NavbarComponent {

// }
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule
  ]
})
export class NavbarComponent {
  // Any required logic for the navbar can be added here
}
