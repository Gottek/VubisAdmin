import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-art-work',
  templateUrl: './add-art-work.component.html',
  styleUrls: ['./add-art-work.component.css']
})
export class AddArtWorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addToDatabase():void{
    console.log("tu as décidé d'ajouter dans la base de donnée..");
  }

}
