import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  //basic select with only two posibility
  @Input() formController ="Left"
  items=[{value: 'Left', viewValue: 'Left'},{value: 'Right', viewValue: 'Right'}]
  constructor() {
  }

  ngOnInit(): void {
  }

}
