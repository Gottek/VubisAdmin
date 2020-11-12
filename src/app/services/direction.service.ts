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
    return this.firestore.collection('ArtWork').snapshotChanges();
  }
  deleteDirection() {
    return this.firestore.collection('ArtWork').snapshotChanges();
  }
  updateDirection() {
    return this.firestore.collection('ArtWork').snapshotChanges();
  }
}
