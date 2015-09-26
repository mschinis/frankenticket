import Ember from 'ember';
import RequestMixin from '../../mixins/request';

let Event = Ember.Object.extend(RequestMixin,{
    availability(data={}){
        return this.request({
            method: 'POST',
            url: this.apiURL(`tickets-availability`),
            data: data
        });
    },
    request(data={}){
        return this.request({
            method: 'POST',
            url: this.apiURL(`requests`),
            data: data
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
