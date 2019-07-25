import Base from 'ember-simple-auth/authenticators/base';
import { resolve, reject } from 'rsvp';

import firebase from 'firebase/app';
import auth from 'firebase/auth';

export default Base.extend({
  restore(data) {
    // I guess this works? idk
    if (firebase.auth().currentUser) {
      return resolve(data);
    } else {
      return reject(false);
    }
  },

  authenticate({ email, password }) {
    console.log('authenticators/firebase - authenticate');
    window.firebase = firebase;
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        console.log('authenticators/firebase - authenticate.then')
        return user;
      });
  },

  invalidate() {
    return firebase.auth().signOut()
  }
});