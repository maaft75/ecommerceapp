// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  rootUrl:"https://localhost:44319/sellers/",
  productUrl:"https://localhost:44319/products/",
  firebaseConfig : {
    apiKey: "AIzaSyAhp7ehPnYS6tisxuHefTzhlqLU-GF2qDk",
    authDomain: "storeimagegallery.firebaseapp.com",
    databaseURL: "https://storeimagegallery.firebaseio.com",
    projectId: "storeimagegallery",
    storageBucket: "storeimagegallery.appspot.com",
    messagingSenderId: "751800411410",
    appId: "1:751800411410:web:0c02997d7641dbdd8b3fcb",
    measurementId: "G-VE9366HN9J"
  }
};

/*
https://ecommercebymaaft.azurewebsites.net/
https://ecommercebymaaft.azurewebsites.net/sellers/
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
