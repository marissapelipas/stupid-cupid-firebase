import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {Profile} from "./profile.model";
import {FileItem} from "../core/images/file-item";
import {Subject} from "rxjs";
import {ProfilesService} from "./profiles.service";

@Injectable()
export class ImagesService {

  private IMAGES_FOLDER: string = 'images';
  avatarChanged = new Subject<String>();
  constructor(private profileService: ProfilesService) {
  }

  uploadAvatar(file: File, profile: Profile):any {
    let storageRef = firebase.storage().ref();
    let item = new FileItem(file);
    item.isUploading = true;
    let uploadTask: firebase.storage.UploadTask = storageRef.child('images/' + profile.id + '/' + item.file.name).put(item.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => item.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
      (error) => {
      },
      () => {
        item.url = uploadTask.snapshot.downloadURL;
        item.isUploading = false;
        //this.saveImage({name: item.file.name, url: item.url, imgType: 'profile'});
        this.profileService.setAvatar(item.url);
        this.avatarChanged.next(item.url);
      }
    );


  }

  private saveImage(image: any) {
    console.log(image);
    firebase.database().ref('images').push(image);
  }

}
