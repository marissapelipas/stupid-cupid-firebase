import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import * as _ from 'lodash';
import {FileItem} from "./file-item";

@Injectable()
export class UploadImagesService {

  private IMAGES_FOLDER: string = 'images';

  constructor() { }

  // listLastImages(numberOfImages: number): FirebaseListObservable<any[]>{
  //   return firebase.database().ref('images').limitToLast(numberOfImages);
  // }

  uploadImagesToFirebase(file:File) {
    let storageRef = firebase.storage().ref();
    let item = new FileItem(file);

      item.isUploading = true;
      let uploadTask: firebase.storage.UploadTask = storageRef.child(`${this.IMAGES_FOLDER}/123/${item.file.name}`).put(item.file);

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => item.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        (error) => {},
        () => {
          item.url = uploadTask.snapshot.downloadURL;
          item.isUploading = false;
          this.saveImage({ name: item.file.name, url: item.url, imgType: 'profile' });
        }
      );


  }

  private saveImage(image: any) {
    console.log(image);
    firebase.database().ref('images').push(image);
  }

}
