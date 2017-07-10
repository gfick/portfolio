$(document).ready(function(){

  $('input.autocomplete-plu-code').autocomplete({
    data: {
      "4312": null,
      "4322": null,
      "4321": 'http://placehold.it/250x250'
    },
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
      // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });

  $('input.autocomplete-country-of-origin').autocomplete({
    data: {
      "USA": null,
      "Canada": null,
      "Mexico": 'http://placehold.it/250x250'
    },
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
      // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });

  var arr = [];
  var bufferString;

  function csvHandler(req, res){
    fs.readFile('../documents/plu_codes.csv',function (err,data) {

      if (err) {
        return console.log(err);
      }

      //Convert and store csv information into a buffer.
      bufferString = data.toString();

      //Store information for each individual person in an array index. Split it by every newline in the csv file.
      arr = bufferString.split('\n');

      var jsonObj = [];
      var headers = arr[0].split(',');
      for(var i = 1; i < arr.length; i++) {
        var data = arr[i].split(',');
        var obj = {};
        for(var j = 0; j < data.length; j++) {
           obj[headers[j].trim()] = data[j].trim();
        }
        jsonObj.push(obj);
      }
      alert(JSON.stringify(jsonObj));
    });
  }

  window.onload = function() {
    document.getElementById("plu-cvs-to-json").onclick = function fun() {
        alert("hello");
        csvHandler();
        //validation code to see State field is mandatory.
    }
  }

});