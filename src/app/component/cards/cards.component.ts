import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ArtWork} from '../../models/art-work.model';
import {ArtWorkService} from '../../services/art-work.service';
import {ImageStorageService} from '../../services/image-storage.service';
import {AddArtworkCardComponent} from '../add-artwork-card/add-artwork-card.component';
import {SymbolService} from '../../services/symbol.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  isVisibleMiddle = false;
  @ViewChild(AddArtworkCardComponent) addArtWorkCardComponent: AddArtworkCardComponent;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private symbolService: SymbolService,private imageStorageService: ImageStorageService, private ArtWorkService: ArtWorkService) {
  }

  @Input()
  artWork: ArtWork;
  ArtWorkImageLink = 'https://images.bluethumb.com.au/uploads/listing/201464/debra-ryan-chakra-feather-modern-inspirational-artwork-bluethumb-01c5.jpg?w=766&h=766&fit=crop&auto=compress&cs=tinysrgb&q=70&s=9e0a3ef9469be01f1bc75e1e615d5caa';

  ngOnInit(): void {
    const t = new Date(1970, 0, 1);
    // @ts-ignore
    t.setSeconds(this.artWork.Date.seconds);
    this.artWork.Date = t;
    this.fetchImage().then();
  }

  async fetchImage() {
    this.ArtWorkImageLink = await this.imageStorageService.getArtworkImage(this.artWork.Urimage);
  }

  async onDelete() {
    if (confirm('Are you sure to delete this artwork ?')) {
      const artWorkId=this.artWork.id;
      await this.symbolService.deleteSymbol(this.artWork.id);
      await this.ArtWorkService.deleteArtWorks(this.artWork);

    }
  }

  showModalMiddle(): void {
    this.isVisibleMiddle = true;
  }

  handleOkMiddle(): void {
    const Description = this.addArtWorkCardComponent.NameInput.value;
    const Title = this.addArtWorkCardComponent.DescriptionInput.value;
    const Author = this.addArtWorkCardComponent.AuthorInput.value;

    const image = this.addArtWorkCardComponent.UploaderInput.image;
    console.log(image)
    const Urimage = (image?.name)?image.name:this.artWork.Urimage;
    console.log(Urimage)
    const artWork = {Author, Date: new Date(this.addArtWorkCardComponent.DateInput.value), Description, Title, Urimage};
    console.log(artWork);

    if (image){
      console.log("oui")
      this.imageStorageService.uploadImage('ArtImages', image.name, image).then(res =>
          this.ArtWorkService.updateArtWorks(this.artWork.id, artWork)
        );
      this.imageStorageService.deletePreviousImage('ArtImages', this.artWork.Urimage).then();
    }
    else{
      console.log("non")
      this.ArtWorkService.updateArtWorks(this.artWork.id, artWork);
    }


    this.isVisibleMiddle = false;
  }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }
}
