import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['typed-component'],
    // Required parameters
    content: [],
    speed: 0,

    didInsertElement(){
        Ember.$('.typed').typed({
            loop: true,
            strings: this.get('content'),
            typeSpeed: this.get('speed')
        });
    }
});
