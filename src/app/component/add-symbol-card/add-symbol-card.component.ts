import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {DatePickerComponent} from '../date-picker/date-picker.component';
import {UploaderComponent} from '../uploader/uploader.component';
import {ClearInputComponent} from '../clear-input/clear-input.component';

@Component({
  selector: 'app-add-symbol-card',
  templateUrl: './add-symbol-card.component.html',
  styleUrls: ['./add-symbol-card.component.css']
})
export class AddSymbolCardComponent implements OnInit {

  // @Output() Symbol: EventEmitter<Symbol> = new EventEmitter();

  @ViewChild(ClearInputComponent) SymbolInput: ClearInputComponent;
  @ViewChild(UploaderComponent) UploaderInput: UploaderComponent;
  constructor() { }

  ngOnInit(): void {
  }

  creatSymbol(){
    return {
      Symbol : this.SymbolInput.value,
      url : this.UploaderInput.avatarUrl
    };
  }

}
