import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  @Input() value = new Date();

  constructor() {
  }

  ngOnInit(): void {
  }

}
