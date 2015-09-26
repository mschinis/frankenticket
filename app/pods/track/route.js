import Ember from 'ember';
import Event from '../event/model';

export default Ember.Route.extend({
    model(){
        let event = Event.create();
        let tickets = [];
        return {
            event,
            tickets
        }
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
        }
    }
});
