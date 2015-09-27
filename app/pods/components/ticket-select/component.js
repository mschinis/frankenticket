import Ember from 'ember';

export default Ember.Component.extend({
    tickets: [],
    action: null,
    
    actions: {
        selected(){
            let selectedOption = Ember.$('#ticketInput').val();
            let ticket = this.get('tickets').filter((tick)=>{
                return tick.name === selectedOption;
            })[0];
            this.sendAction('action', ticket);
        }
    }
});
