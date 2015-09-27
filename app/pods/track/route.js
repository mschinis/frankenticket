import Ember from 'ember';
import Event from '../event/model';
import RequestMixin from '../../mixins/request';

export default Ember.Route.extend(RequestMixin,{
    model(){
        let event = Event.create();
        let tickets = [];

        return this.request({
            method: 'GET',
            url: this.apiURL(`client-token`)
        }).then((res)=>{
            return {
                event,
                tickets,
                braintreeClientToken: res.token
            };
        });


    },
    actions: {
        sendAvailabilityRequest(){
            console.log(this.get('currentModel.event'));
            this.set('currentModel.loading',true);
            this.get('currentModel.event').availability().then((res)=>{
                console.log('res',res, 'length', res.length);
                // If no tickets, show confirmation
                if(res.length === 0 ){
                    this.transitionTo('confirmation');
                    return;
                }
                // Tickets available, set them.
                this.set('currentModel.tickets',res);
            });
        },
        sendTrackRequest(method){
            this.set('currentModel.event.ticket',this.get('currentModel.event.ticket.name'));
            this.set('currentModel.event.payment_method',method);
            this.get('currentModel.event').book().then((res)=>{
                this.transitionTo('confirmation');
            });
        },
        selectTicket(ticket){
            console.log('selected ticket',ticket);
            ticket? this.set('currentModel.event.ticket',ticket) : this.set('currentModel.event.ticket',{});
        }
    }
});
