import Ember from 'ember';

export default Ember.Route.extend({
    model(){

        return {
            showForm: false,
            ticketTypes: ['Concert','Theater','Flight']
        }
    },
    actions: {
        showForm(){
            this.toggleProperty('currentModel.showForm');
        }
    }
});
