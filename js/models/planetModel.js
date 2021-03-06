define([
    'jquery',
    'd3',
    'backbone'
], function($, d3, backbone) {

  var NetworkModel = backbone.Model.extend({

        // Initial attributes
        defaults:{

          "planet_color": "green",
          "width": 1000,
          "height":1000,
          "posY": 100

        },

        initialize: function(data){

            // Data is going to be an array of objects.
            this.set({
              "datasets": data,
            })

        }

    });

    return NetworkModel;

});
