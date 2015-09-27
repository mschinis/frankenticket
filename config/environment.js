/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'frankenticket',
    podModulePrefix: 'frankenticket/pods',
    environment: environment,
    baseURL: '/',
    apiURL: 'http://ticket-hub.herokuapp.com',
    locationType: 'auto',
    contentSecurityPolicy: {
        'default-src': "https://assets.braintreegateway.com",
        'script-src': "'self' http://ticket-hub.herokuapp.com https://js.braintreegateway.com https://api.sandbox.braintreegateway.com https://client-analytics.sandbox.braintreegateway.com",
        'font-src': "'self' https://fonts.gstatic.com data:;",
        'connect-src': "'self' http://ticket-hub.herokuapp.com",
        'img-src': "'self' http://placehold.it https://placeholdit.imgix.net",
        'style-src': "'self' 'unsafe-inline'",
        'media-src': "'self'"
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
}

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
