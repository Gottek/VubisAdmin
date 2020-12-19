import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ArtWork} from '../../models/art-work.model';
import {ArtWorkService} from '../../services/art-work.service';
import {ImageStorageService} from '../../services/image-storage.service';
import {AddArtworkCardComponent} from '../add-artwork-card/add-artwork-card.component';
import {SymbolService} from '../../services/symbol.service';
import {DirectionService} from '../../services/direction.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  isVisibleMiddle = false;
  @ViewChild(AddArtworkCardComponent) addArtWorkCardComponent: AddArtworkCardComponent;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private directionService:DirectionService,private symbolService: SymbolService,private imageStorageService: ImageStorageService, private ArtWorkService: ArtWorkService) {
  }

  @Input()
  artWork: ArtWork;
  //default Artwork Image
  ArtWorkImageLink = 'https://images.bluethumb.com.au/uploads/listing/201464/debra-ryan-chakra-feather-modern-inspirational-artwork-bluethumb-01c5.jpg?w=766&h=766&fit=crop&auto=compress&cs=tinysrgb&q=70&s=9e0a3ef9469be01f1bc75e1e615d5caa';

  ngOnInit(): void {
    const t = new Date(1970, 0, 1);
    //converting seconds to a real date
    // @ts-ignore used to ignore a ts remark
    t.setSeconds(this.artWork.Date.seconds);
    this.artWork.Date = t;
    this.fetchImage().then();
  }

  async fetchImage() {
    this.ArtWorkImageLink = await this.imageStorageService.getArtworkImage(this.artWork.Urimage);
  }

  async onDelete() {
    if (confirm('Are you sure to delete this artwork ?')) {
      // each one of them are being deleted one after others
      await this.symbolService.deleteSymbol(this.artWork.id);
      await this.ArtWorkService.deleteArtWorks(this.artWork);
      await this.directionService.deleteDirection(this.artWork.id);

    }
  }

  showModalMiddle(): void {
    this.isVisibleMiddle = true;
  }

  handleOkMiddle(): void {
    //getting values from card
    const Description = this.addArtWorkCardComponent.DescriptionInput.value;
    const Title = this.addArtWorkCardComponent.NameInput.value;
    const Author = this.addArtWorkCardComponent.AuthorInput.value;

    const image = this.addArtWorkCardComponent.UploaderInput.image;
    const Urimage = (image?.name)?image.name:this.artWork.Urimage;
    const artWork = {Author, Date: new Date(this.addArtWorkCardComponent.DateInput.value), Description, Title, Urimage};

    if (image){ //if the image has changed, you can upload a new one and then delete the old one
      this.imageStorageService.uploadImage('ArtImages', image.name, image).then(res =>
          this.ArtWorkService.updateArtWorks(this.artWork.id, artWork)
        );
      this.imageStorageService.deletePreviousImage('ArtImages', this.artWork.Urimage).then();
    }
    else{ // Otherwise just update the artwork with some of the news values
      this.ArtWorkService.updateArtWorks(this.artWork.id, artWork);
    }

  //modal visibility
    this.isVisibleMiddle = false;
  }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }
}
