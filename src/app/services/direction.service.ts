import { Injectable } from '@angular/core';
import {Direction} from '../models/direction.model';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {
  formData: Direction;

  constructor(private firestore: AngularFirestore) { }

  getAllDirection() {
    return this.firestore.collection('Direction').snapshotChanges();
  }
  addDirections(direction) {
    const randomId=this.firestore.createId();
    this.firestore.collection('Direction').doc(randomId).set(direction).then();
  }
  deleteDirection() {
    return this.firestore.collection('Direction').snapshotChanges();
  }
  updateDirection() {
    return this.firestore.collection('Direction').snapshotChanges();
  }
}
