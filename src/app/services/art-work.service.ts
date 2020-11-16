import {Injectable} from '@angular/core';
import {ArtWork} from '../models/art-work.model';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ArtWorkService {

  constructor(private firestore: AngularFirestore) {
  }

  getAllArtWorks() {
    return this.firestore.collection('ArtWork').snapshotChanges();
  }

  addArtWorks(artWork) {
    this.firestore.collection('ArtWork').add(artWork).then(res => console.log(res));
  }

  deleteArtWorks(artworkId) {
    this.firestore.collection('ArtWork').doc(artworkId).delete().then(res => console.log(res));
  }

  updateArtWorks(artWork) {
    this.firestore.collection('ArtWork').doc(artWork.id).set(artWork).then(res => console.log(res));
  }
}
