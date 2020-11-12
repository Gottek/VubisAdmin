import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  items=[{value: 'Left', viewValue: 'Left'},{value: 'Right', viewValue: 'Right'}]
  constructor() { }

  ngOnInit(): void {
  }

}
