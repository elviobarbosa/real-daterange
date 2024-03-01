import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RealDaterangeComponent } from './real-daterange/real-daterange/real-daterange.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RealDaterangeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'real-daterange';
}
