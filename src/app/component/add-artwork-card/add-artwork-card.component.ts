import {AfterViewInit, Component, EventEmitter, Inject, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ClearInputComponent} from '../clear-input/clear-input.component';
import {ClearDescriptionInputComponent} from '../clear-description-input/clear-description-input.component';
import {DatePickerComponent} from '../date-picker/date-picker.component';
import {UploaderComponent} from '../uploader/uploader.component';
import {ImageStorageService} from '../../services/image-storage.service';
import {ArtWork} from '../../models/art-work.model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ArtWorkService} from '../../services/art-work.service';

@Component({
  selector: 'app-add-artwork-card',
  templateUrl: './add-artwork-card.component.html',
  styleUrls: ['./add-artwork-card.component.css']
})
export class AddArtworkCardComponent implements OnInit, AfterViewInit {


  @Input() artWork: ArtWork = new ArtWork(null, '', new Date(), '', '', '');
  @Output() newArtWork = new EventEmitter<ArtWork>();

  @ViewChild('AuthorArtWork') AuthorInput: ClearInputComponent;
  @ViewChild('NameArtWork') NameInput: ClearInputComponent;
  @ViewChild(ClearDescriptionInputComponent) DescriptionInput: ClearDescriptionInputComponent;
  @ViewChild(DatePickerComponent) DateInput: DatePickerComponent;
  @ViewChild(UploaderComponent) UploaderInput: UploaderComponent;


  constructor(private ImageService: ImageStorageService) {
  }

  ngOnInit(): void {
  }

  creatArtWork() {
    const image = this.UploaderInput.image;
    this.ImageService.uploadImage('ArtImages', image.name, image).then();
    return {
      Author: this.AuthorInput.value,
      Date: this.DateInput.Value,
      Description: this.DescriptionInput.value,
      Title: this.NameInput.value,
      Urimage: image.name
    };
  }
  ngAfterViewInit(): void {
    console.log('afterOnInit 2 ');
    if (this.artWork){
      this.AuthorInput.value = this.artWork.Author;
      this.NameInput.value = this.artWork.Title;
      this.DescriptionInput.value = this.artWork.Description;
      this.DateInput.Value = this.artWork.Date;
      this.UploaderInput.avatarUrl = this.artWork.Urimage;
    }

  }

  onChangeValues(): void {
    console.log('onChange');
    console.log(this.artWork);
  }
}
