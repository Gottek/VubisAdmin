import {Injectable} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageStorageService {

  private mapsArray=[];
  private storageRef = this.firestorage.storage.ref();

  constructor(private firestorage: AngularFireStorage) {
  }

  async getArtworkImage(imageLink) {
    // await storageRef.storageAll().then(result => result.items.forEach(imgRef=> imgRef.getDownloadURL().then(url => console.log(url))));
    await this.storageRef.child(`ArtImages/${imageLink}`).getDownloadURL().then(resp => imageLink = resp);
    return imageLink;
  }

  async uploadImage(repository: string, fileName: string, img: Blob) {
    return this.storageRef.child(`${repository}/${fileName}`).put(img);
  }

  async deletePreviousImage(repository: string, fileName: string) {
    this.storageRef.child(`${repository}/${fileName}`).delete().then(snapshot => console.log('Image: ' + fileName + ' deleted'));
  }

  async getMapsImage(){
    await  this.storageRef.child('Maps').listAll().then(result => result.items.forEach(imgRef => imgRef.getDownloadURL().then(url => this.mapsArray.push(url))));
    return this.mapsArray;
    // await this.storageRef.child(`Maps/${imageLink}`).getDownloadURL().then(resp => imageLink = resp);
  }
  // getMapsImage(): Observable<any> {
  //   return new Observable(observer => {
  //     this.storageRef.child('Maps').listAll().then(result => result.items.forEach(imgRef => imgRef.getDownloadURL().then(url => this.mapsArray.next(url))));
  //   });
  // }

  async uploadMapsImage(imageLink) {
    // let storageRef = this.firestorage.storage.ref();
    // // await storageRef.storageAll().then(result => result.items.forEach(imgRef=> imgRef.getDownloadURL().then(url => console.log(url))));
    // await storageRef.child(`ArtImages/${imageLink}`).getDownloadURL().then(resp => imageLink = resp);
    // return imageLink;
  }

}
