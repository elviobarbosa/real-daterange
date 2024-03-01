import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import {DateRange, MAT_DATE_RANGE_SELECTION_STRATEGY, MatCalendar, MatCalendarCellClassFunction, MatCalendarCellCssClasses, MatDatepickerIntl, MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {DateAdapter, MAT_DATE_FORMATS, MatDateFormats, provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'real-daterange',
  standalone: true,
  imports: [MatDatepickerModule, MatCardModule, MatFormFieldModule, ],
  providers: [
    provideNativeDateAdapter(),
    { provide: MatCalendar, useExisting: RealDaterangeComponent }
  ],

  templateUrl: './real-daterange.component.html',
  styleUrl: './real-daterange.component.scss'
})
export class RealDaterangeComponent extends MatCalendar<Date> {
  selectedDates: Date[] = [];
  selectedDate: Date | DateRange<Date> | null = null;


  constructor(
    _intl: MatDatepickerIntl,
    _dateAdapter: DateAdapter<Date>,
    @Inject(MAT_DATE_FORMATS) _dateFormats: MatDateFormats,
    _changeDetectorRef: ChangeDetectorRef
  ) {
    super(_intl, _dateAdapter, _dateFormats, _changeDetectorRef);
  }

  dateSelected(date: Date | null): void {
    if (date) {
      const index = this.selectedDates.findIndex(selectedDate => this.dateComparator(selectedDate, date));
      if (index < 0) {
        this.selectedDates.push(date);
      } else {
        this.selectedDates.splice(index, 1);
      }
    }
    console.log(this.selectedDates, 'ok');
    
   //this._selectedChanged();
  }
  // override dateClass = (date: Date): MatCalendarCellCssClasses => {
  //   return this.isLastTwoDates(date) ? 'red-background' : '';
  // }

  override dateClass: MatCalendarCellClassFunction<Date> = (date: Date) => {
    return this.isLastTwoDates(date) ? 'red-background' : '';
  };
  isSelected(date: Date): boolean {
    return this.selectedDates.some(selectedDate => this.dateComparator(selectedDate, date));
  }

  getLastTwoSelectedDates(): Date[] {
    const length = this.selectedDates.length;
    if (length >= 2) {
      return [this.selectedDates[length - 2], this.selectedDates[length - 1]];
    }
    return [];
  }

  isLastTwoDates(date: Date): boolean {
    const lastTwoDates = this.getLastTwoSelectedDates();
    return lastTwoDates.includes(date);
  }

  private dateComparator = (date1: Date, date2: Date) => {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  }
}
