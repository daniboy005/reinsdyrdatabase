import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
 apiKey: "AIzaSyAUIOaiJisnYOd07GBnFqo-ijTw3iZ7s4U",
 authDomain: "reinsdyr-database.firebaseapp.com",
 projectId: "reinsdyr-database",
 storageBucket: "reinsdyr-database.appspot.com",
 messagingSenderId: "882737674655",
 appId: "1:882737674655:web:54ab9004c9b3ee96c965aa",
 measurementId: "G-EVNX55XE0S"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Add new data to the "Eier" collection 
// Get the specific Eier
db.collection("Eier").doc("7UmEcVLzJPuadPMreB4f")
  .get()
  .then(function(doc) {
    if (doc.exists) {
      // Get the data from the document
      var data = doc.data();
      // Display the data on the website
      document.getElementById("flokk").innerHTML = data.Flokk;
      document.getElementById("beiteområdet").innerHTML = data.beiteområdet;
      document.getElementById("kontaktspråk").innerHTML = data.Kontaktspråk;
      document.getElementById("navn").innerHTML = data.Navn;
      document.getElementById("personnummer").innerHTML = data.Personnummer;
      document.getElementById("telefonnummer").innerHTML = data.Telefonnummer;
    } else {
        console.log("Document does not exist");
    }
  })
  .catch(function(error) {
    console.log("Error getting document:", error);
  });