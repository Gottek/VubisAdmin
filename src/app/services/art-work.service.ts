import {Injectable} from '@angular/core';
import {ArtWork} from '../models/art-work.model';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ArtWorkService {

  formData: ArtWork;
  currentArtWorkId;

  constructor(private firestore: AngularFirestore) {
  }

  getAllArtWorks() {
    return this.firestore.collection('ArtWork').snapshotChanges();
  }

  addArtWorks(artWork) {
    const randomId=this.firestore.createId();
    this.currentArtWorkId=randomId
    this.firestore.collection('ArtWork').doc(randomId).set(artWork).then();
  }

  deleteArtWorks() {
    return this.firestore.collection('ArtWork').snapshotChanges();
  }

  updateArtWorks() {
    return this.firestore.collection('ArtWork').snapshotChanges();
  }
}
