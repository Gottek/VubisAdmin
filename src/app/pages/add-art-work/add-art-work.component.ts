import {Component, OnInit, ViewChild} from '@angular/core';
import {ArtWork} from '../../models/art-work.model';
import {Symbol} from '../../models/symbol.model';
import {Direction} from '../../models/direction.model';
import {AddArtworkCardComponent} from '../../component/add-artwork-card/add-artwork-card.component';
import {AddSymbolCardComponent} from '../../component/add-symbol-card/add-symbol-card.component';
import {AddDirectionCardComponent} from '../../component/add-direction-card/add-direction-card.component';
import {ArtWorkService} from '../../services/art-work.service';

@Component({
  selector: 'app-add-art-work',
  templateUrl: './add-art-work.component.html',
  styleUrls: ['./add-art-work.component.css']
})
export class AddArtWorkComponent implements OnInit {

  Sybmol: Symbol;
  Directions: Direction[];
  @ViewChild(AddArtworkCardComponent) appArtWork: AddArtworkCardComponent;
  @ViewChild(AddSymbolCardComponent) appSymbol: AddSymbolCardComponent;
  @ViewChild(AddDirectionCardComponent) appDirection: AddDirectionCardComponent;

  constructor(private ArtWorkService: ArtWorkService) {
  }

  ngOnInit(): void {
  }

  addToDatabase(): void {
    const artwork=this.appArtWork.creatArtWork();
    this.ArtWorkService.addArtWorks(artwork);
  }

}
