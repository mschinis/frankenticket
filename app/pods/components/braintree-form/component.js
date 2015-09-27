import Ember from 'ember';

export default Ember.Component.extend({
    // Required input parameters
    price: 0,
    clientToken: '',
    action: null,

    didInsertElement(){
        braintree.setup(this.get('clientToken'), "dropin", {
          container: "payment-form",
          onPaymentMethodReceived: this.paymentMethodReceived.bind(this)
        });
    },
    paymentMethodReceived(method){
        this.sendAction('action',method);
    }
});
