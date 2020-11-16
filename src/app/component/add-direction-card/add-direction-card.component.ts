import {Component, OnInit, ViewChild} from '@angular/core';
import {ClearInputComponent} from '../clear-input/clear-input.component';
import {UploaderComponent} from '../uploader/uploader.component';
import {SelectComponent} from '../select/select.component';
import {ArtWorkService} from '../../services/art-work.service';

@Component({
  selector: 'app-add-direction-card',
  templateUrl: './add-direction-card.component.html',
  styleUrls: ['./add-direction-card.component.css']
})
export class AddDirectionCardComponent implements OnInit {

  TableItem = [1];
  @ViewChild(ClearInputComponent) DistanceInput: ClearInputComponent;
  @ViewChild(SelectComponent) SelectInput: UploaderComponent;

  constructor(private ArtWorkService: ArtWorkService) {
  }

  addNewOne() {
    this.TableItem.push(0);
  }

  ngOnInit() {
  }

  handleNumberChange(val) {

  }

  creatDirections() {


    // return {
    //   direction: this.SymbolInput.value,
    //   distance: image.name,
    //   idArtWork: this.ArtWorkService.currentArtWorkId
    // };
  }
}
