module.exports = {

  firebase: {
    // https://firebase.google.com/docs/rules/emulator-setup
    settings: {
      host: 'localhost:8080',
      ssl: false // because firestore emulator runs on "http"
    },
  }

};
