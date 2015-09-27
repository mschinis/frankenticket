import Ember from 'ember';
import RequestMixin from '../../mixins/request';

let Event = Ember.Object.extend(RequestMixin,{
    total: Ember.computed('ticket.quantity','ticket.price',{
        get(){
            return this.get('ticket')&&this.get('quantity')? this.get('ticket.quantity')*this.get('ticket.price') : 0;
        }
    }),
    availability(data={}){
        return this.request({
            method: 'POST',
            url: this.apiURL(`tickets-availability`),
            data: JSON.parse(JSON.stringify(this))
        });
    },
    book(data={}){
        return this.request({
            method: 'POST',
            url: this.apiURL(`requests`),
            data: JSON.parse(JSON.stringify(this))
        });
    }
});

Event.reopenClass(RequestMixin,{
    find(data={}){
        return this.request({
            method: 'GET',
            url: this.apiURL(`events`),
            data: data
        });
    }
});

export default Event;
