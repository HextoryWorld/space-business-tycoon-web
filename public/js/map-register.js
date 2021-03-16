AmCharts.ready(function() {
  var map = AmCharts.makeChart( "mapdiv", {
    type: "map",
    projection:"winkel3",
    dataProvider: {
      map: "worldLow",
      backgroundZoomsToTop: true,
      getAreasFromMap: true,
      "allLabels": [
        {
          "text": "Countries Space program Budget",
          "bold": true,
          "x": 20,
          "y": 20
        }
      ],
      areas: [
        {
          id: "US",
          color: "#880000"
        },
        {
          id: "CN",
          color: "#880000"
        },
        {
          id: "RU",
          color: "#880000"
        },
        {
          id: "IN",
          color: "#9B2200"
        }, {
          id: "JP",
          color: "#9B2200"
        },
        {
          id: "FR",
          color: "#9B2200"
        },
        {
          id: "DE",
          color: "#9B2200"
        },
        {
          id: "IT",
          color: "#9B2200"
        },
        {
          id: "KR",
          color: "#C36600"
        },
        {
          id: "CA",
          color: "#C36600"
        },
        {
          id: "GB",
          color: "#C36600"
        },
        {
          id: "BE",
          color: "#C36600"
        },
        {
          id: "ID",
          color: "#C36600"
        },
        {
          id: "CH",
          color: "#C36600"
        },
        {
          id: "SE",
          color: "#C36600"
        },
        {
          id: "NL",
          color: "#C36600"
        },
        {
          id: "TR",
          color: "#C36600"
        },
        {
          id: "ES",
          color: "#C36600"
        },
        {
          id: "UA",
          color: "#C36600"
        },
        {
          id: "AR",
          color: "#C36600"
        },
        {
          id: "IR",
          color: "#C36600"
        },
        {
          id: "BR",
          color: "#C36600"
        },
        {
          id: "NO",
          color: "#EBAA00"
        },
        {
          id: "IL",
          color: "#EBAA00"
        },
        {
          id: "PL",
          color: "#EBAA00"
        },
        {
          id: "ZA",
          color: "#EBAA00"
        },
        {
          id: "AT",
          color: "#EBAA00"
        },
        {
          id: "AU",
          color: "#EBAA00"
        },
        {
          id: "FI",
          color: "#EBAA00"
        },
        {
          id: "DK",
          color: "#EBAA00"
        },
        {
          id: "PT",
          color: "#EBAA00"
        },
        {
          id: "GR",
          color: "#EBAA00"
        },
        {
          id: "CZ",
          color: "#EBAA00"
        },
        {
          id: "IE",
          color: "#EBAA00"
        },
        {
          id: "LU",
          color: "#EBAA00"
        },
        {
          id: "HU",
          color: "#EBAA00"
        },
        {
          id: "MX",
          color: "#EBAA00"
        },
        {
          id: "EE",
          color: "#EBAA00"
        },
        {
          id: "SK",
          color: "#EBAA00"
        },
        {
          id: "PK",
          color: "#EBAA00"
        },
        {
          id: "CL",
          color: "#EBAA00"
        },
        {
          id: "NG",
          color: "#EBAA00"
        },
        {
          id: "DZ",
          color: "#EBAA00"
        },
        {
          id: "KP",
          color: "#EBAA00"
        },
        {
          id: "EG",
          color: "#EBAA00"
        },
        {
          id: "KZ",
          color: "#EBAA00"
        },
        {
          id: "MY",
          color: "#EBAA00"
        },
        {
          id: "SA",
          color: "#EBAA00"
        },
        {
          id: "TH",
          color: "#EBAA00"
        },
        {
          id: "AE",
          color: "#EBAA00"
        },
        {
          id: "SI",
          color: "#EBAA00"
        }
      ]
    },

    areasSettings : {
      autoZoom: true,
      selectedColor: "#3498db"
    },

    zoomControl : {
      "zoomControlEnabled": true,
      "homeButtonEnabled": true
    },

    valueLegend: {
      right: 10,
      minValue: "$0",
      maxValue: "> $10B"
    }
  });

  map.addListener("clickMapObject", function(event) {
    $('#country-selector').val(event.mapObject.title);
  });

  map.addListener("homeButtonClicked", function(event) {
    $('#country-selector').val('');
  });

  $('select').on('change', function (e) {
    var selectedValue = $('option:selected', this).attr('data-alternative-spellings');
    if ( selectedValue == '' ) {
      map.clickMapObject(map.dataProvider);
    } else {
      selectedValue = selectedValue.split(' ');
      var area = map.getObjectById(selectedValue[0]);
      map.clickMapObject(area);
    }

  });
});