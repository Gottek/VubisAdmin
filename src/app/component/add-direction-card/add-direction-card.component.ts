import {Component, OnInit, ViewChild} from '@angular/core';
import {ClearInputComponent} from '../clear-input/clear-input.component';
import {UploaderComponent} from '../uploader/uploader.component';
import {SelectComponent} from '../select/select.component';
import {ArtWorkService} from '../../services/art-work.service';
import {FormArray, FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-direction-card',
  templateUrl: './add-direction-card.component.html',
  styleUrls: ['./add-direction-card.component.css']
})
export class AddDirectionCardComponent implements OnInit {


  TableItem = [{
    direction:'Left',
    distance:1
  }];

  myItems = new FormArray([new FormArray([
    new FormControl('Left'),
    new FormControl(1)
  ])]);

  // @ViewChild(SelectComponent) directionsTab: SelectComponent;
  // @ViewChild(ClearInputComponent) distanceTab: ClearInputComponent;

  constructor(private ArtWorkService: ArtWorkService) {
  }

  addNewOne() {
   /* this.TableItem.push({
      direction:'Right',
      distance:22
    });*/
    this.myItems.push(new FormArray([new FormControl('Right'),new FormControl(22)]));
    console.log(this.myItems.controls);
  }

  removeOne(){
    // this.TableItem.pop();
    this.myItems.controls.pop();
  }

  creatDirections(){

    console.log(this.myItems.controls)
    // console.log(this.TableItem);
    // return directions;

  }

  ngOnInit(): void {
  }
}
