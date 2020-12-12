import {Component, OnInit, ViewChild} from '@angular/core';
import {Symbol} from '../../models/symbol.model';
import {Direction} from '../../models/direction.model';
import {AddArtworkCardComponent} from '../../component/add-artwork-card/add-artwork-card.component';
import {AddSymbolCardComponent} from '../../component/add-symbol-card/add-symbol-card.component';
import {AddDirectionCardComponent} from '../../component/add-direction-card/add-direction-card.component';
import {ArtWorkService} from '../../services/art-work.service';
import {SymbolService} from '../../services/symbol.service';
import {DirectionService} from '../../services/direction.service';

@Component({
  selector: 'app-add-art-work',
  templateUrl: './add-art-work.component.html',
  styleUrls: ['./add-art-work.component.css']
})
export class AddArtWorkComponent implements OnInit {

  // tslint:disable-next-line:ban-types
  Sybmol: Symbol;
  Directions: Direction[];
  @ViewChild(AddArtworkCardComponent) appArtWork: AddArtworkCardComponent;
  @ViewChild(AddSymbolCardComponent) appSymbol: AddSymbolCardComponent;
  @ViewChild(AddDirectionCardComponent) appDirection: AddDirectionCardComponent;


  constructor(private ArtWorkService: ArtWorkService, private DirectionService: DirectionService, private SymbolService: SymbolService) {
  }


  ngOnInit(): void {
  }

  addToDatabase(): void {

    this.appArtWork.creatArtWork().then(res => {
      this.ArtWorkService.addArtWorks(res);
      const symbol = this.appSymbol.creatSymbol();
      this.SymbolService.addSymbol(symbol);
      const directionArray = this.appDirection.creatDirections();
      this.DirectionService.addDirections(directionArray);
    });


  }
}
