import {Injectable} from '@angular/core';
import {Symbol} from '../models/symbol.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {ImageStorageService} from './image-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SymbolService {

  constructor(private firestore: AngularFirestore, private ImageStorageService: ImageStorageService) {
  }

  getAllSymbol() {
    return this.firestore.collection('Symbol').snapshotChanges();
  }

  addSymbol(symbol) {
    const randomId = this.firestore.createId();
    this.firestore.collection('Symbol').doc(randomId).set(symbol).then();
  }

  deleteSymbol(artWorkId) {
    const cldFirestore = this.firestore.collection('Symbol');
    const imageStorageService = this.ImageStorageService;
    cldFirestore.ref.where('idArtwork', '==', artWorkId)
      .get().then(function(querySnapshot) {
      querySnapshot.forEach(doc => {
        console.log(doc.data());
        imageStorageService.deletePreviousImage('Maps', doc.data().url).then(res => {
            console.log('oui oui');
            cldFirestore.doc(doc.id).delete().then(res => console.log('Symbol deleted'));
          }
        );
      });
    })
      .catch(function(error) {
        console.log('Error getting documents: ', error);
      });
  }

}
