import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SymbolService {

  constructor(private firestore: AngularFirestore) { }

  getAllSymbol() {
    return this.firestore.collection('Symbol').snapshotChanges();
  }
  addSymbol(symbol) {
    this.firestore.collection('Symbol').add(symbol).then(res => console.log(res));
  }
  deleteSymbol() {
    return this.firestore.collection('Symbol').snapshotChanges();
  }
  updateSymbol() {
    return this.firestore.collection('Symbol').snapshotChanges();
  }
}
