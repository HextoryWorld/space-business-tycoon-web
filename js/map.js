AmCharts.ready(function() {
  var map = AmCharts.makeChart( "mapdiv", {
    type: "map",
    projection:"winkel3",
    dataProvider: {
      map: "worldLow",
      getAreasFromMap: true
    },

    areasSettings : {
      autoZoom: true,
      selectedColor: "#CC0000"
    },

    zoomControl : {
      "zoomControlEnabled": false,
      "homeButtonEnabled": false
    }
  });

//  map.addListener("click", function(event) {
//    window.location.href = "dashboard.html";
//  });

  var countries = ['ES','US','FR', 'GB', 'DE', 'CN', 'CA', 'AU', 'AR', 'BR', 'IN', 'IT', 'JP', 'RU', 'KR'];

  setInterval(function() {
    var random = Math.floor(Math.random() * 15);
    var area = map.getObjectById(countries[random]);
    map.clickMapObject(area);
    document.getElementById("placeholder").innerHTML = '<i class="ion-person"></i> New CEO starts in ' + area.title;
  }, 3500);
});