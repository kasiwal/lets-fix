'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Landing = new Module('landing');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Landing.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Landing.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Landing.menus.add({
    title: 'landing example page',
    link: 'landing example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Landing.aggregateAsset('css', 'animate.css');
  Landing.aggregateAsset('css', 'bootstrap.css');
  Landing.aggregateAsset('css', 'font-awesome.css');
  Landing.aggregateAsset('css', 'prettyPhoto.css');
  Landing.aggregateAsset('css', 'style.css');

  Landing.aggregateAsset('js','bootstrap.js');
  // Landing.aggregateAsset('js','custom.js');
  Landing.aggregateAsset('js','jquery-1.10.2.js');
  Landing.aggregateAsset('js','jquery.easing.min.js');
  Landing.aggregateAsset('js','jquery.prettyPhoto.js');
  Landing.aggregateAsset('js','wow.min.js');


  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Landing.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Landing.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Landing.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Landing;
});
