import { Component } from '@angular/core';
import {MAT_DATE_RANGE_SELECTION_STRATEGY, MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {DateAdapter, provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'real-daterange',
  standalone: true,
  imports: [MatDatepickerModule, MatCardModule, MatFormFieldModule],
  providers: [

    provideNativeDateAdapter(),
  ],
  templateUrl: './real-daterange.component.html',
  styleUrl: './real-daterange.component.scss'
})
export class RealDaterangeComponent {
  filterInput(event: any) {
    console.log('ooooo');

    const input = event.target.value;
    const pattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/; // Formato MM/DD/YYYY
    if (!pattern.test(input)) {
      event.target.value = ''; // Limpa o campo se a entrada não for uma data válida
    }
  }
}
