// Intiliaze Firebase Admin SDK

var admin = require('firebase-admin');
// var app = admin.initializeApp();

// var serviceAccount = require('Downloads/fir-test-b740b-firebase-adminsdk-f77g4-4102ee53df.json');

// https://fir-test-b740b.firebaseio.com/
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://fir-test-b740b.firebaseio.com'
// });

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: 'fir-test-b740b/',
    clientEmail: 'firebase-adminsdk-f77g4@fir-test-b740b.iam.gserviceaccount.com',
    privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCoK5dR2x+RIV4n\n7qs3xErB7BrEks09ruHC2gSCqqxPaqHtf+nGWpa+7phr1wzued6bYDEp9e6jaciH\nV5DcmjkkrpwXENdIYJPdFu+vN0OrAaPwstFNxr+RHJPHWWd9QlNz77kyR+b7dyhO\njnpyT7/FxaGJaz6zSouF+9iF51cz8mfvLJehKHFkzraJD9wyqu4tN0i7TvwQPgUd\nFZj5kSgGhbdt2Mo4m73YctjpMXkOJU13K4fbmD/Ps91tVx5JoB3UH4RbXFx5shTD\nQhB8wVRlgMwQ/JRyHaMvVrohG/f2C8bz/Npd97rJ/L41rBvdlrXvA4nm0mgpzKVI\nKJlokMmBAgMBAAECggEAAMOX76eE9HIYHSrUrM9vvoNN2NRI6e2UOYAnkpdnaoHz\nw+I3o+7P7gSj/SNwO9oiZIbSmlvzblsh7dl8P0BVH6FKdMFfFQVZTqEWzC8+V7XN\ncp/BWy7aunRMiJSTp4pIWke9yehxOHXBYV/81u2dU67y7a6mzYY6bYyoHm2fZA1F\nP7H+B+HcJ9YXS3pa3WotHidBnGv9bm4eG4D3EiCpm1u66XtmIzbnjJqKpT8khxwF\nILanLr3twHjU0BdgPEoiMW4xW0E4WGu6U4cS43lr5ufh15sZWKwsQuSgl715XMCm\nwK8aBQV9Vjvnk/HvSZkZPs63Hb7Li0Vvs/ELHQodFQKBgQDbf2K1A9oPchTseSwY\njIONw7xzCa65LSV1u9xNVhNOeWpz2UX44IDjcCmE7eRNiZ+TdzsB/hf+QLm00iPV\n7kGosyB0ifac9Pll/IPVsrxIKau/YIwViDEfnb8ZGIu3B/upA9Iuvj3ipV3ttZAx\n3G/m0WRLeVSn/8/187Pd7jUxRQKBgQDEIw+MUHMbD/YTg53TwMWMaExk6Me49fgS\nLVwNcJBZNfqTJIjT03KKAsENqV/ZaBvE+eUBVY9OwWr5mYiMyD5yEIssqm0vYkRm\nVcSI/Oj/DjwCmNiSBn670+QpbD2gYsQ8mhlMuigEqNG0CrzsVzpJ7icnrWgB4Vo1\nWIsKE6I1DQKBgBU1DZhnst3jK9pdKsGEcgF0c/S5bsQ9dG0XpYVjV6IxYPOofnY5\nWrqez6QkR/al4WEiF/VtU2whXM/3rbaxum5OQEiCO+2WTbJo32P6TO679/gZn+9E\npVpkp14JXRZmEw6Va+1QPDJ1v8mDzVbD8Zvfh00zf9ZrhPBCh5JdvY3xAoGBALQV\ncPgnAZiubgT6ypWbIIbLWKEqLf7AMHYYGbXpTU/rxNcHK246bacT4kd15SCLezu/\nKimwcjUgV+U2t+5zCQrX78Eh9cAU3LKNOzd/5zoPyr+jsO1ac1Bnu8zgqjCxnnX6\nExKktYuZqXlChrYFXOp2dJL0n1Niot3qHzcwUbWdAoGBAK6quNZ4ccv/u9H7uq+K\nccAqdtH+fOiZqUIfpA85AQXrUfowwt14v6SW9aQi+5XPCS4Z6oX8e35tK3WyjXlH\nvXzNGI38GmdVWleIyrbb8PXOfunvy824772hI7h+V59NgkIuiShFH3xddw5m0tj1\nnyHVgSrCiqTgWccPoRQRmhVU\n-----END PRIVATE KEY-----\n'
  }),
  databaseURL: 'https://fir-test-b740b.firebaseio.com'
});

// Creating Custom Token
var uid = "some-uid";

// pass the uid to the function as a parameter
// the fucntion returns a promise
admin.auth().createCustomToken(uid)
  .then(function(customToken) {
    console.log(customToken);
    // Send token back to client
  })
  .catch(function(error) {
    console.log("Error creating custom token:", error);
  });

// Content With Custom Claims
// var uid = "some-uid";
// var additionalClaims = {
//   premiumAccount: true
// };

// admin.auth().createCustomToken(uid, additionalClaims)
//   .then(function(customToken) {
//     // Send token back to client
//     console.log(customToken);
//   })
//   .catch(function(error) {
//     console.log("Error creating custom token:", error);
//   });

// Signin using a custom token
function signInWithCustomToken() {
    // getting the token
    var token = document.getElementById('custom-token').value;
    
  firebase.auth().signInWithCustomToken(token).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  // ...
});
}