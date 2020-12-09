import {Component, Input, OnInit} from '@angular/core';
import {ImageStorageService} from '../../services/image-storage.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-map-grid-list',
  templateUrl: './map-grid-list.component.html',
  styleUrls: ['./map-grid-list.component.css']
})
export class MapGridListComponent implements OnInit {

  MapsArray=[];
  constructor(private imageStorageService:ImageStorageService) { }

  ngOnInit(): void {
    this.getMaps().then();
  }

  async getMaps(){
    this.MapsArray=await this.imageStorageService.getMapsImage();
  }

}
