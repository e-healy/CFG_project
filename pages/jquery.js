$(function(){
    var palette = ['#66C2A5', '#FC8D62', '#8DA0CB', '#E78AC3', '#A6D854'];
        generateColors = function(){
          var colors = {},
              key;
  
          for (key in map.regions) {
            colors[key] = palette[Math.floor(Math.random()*palette.length)];
          }
          return colors;
        },
        map;
  
    map = new jvm.Map({
      map: 'world_merc',
      container: $('#map'),
      series: {
        regions: [{
          attribute: 'fill'
        }]
      }
    });
    map.series.regions[0].setValues(generateColors());
    $('#update-colors-button').click(function(e){
      e.preventDefault();
      map.series.regions[0].setValues(generateColors());
    });
  })