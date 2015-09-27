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
            console.log('event', this.get('currentModel.event'));
            this.set('currentModel.tickets',[
                {
                    "name": "SAT 9PM 2PROV DOUBLE",
                    "availability": false,
                    "price": "£20.00"
                },
                {
                    "name": "SUN 9PM 2PROV DOUBLE",
                    "availability": false,
                    "price": "£15.00"
                }
            ]);
            // Event.availability().then((res)=>{
            //     if(res.length === 0 ) this.transitionTo('eekke');
            //     return;
            //
            //     // res is array
            //     /*
            //     [{
            //         "name": "SAT 9PM 2PROV DOUBLE",
            //         "availability": false,
            //         "price": 0
            //     }]
            //     */
            //     this.set('currentModel.tickets',res);
            // });
        },
        sendTrackRequest(){
            Event.request().then((res)=>{
                // All done. show confirmation
            });
        },
        selectTicket(ticket){
            console.log('ticket selected',ticket);
        }
    }
});
