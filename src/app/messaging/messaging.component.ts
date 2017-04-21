import {Component, OnInit} from '@angular/core';
import * as firebase from "firebase/app";

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {

  const
  messaging = firebase.messaging();

  constructor() {
  }

  ngOnInit() {
    this.messaging.onTokenRefresh(
      function () {
        this.messaging.getToken()
          .then(function (refreshedToken) {
            console.log('Token refreshed.');
            // Indicate that the new Instance ID token has not yet been sent to the
            // app server.
            this.setTokenSentToServer(false);
            // Send Instance ID token to app server.
            this.sendTokenToServer(refreshedToken);
            // [START_EXCLUDE]
            // Display new Instance ID token and clear UI of all previous messages.
            //resetUI();
            // [END_EXCLUDE]
          })
          .catch(function (err) {
            console.log('Unable to retrieve refreshed token ', err);
            this.showToken('Unable to retrieve refreshed token ', err);
          });
      }
    );

    this.messaging.onMessage(function(payload) {
      console.log("Message received. ", payload);
      // [START_EXCLUDE]
      // Update the UI to include the received message.
      this.appendMessage(payload);
      // [END_EXCLUDE]
    });


  }

  appendMessage(payload) {
    console.log("Received Message : " + JSON.stringify(payload, null, 2));
  }

  setTokenSentToServer(sent) {
    window.localStorage.setItem('sentToServer', sent ? "1" : "0");
  }

  showToken(currentToken) {
    // Show token in console and UI.
    // var tokenElement = document.querySelector('#token');
    // tokenElement.textContent = currentToken;
    console.log(currentToken);
  }


  sendTokenToServer(currentToken) {
    if (!this.isTokenSentToServer()) {
      console.log('Sending token to server...');
      // TODO(developer): Send the current token to your server.
      this.setTokenSentToServer(true);
    } else {
      console.log('Token already sent to server so won\'t send it again ' +
        'unless it changes');
    }
  }


  isTokenSentToServer() {
    if (window.localStorage.getItem('sentToServer') == "1") {
      return true;
    }
    return false;
  }


  requestPermission() {
    console.log('Requesting permission...');
    // [START request_permission]
    this.messaging.requestPermission()
      .then(function () {
        console.log('Notification permission granted.');
        // TODO(developer): Retrieve an Instance ID token for use with FCM.
        // [START_EXCLUDE]
        // In many cases once an app has been granted notification permission, it
        // should update its UI reflecting this.
        //resetUI();
        // [END_EXCLUDE]
      })
      .catch(function (err) {
        console.log('Unable to get permission to notify.', err);
      });
    // [END request_permission]
  }

}
