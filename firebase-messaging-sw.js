importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyB5tz24yaAF2WSAqzvi_y8t5Um-S4ehaZY",
  authDomain: "stupidcupid-d7fde.firebaseapp.com",
  databaseURL: "https://stupidcupid-d7fde.firebaseio.com",
  projectId: "stupidcupid-d7fde",
  storageBucket: "stupidcupid-d7fde.appspot.com",
  messagingSenderId: "198090478402"

});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
