import {Component, Inject, Input, OnInit} from '@angular/core';
import {ArtWork} from '../../models/art-work.model';
import {ArtWorkService} from '../../services/art-work.service';
import {ImageStorageService} from '../../services/image-storage.service';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {AddArtworkCardComponent} from '../add-artwork-card/add-artwork-card.component';
import {DialogDataComponent} from './dialog-data/dialog-data.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private ImageStorageService: ImageStorageService, private ArtWorkService: ArtWorkService, public dialog: MatDialog) { }

  @Input()
  ArtWork: ArtWork;
  ArtWorkImageLink = 'https://images.bluethumb.com.au/uploads/listing/201464/debra-ryan-chakra-feather-modern-inspirational-artwork-bluethumb-01c5.jpg?w=766&h=766&fit=crop&auto=compress&cs=tinysrgb&q=70&s=9e0a3ef9469be01f1bc75e1e615d5caa';

  ngOnInit(): void {
    this.fetchImage().then();
  }
  async fetchImage(){
   this.ArtWorkImageLink = await this.ImageStorageService.getArtworkImage(this.ArtWork.Urimage);
  }

  async onDelete() {
    console.log('delete : ');
    console.log(this.ArtWork.id);

    if (confirm('Are you sure to delete this artwork ?')){
      await this.ArtWorkService.deleteArtWorks(this.ArtWork.id);
    }
  }

  openDialog() {
    this.dialog.open(DialogDataComponent, {
      data: {
        art: this.ArtWork,
        dialog: this.dialog,
      },
    });
  }
}
