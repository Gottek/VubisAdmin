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

  //method which will be used to implement the symbol edit feature
  getAllSymbol() {
    return this.firestore.collection('Symbol').snapshotChanges();
  }

  //add a symbol
  addSymbol(symbol) {
    const randomId = this.firestore.createId();
    this.firestore.collection('Symbol').doc(randomId).set(symbol).then();
  }

  deleteSymbol(artWorkId) {
    const cldFirestore = this.firestore.collection('Symbol');
    const imageStorageService = this.ImageStorageService;
    cldFirestore.ref.where('idArtwork', '==', artWorkId) // I select the symbol which has the same id as the artwork send as argument
      .get().then(function(querySnapshot) {
      querySnapshot.forEach(doc => { // when I find it, I delete the image associate with it and I delete the symbol too
        imageStorageService.deletePreviousImage('Maps', doc.data().url).then(res => {
            cldFirestore.doc(doc.id).delete().then(res => console.log('Symbol deleted'));
          }
        );
      });
    })
      .catch(error=> console.log('Error getting documents: ', error));
  }

}
