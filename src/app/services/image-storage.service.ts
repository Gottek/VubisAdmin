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
    await this.storageRef.child(`ArtImages/${imageLink}`).getDownloadURL().then(resp => imageLink = resp); // get all the artworks image
    return imageLink;
  }

  async uploadImage(repository: string, fileName: string, img: Blob) { // uploading a image to firebase storage with a blob file
    return this.storageRef.child(`${repository}/${fileName}`).put(img);
  }

  async deletePreviousImage(repository: string, fileName: string) { // delete the image with a specific repository selected
    this.storageRef.child(`${repository}/${fileName}`).delete().then(snapshot => console.log('Image: ' + fileName + ' deleted'));
  }

  async getMapsImage(){ //get all the maps contained in the firebase storage as a list and the I'm iterating over them to get their url.
    //Finally, I push them all inside an array
    await  this.storageRef.child('Maps').listAll().then(result => result.items.forEach(imgRef => imgRef.getDownloadURL().then(url => this.mapsArray.push(url))));
    return this.mapsArray;
  }

}
