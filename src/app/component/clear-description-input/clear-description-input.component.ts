import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-clear-description-input',
  templateUrl: './clear-description-input.component.html',
  styleUrls: ['./clear-description-input.component.css']
})
export class ClearDescriptionInputComponent implements OnInit {

  // basic input
  @Input() value = '';
  constructor() { }

  ngOnInit(): void {
  }

}
