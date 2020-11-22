import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() modelValue: string;
  @Input() id;
  items=[{value: 'Left', viewValue: 'Left'},{value: 'Right', viewValue: 'Right'}]
  constructor() {
  }

  ngOnInit(): void {
  }

  onchange(e):void {
    // console.log(e.value);
    // console.log(this.id);
  }

}
