import Ember from 'ember';

export default Ember.Route.extend({
    model(){

        return {
            showForm: false,
            ticketTypes: ['Concert','Theater','Festival']
        }
    },
    actions: {
        showForm(){
            this.set('currentModel.loading',true);
            this.toggleProperty('currentModel.showForm');
        }
    }
});
