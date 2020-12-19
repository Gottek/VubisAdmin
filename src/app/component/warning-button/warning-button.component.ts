import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-warning-button',
  templateUrl: './warning-button.component.html',
  styleUrls: ['./warning-button.component.css']
})
export class WarningButtonComponent implements OnInit {

  //basic button
  @Input()
  buttonText = '';
  constructor() { }

  ngOnInit(): void {
  }

}
