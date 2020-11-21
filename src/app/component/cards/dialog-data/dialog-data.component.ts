import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ArtWorkService} from '../../../services/art-work.service';

@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html'
})
export class DialogDataComponent implements OnInit, AfterViewInit {

  dataArt;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private ArtWorkService: ArtWorkService, @Inject(MAT_DIALOG_DATA) public data) {
    this.dataArt = data.art;
  }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // console.log(this.appAddArtWorkComponent);
    /*this.appAddArtWorkComponent.AuthorInput.value=this.data.art.Author;
    this.appAddArtWorkComponent.NameInput.value=this.data.art.Title;
    this.appAddArtWorkComponent.DescriptionInput.value=this.data.art.Description;
    this.appAddArtWorkComponent.DateInput.Value=this.data.art.Date;
    this.appAddArtWorkComponent.UploaderInput.avatarUrl=this.data.art.Urimage;*/
  }

  async closeDialog() {
    this.data.dialog.closeAll();
    console.log(this.data.art);
    // console.log(this.appAddArtWorkComponent.artWork);
    // this.data.art = this.appAddArtWorkComponent.artWork;
    // await this.ArtWorkService.updateArtWorks(this.data.art);
  }
}
