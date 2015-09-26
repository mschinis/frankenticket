import Ember from 'ember';
import config from '../config/environment';

export default Ember.Mixin.create({

    /**
     * Request method
     * @param  {Object} params Parameters
     * @return {Object}      Promise
     */
    request: function(params={}) {
        return new Ember.RSVP.Promise((resolve, reject) => {
            Ember.$.ajax({
                url: params.url,
                data: params.data,
                type: params.method,
                contentType: 'application/json; charset=UTF-8',
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true
            })
            .success(resolve)
            .fail(reject);
        });
    },

    /**
     * Returns the apiURL
     * @param  {String} endpoint Endpoint (products)
     * @return {String}          Full URL
     */
    apiURL(endpoint, version) {
        return config.apiURL + (version ? `/${version}/` : '/') + (endpoint ? endpoint : '');
    },

    /**
     * Remove all the ember validation BS to avoid circular json errors
     * @param {Array} keys Keys to sanitize on top of the validation ones
     * @return {Object} Object
     */
    sanitize(keys=[]) {
        let obj = {};
        const product = this;
        const toFilter = Ember.A(['container', 'errors', 'validators', 'dependentValidationKeys', '_orig'].concat(keys));
        for (let key in product) {
            if (product.hasOwnProperty(key) && !toFilter.contains(key)) {
                obj[key] = product[key];
            }
        }
        return obj;
    },

    /**
     * Array of error messages
     * @return {Array} Messages
     */
    errorMessages: Ember.computed('isValid', 'errors', {

        get: function() {
            if (this.get('isValid')) return '';
            let errors = this.get('errors');
            return Object.keys(errors)
            .map((field) => {
                return errors[field].length > 0 ? `${field}: ${errors[field].join(', ')}` : '';
            })
            .filter(Boolean);
        }
    })
});
