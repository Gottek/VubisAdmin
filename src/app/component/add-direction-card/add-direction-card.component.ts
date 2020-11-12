import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-direction-card',
  templateUrl: './add-direction-card.component.html',
  styleUrls: ['./add-direction-card.component.css']
})
export class AddDirectionCardComponent implements OnInit {

  TableItem=[1];
  constructor() { }

  ngOnInit(): void {
  }

  addNewOne(){
    this.TableItem.push(0);
  }

}
