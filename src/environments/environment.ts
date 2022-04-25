// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "firebase/app";

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyA16cYDbqZIWqSY9NuSpN34UPJ5c7JxTlQ",
    authDomain: "school-b7a3b.firebaseapp.com",
    projectId: "school-b7a3b",
    storageBucket: "school-b7a3b.appspot.com",
    messagingSenderId: "677814700688",
    appId: "1:677814700688:web:8850a47254b4b6e8b2e615"
  }

};
//const app = initializeApp(firebaseConfig);




/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
