import {Injectable} from '@angular/core';
import {Symbol} from '../models/symbol.model';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SymbolService {
  formData: Symbol;

  constructor(private firestore: AngularFirestore) {
  }

  getAllSymbol() {
    return this.firestore.collection('Symbol').snapshotChanges();
  }

  addSymbol(symbol) {
    const randomId = this.firestore.createId();
    this.firestore.collection('Symbol').doc(randomId).set(symbol).then();
  }

  deleteSymbol() {
    return this.firestore.collection('Symbol').snapshotChanges();
  }

  updateSymbol() {
    return this.firestore.collection('Symbol').snapshotChanges();
  }
}
