import { Injectable } from '@angular/core';
import {Symbol} from '../models/symbol.model';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SymbolService {
  formData: Symbol;

  constructor(private firestore: AngularFirestore) { }

  getAllSymbol() {
    return this.firestore.collection('ArtWork').snapshotChanges();
  }
  deleteSymbol() {
    return this.firestore.collection('ArtWork').snapshotChanges();
  }
  updateSymbol() {
    return this.firestore.collection('ArtWork').snapshotChanges();
  }
}
