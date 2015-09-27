import Ember from 'ember';

export default Ember.Component.extend({
    // Required input parameters
    price: 0,
    clientToken: '',

    didInsertElement(){
        braintree.setup(this.get('clientToken'), "dropin", {
          container: "payment-form"
        });
    }
});
