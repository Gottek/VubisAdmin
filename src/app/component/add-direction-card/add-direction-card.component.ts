import {Component, OnInit} from '@angular/core';
import {ArtWorkService} from '../../services/art-work.service';
import {FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-direction-card',
  templateUrl: './add-direction-card.component.html',
  styleUrls: ['./add-direction-card.component.css']
})
export class AddDirectionCardComponent implements OnInit {


  arrayDirection = this.fb.array([this.fb.control('Right')]);
  arrayDistance = this.fb.array([this.fb.control(20)]);

  // arrayDistance = new FormArray([new FormArray([new FormControl(1)])]);

  constructor(private ArtWorkService: ArtWorkService, private fb: FormBuilder) {
  }

  addNewOne() {
    this.arrayDirection.push(new FormControl('Right'));
    this.arrayDistance.push(new FormControl(49));
    // this.myItems.push(new FormArray([new FormControl('Right'),new FormControl(22)]));
    // this.myItems.controls.forEach(item=>console.log(item.value));

    // console.log("début -----------------")
    // this.arrayDistance.controls.forEach(item=>console.log(item.value))
    // this.arrayDirection.controls.forEach(item=>console.log(item.value))
    // console.log("fin-----------------")
  }

  removeOne() {
    this.arrayDistance.controls.pop();
    this.arrayDirection.controls.pop();
  }

  creatDirections() {
    return [this.arrayDirection.getRawValue(), this.arrayDistance.getRawValue()];
  }

  ngOnInit(): void {
  }
}
