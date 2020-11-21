import {Component, OnInit} from '@angular/core';
import {ArtWorkService} from '../../services/art-work.service';
import {ArtWork} from '../../models/art-work.model';

@Component({
  selector: 'app-delete-edit-art-work',
  templateUrl: './delete-edit-art-work.component.html',
  styleUrls: ['./delete-edit-art-work.component.css']
})
export class DeleteEditArtWorkComponent implements OnInit {

  ArtWorkArray: ArtWork[];

  constructor(private artWorkService: ArtWorkService) {
  }

  ngOnInit(): void {
    this.artWorkService.getAllArtWorks().subscribe(Arrayreponse => {
      this.ArtWorkArray = Arrayreponse.map(item => ({id: item.payload.doc.id, ...item.payload.doc.data() as {}} as unknown as ArtWork));
    });

  }

}
