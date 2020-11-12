import {Injectable} from '@angular/core';
import {ArtWork} from '../models/art-work.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ArtWorkService {

  formData: ArtWork;

  constructor(private firestore: AngularFirestore) {
  }

  getAllArtWorks() {
    return this.firestore.collection('ArtWork').snapshotChanges();
  }
  deleteArtWorks() {
    return this.firestore.collection('ArtWork').snapshotChanges();
  }
 updateArtWorks() {
    return this.firestore.collection('ArtWork').snapshotChanges();
  }
}
