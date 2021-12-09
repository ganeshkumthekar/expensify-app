import firebase from 'firebase/compat';

const config = {

    apiKey: "AIzaSyBORaxMpKmWnfhXpk_aqbdHANibWtNCzYk",
  
    authDomain: "expensify-4f9c6.firebaseapp.com",
  
    databaseURL: "https://expensify-4f9c6-default-rtdb.firebaseio.com",
  
    projectId: "expensify-4f9c6",
  
    storageBucket: "expensify-4f9c6.appspot.com",
  
    messagingSenderId: "286302970131",
  
    appId: "1:286302970131:web:a1fecf44c9e67da0afbae6",
  
    measurementId: "G-SX6MK4ENRK"
  
  };
  
  firebase.initializeApp(config);
   
  const database = firebase.database();

  export { firebase, database as default };

//   database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

//   database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

//   database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

//   database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
//   });

//   database.ref('expenses').on('value', (snapshot) => {
//       const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//                 expenses.push({
//                     id: childSnapshot.key,
//                     ...childSnapshot.val()
//                 });
//             });
//             console.log(expenses);
//   });

//   database.ref('notes').push({
//       title: 'Course Topics',
//       body: 'React Native, Angular, Python'
//   });

//   database.ref('expenses').push({
//     description:'Rent',
//     note: 'This months rent',
//     amount: 119000,
//     createdAt: 'November 1'
//   });


//database.ref('notes/-MoW3vPp8_s7FClmIljN').remove();

//   database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}` );
//   });

//   const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }, (e) => {
//       console.log('Error with data fetching', e);
//   });

//   setTimeout(() => {
//     database.ref('age').set(38);
//   }, 3500);

//   setTimeout(() => {
//     database.ref().off(onValueChange);
//   }, 7500);

//   setTimeout(() => {
//     database.ref('age').set(48);
//   }, 10500);

//   database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//       const val = snapshot.val();
//       console.log(val);
//   })
//   .catch((e) => {
//       console.log('Error fetching data', e);
//   });

//   database.ref().set({
//       name: 'Ganesh Kumthekar',
//       age: 38,
//       stressLevel: 6,
//       job: {
//           title: 'Software Developer',
//           company: 'Google'
//       },
//       location: {
//           city: 'Pune',
//           country: 'India'
//       }
//   }).then(() => {
//       console.log('Data is saved!');
//   }).catch((e) => {
//       console.log('This Failed.', e);
//   });

//   database.ref().update({
//       stressLevel: 9,
//       'job/company': 'Amazon',
//       'location/city': 'Seattle' 
//   });


 