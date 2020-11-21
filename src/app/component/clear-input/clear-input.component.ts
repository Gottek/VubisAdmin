import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-clear-input',
  templateUrl: './clear-input.component.html',
  styleUrls: ['./clear-input.component.css']
})
export class ClearInputComponent implements OnInit {

  @Input() value = '';

  @Input()
  titleText = 'An example';
  constructor() { }

  ngOnInit(): void {
  }

}
