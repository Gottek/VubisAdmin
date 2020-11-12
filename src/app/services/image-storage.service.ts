import { Injectable } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageStorageService {

  listRef = this.firestorage.storage.ref();
  mapsArray=[];
  constructor(private firestorage: AngularFireStorage) { }

  async getArtworkImage(imageLink) {
    // await listRef.listAll().then(result => result.items.forEach(imgRef=> imgRef.getDownloadURL().then(url => console.log(url))));
    await this.listRef.child(`ArtImages/${imageLink}`).getDownloadURL().then(resp => imageLink = resp);
    return imageLink;
  }
  async uploadArtworkImage(imageLink) {
    // let listRef = this.firestorage.storage.ref();
    // // await listRef.listAll().then(result => result.items.forEach(imgRef=> imgRef.getDownloadURL().then(url => console.log(url))));
    // await listRef.child(`ArtImages/${imageLink}`).getDownloadURL().then(resp => imageLink = resp);
    // return imageLink;
  }
  async getMapsImage() {
    await this.listRef.child("Maps").listAll().then(result => result.items.forEach(imgRef=> imgRef.getDownloadURL().then(url => this.mapsArray.push(url))));
    return this.mapsArray;
    // await this.listRef.child(`Maps/${imageLink}`).getDownloadURL().then(resp => imageLink = resp);
  }
  async uploadMapsImage(imageLink) {
    // let listRef = this.firestorage.storage.ref();
    // // await listRef.listAll().then(result => result.items.forEach(imgRef=> imgRef.getDownloadURL().then(url => console.log(url))));
    // await listRef.child(`ArtImages/${imageLink}`).getDownloadURL().then(resp => imageLink = resp);
    // return imageLink;
  }

}
