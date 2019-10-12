const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.createUser = functions.firestore
  .document('client/{phone}')
  .onCreate(async (snap, context) => {
    // Get an object representing the document
    // e.g. {'name': 'Marie', 'age': 66}
    const newValue = snap.data();

    // access a particular field as you would any JS property
    const phone = newValue.phone;

    // perform desired operations ...


    const accountSid = 'AC1b79352e36a238bc85ed0c856ae7c9bd';
    const authToken = 'e3fbcf74875f79133fa604453c9d8f43';
    const twilioClient = require('twilio')(accountSid, authToken);


    try {
      const message = await twilioClient.messages.create({
         body: `Hello from the firebase cloud function ${newValue.id}`,
         from: '+61480018857', //'whatsapp:+14155238886', //'+61480018857',
         to: phone //'whatsapp:+61431519376'//'whatsapp:+61431519376', '+61451414510'
      });

      return message.sid;
    } catch(e) {
      return e;
    }


  })
