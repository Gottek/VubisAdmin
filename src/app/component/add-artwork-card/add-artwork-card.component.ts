import {Component, Inject, Input, OnInit, Optional, ViewChild} from '@angular/core';
import {ClearInputComponent} from '../clear-input/clear-input.component';
import {ClearDescriptionInputComponent} from '../clear-description-input/clear-description-input.component';
import {DatePickerComponent} from '../date-picker/date-picker.component';
import {UploaderComponent} from '../uploader/uploader.component';
import {ImageStorageService} from '../../services/image-storage.service';
import {ArtWork} from '../../models/art-work.model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-artwork-card',
  templateUrl: './add-artwork-card.component.html',
  styleUrls: ['./add-artwork-card.component.css']
})
export class AddArtworkCardComponent implements OnInit {

  @ViewChild('AuthorArtWork') AuthorInput: ClearInputComponent;
  @ViewChild('NameArtWork') NameInput: ClearInputComponent;
  @ViewChild(ClearDescriptionInputComponent) DescriptionInput: ClearDescriptionInputComponent;
  @ViewChild(DatePickerComponent) DateInput: DatePickerComponent;
  @ViewChild(UploaderComponent) UploaderInput: UploaderComponent;

  @Input() artWork: ArtWork;

  constructor(private ImageService: ImageStorageService) {
  }

  ngOnInit(): void {
  }

  creatArtWork() {
    const image = this.UploaderInput.image;
    this.ImageService.uploadArtworkImage(image.name, image).then();
    return {
      Author: this.AuthorInput.value,
      Date: this.DateInput.Value,
      Description: this.DescriptionInput.value,
      Title: this.NameInput.value,
      Urimage: image.name
    };
  }
}
