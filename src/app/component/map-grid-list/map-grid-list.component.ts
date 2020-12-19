import {Component, Input, OnInit} from '@angular/core';
import {ImageStorageService} from '../../services/image-storage.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-map-grid-list',
  templateUrl: './map-grid-list.component.html',
  styleUrls: ['./map-grid-list.component.css']
})
export class MapGridListComponent implements OnInit {

  //this is the grid you see on the "Maps" tab
  MapsArray=[];
  constructor(private imageStorageService:ImageStorageService) { }

  ngOnInit(): void {
    this.getMaps().then();
  }

  async getMaps(){
    this.MapsArray=await this.imageStorageService.getMapsImage(); // getting the maps from the firebase storage
  }

}
