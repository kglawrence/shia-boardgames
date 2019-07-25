import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),

  email: "eric.lifka@gmail.com",
  password: "test1234",

  actions: {
    login(email, password) {
      console.log('controllers/login - login');
      return this.get('session').authenticate('authenticator:firebase', { email, password })
    }
  }
});