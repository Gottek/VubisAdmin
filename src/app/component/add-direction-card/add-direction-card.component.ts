import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Direction} from '../../models/direction.model';
import {ClearInputComponent} from '../clear-input/clear-input.component';
import {UploaderComponent} from '../uploader/uploader.component';
import {SelectComponent} from '../select/select.component';

@Component({
  selector: 'app-add-direction-card',
  templateUrl: './add-direction-card.component.html',
  styleUrls: ['./add-direction-card.component.css']
})
export class AddDirectionCardComponent implements OnInit {

  TableItem=[1];

  @ViewChild(ClearInputComponent) DistanceInput: ClearInputComponent;
  @ViewChild(SelectComponent) SelectInput: UploaderComponent;
  constructor() { }

  ngOnInit(): void {
  }

  addNewOne(){
    this.TableItem.push(0);
  }

  creatDirections(){
    console.log("you are creating Directions");
  }
}
