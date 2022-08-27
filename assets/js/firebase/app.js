 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDvp_tCn_aJMGjllkFnqnA6GrG_5K_nOzc",
    authDomain: "projeto-mundoinvertido-e4913.firebaseapp.com",
    projectId: "projeto-mundoinvertido-e4913",
    storageBucket: "projeto-mundoinvertido-e4913.appspot.com",
    messagingSenderId: "307146005184",
    appId: "1:307146005184:web:38db80d452c7a10ff56b25",
    measurementId: "G-8DQKM2YZ05"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
