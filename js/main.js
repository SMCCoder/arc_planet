/*
/ Main script that acts as the entry point for the application
*/

requirejs.config({
    baseUrl:'',
    paths: {
        backbone: 'lib/backbone/backbone-min',
        bootstrap: 'lib/bootstrap/js/bootstrap.min',
        d3: 'lib/d3/d3.min',
        jquery: 'lib/jquery/jquery.min',
        jqueryui: 'lib/jquery-ui/jquery-ui.min',
        underscore: 'lib/underscore/underscore-min'
    }
})

// Main application single entry point
requirejs([
    'jquery',
    'd3',
    'js/models/planetModel',
    'js/views/planetMass',
    'js/views/planetDiameter'
],function($, d3, planetModel, planetMass, planetDiameter) {

        var planetData =  {"data":[
        {name: "Mercury",	       mass: 0.330,       diameter: 4879,        distance: 57.9,         color: "gray"},
        {name: "Mercury",	       mass: 0.330,       diameter: 4879,        distance: 57.9,         color: "gray"},
        {name: "Venus",	         mass: 4.87,        diameter: 12104,       distance: 108.2,        color: "pink"},
        {name: "Earth",      	   mass: 5.97,        diameter: 12756,       distance: 149.6,        color: "green"},
        {name: "Mars",	         mass: 0.642,       diameter: 6792,        distance: 227.9,        color: "red"},
        {name: "Jupiter",	       mass: 1898,        diameter: 142984,      distance: 778.6,        color: "orange"},
        {name: "Saturn",      	 mass: 568,         diameter: 120536,      distance: 1433.5,       color: "purple"},
        {name: "Uranus",	       mass: 86.8,        diameter: 51118,       distance: 2872.5,       color: "blue"},
        {name: "Neptune",	       mass: 102,         diameter: 49528,       distance: 4495.1,       color: "steelblue"},
        {name: "Pluto",    	     mass: 0.0146,      diameter: 2370,        distance: 5906.4,       color: "black"}]

}



        /*{ "data":[
                           {"name":["Mercury","Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"]},
                           {"mass":[0.330,	4.87, 5.97,	0.642, 1898,	568, 86.8,	102,	0.0146]},
                           {"diameter":[4879,	12104, 12756,	6792,	142,984,	120,536,	51,118,	49,528,	2370]},
                           {"color":["gray","yellow","green","red","orange","purple","steelblue","blue","black"]}
                         ]
                       }*/

      this.planet_model = new planetModel (planetData);

      $("#mass").click(function() {
        this.planet_mass_sim = new planetMass( { "model" : this.planet_model } );
        //return this.planet_mass_sim;
      });
      this.planet_diameter_sim = new planetDiameter( { "model" : this.planet_model } );


});
