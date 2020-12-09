import {Component, Input, OnInit} from '@angular/core';
import {AddDirectionCardComponent} from '../add-direction-card/add-direction-card.component';

@Component({
  selector: 'app-clear-input',
  templateUrl: './clear-input.component.html',
  styleUrls: ['./clear-input.component.css']
})
export class ClearInputComponent implements OnInit {

  @Input() value = '';
  @Input() id;

  @Input() titleText = 'An example';

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange(): void {
  }

}
