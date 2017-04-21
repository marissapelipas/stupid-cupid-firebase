import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ '../styles/style.css', '../styles/animate.css' , '../styles/flexslider.css'],
  encapsulation : ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyB5tz24yaAF2WSAqzvi_y8t5Um-S4ehaZY",
      authDomain: "stupidcupid-d7fde.firebaseapp.com",
      databaseURL: "https://stupidcupid-d7fde.firebaseio.com",
      projectId: "stupidcupid-d7fde",
      storageBucket: "stupidcupid-d7fde.appspot.com",
      messagingSenderId: "198090478402"

    });

    const messaging = firebase.messaging();

    messaging.requestPermission()
      .then(function () {
        console.log('Notification permission granted.');
        return messaging.getToken();
      })
      .then(function(token) {
        console.log(token);
      })
      .catch(function (err) {
        console.log('Unable to get permission to notify.', err);
      });

    messaging.onMessage(function(payload) {
      console.log("Message received. ", payload);
      // [START_EXCLUDE]
      // Update the UI to include the received message.
      //this.appendMessage(payload);
      // [END_EXCLUDE]
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
