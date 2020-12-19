import {Injectable} from '@angular/core';
import {Direction} from '../models/direction.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {ArtWorkService} from './art-work.service';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {

  constructor(private firestore: AngularFirestore, private artworkService: ArtWorkService) {
  }

  getAllDirection() {
    return this.firestore.collection('Direction').snapshotChanges();
  }

  addDirections(direction) {
    //I create an artwork as the same way as the artwork
    const randomId = this.firestore.createId();
    const ObjectDirection = {'direction': direction[0], 'distance': direction[1], 'idArtWork': this.artworkService.currentArtWorkId};
    this.firestore.collection('Direction').doc(randomId).set(ObjectDirection).then();


  }

  deleteDirection(artWorkId) {
    // I get the direction which has the same id as the artwork
    const cldFirestore = this.firestore.collection('Direction').ref.where('idArtWork', '==', artWorkId)
      .get().then(querySnapshot => querySnapshot.forEach(doc => { // and then I delete him
        this.firestore.collection('Direction').doc(doc.id).delete().then();
      }));
  }
}
