import {Component, OnInit, ViewChild} from '@angular/core';
import {UploaderComponent} from '../uploader/uploader.component';
import {ClearInputComponent} from '../clear-input/clear-input.component';
import {ImageStorageService} from '../../services/image-storage.service';
import {ArtWorkService} from '../../services/art-work.service';

@Component({
  selector: 'app-add-symbol-card',
  templateUrl: './add-symbol-card.component.html',
  styleUrls: ['./add-symbol-card.component.css']
})
export class AddSymbolCardComponent implements OnInit {

  // @Output() Symbol: EventEmitter<Symbol> = new EventEmitter();

  @ViewChild(ClearInputComponent) SymbolInput: ClearInputComponent;
  @ViewChild(UploaderComponent) UploaderInput: UploaderComponent;

  constructor(private ImageService: ImageStorageService, private ArtWorkService: ArtWorkService) {
  }

  ngOnInit(): void {
  }

  creatSymbol() {
    const image = this.UploaderInput.image;
    this.ImageService.uploadImage('Maps', image.name, image).then();
    return {
      Symbol: this.SymbolInput.value,
      url: image.name,
      idArtwork: this.ArtWorkService.currentArtWorkId
    };
  }

}
