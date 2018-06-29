
function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "https://www.dealabs.com/rss/hot", true);
  xmlhttp.send();
}

function myFunction(xml) {
  var x, i, xmlDoc, txt;
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("led7");
  for (i = 0; i< x.length; i++) {
    txt += x[i].childNodes[0].nodeValue;
  }
  document.getElementById("demo").innerHTML = txt;

}

//
const rp = require('request-promise');
const cheerio = require('cheerio');


const options = {
  uri: `https://www.dealabs.com/rss/hot`,
  transform: function (body) {
    return cheerio.load(body);
  }
};

    rp(options)
  .then(($) => {
    console.log($);
  })
  .catch((err) => {
    console.log(err);
  });


$('a[imgFrame imgFrame--noBorder threadItem-imgFrame box--all-b clickable cept-thread-image-clickout]').html()



