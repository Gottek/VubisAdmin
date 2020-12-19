import {Injectable} from '@angular/core';
import {ArtWork} from '../models/art-work.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {ImageStorageService} from './image-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ArtWorkService {

  formData: ArtWork;
  currentArtWorkId;

  constructor(private firestore: AngularFirestore, private imageStorageService: ImageStorageService) {
  }

  getAllArtWorks() {
    return this.firestore.collection('ArtWork').snapshotChanges();
  }

  addArtWorks(artWork) {
    const randomId = this.firestore.createId(); // I create a random id for firebase
    this.currentArtWorkId = randomId;
    this.firestore.collection('ArtWork').doc(randomId).set(artWork).then(); // I create a firebase document with this id
  }

  deleteArtWorks(artwork) {
    this.imageStorageService.deletePreviousImage('ArtImages', artwork.Urimage).then(); // I delete the artwork image
    this.firestore.collection('ArtWork').doc(artwork.id).delete().then(res => console.log('ArtWork deleted')); // I delete the artwork
  }

  updateArtWorks(id: string, artWork) {
    this.firestore.collection('ArtWork').doc(id).set(artWork).then(res => console.log(res)); //the set is also used to update an object
  }
}
