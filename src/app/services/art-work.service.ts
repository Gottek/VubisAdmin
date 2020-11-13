import {Injectable} from '@angular/core';
import {ArtWork} from '../models/art-work.model';
import {AngularFirestore} from '@angular/fire/firestore';

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

  addArtWorks(artWork) {
    this.firestore.collection('ArtWork').add(artWork).then(res => console.log(res));
  }

  deleteArtWorks() {
    return this.firestore.collection('ArtWork').snapshotChanges();
  }

  updateArtWorks() {
    return this.firestore.collection('ArtWork').snapshotChanges();
  }
}
