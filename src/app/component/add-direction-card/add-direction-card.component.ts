import {Component, OnInit} from '@angular/core';
import {ArtWorkService} from '../../services/art-work.service';
import {FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-direction-card',
  templateUrl: './add-direction-card.component.html',
  styleUrls: ['./add-direction-card.component.css']
})
export class AddDirectionCardComponent implements OnInit {

  //one array for direction an another one for the distance, both of them will be added in firebase
  arrayDirection = this.fb.array([this.fb.control('Right')]);
  arrayDistance = this.fb.array([this.fb.control(20)]);


  //formBuilder is needed to make dynamics forms
  constructor(private ArtWorkService: ArtWorkService, private fb: FormBuilder) {}

  addNewOne() {
    this.arrayDirection.push(new FormControl('Right'));
    this.arrayDistance.push(new FormControl(49));
  }

  removeOne() {
    //pop to remove the last one
    this.arrayDistance.controls.pop();
    this.arrayDirection.controls.pop();
  }

  creatDirections() {
    //getRawValue allows us the get only the values and not the entire FormControl
    return [this.arrayDirection.getRawValue(), this.arrayDistance.getRawValue()];
  }

  ngOnInit(): void {
  }
}
