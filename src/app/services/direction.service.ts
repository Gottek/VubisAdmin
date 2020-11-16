import { Injectable } from '@angular/core';
import {Direction} from '../models/direction.model';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {

  constructor(private firestore: AngularFirestore) { }

  getAllDirection() {
    return this.firestore.collection('Direction').snapshotChanges();
  }

  addDirection(direction) {
    this.firestore.collection('Direction').add(direction).then(res => console.log(res));
  }
  deleteDirection() {
    return this.firestore.collection('Direction').snapshotChanges();
  }
  updateDirection() {
    return this.firestore.collection('Direction').snapshotChanges();
  }
}
