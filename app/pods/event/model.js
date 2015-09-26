import Ember from 'ember';
import RequestMixin from '../../mixins/request';

let Event = Ember.Object.extend(RequestMixin,{

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
