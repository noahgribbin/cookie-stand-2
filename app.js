var CookieStand = function(place,minCustHour,maxCustHour,avgCookiesCust){
  this.place = place;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCookiesCust = avgCookiesCust;
  this.thymes = ['10am','11am','12pm','1pm','2pm','3pm','4pm','5pm' ];
  this.string = [];
  this.randCustHour = function (min,max){
    return Math.floor(Math.random()*(max - min +1)) + min;
  };
  this.totalCookiesHour = function (){
    return Math.floor(this.randCustHour(this.maxCustHour,this.minCustHour) * this.avgCookiesCust)
  };
  this.getString = function(){
    this.string = []
    var totals = []
    var total = 0
    for(var i=0; i<this.thymes.length;i++){
      totals.push(this.totalCookiesHour())
      total += totals[i]
      this.string.push(totals[i])
    }
    this.string.push(total)
  };
  this.makeTable = function(){
    this.getString()
    var table = document.getElementById("the-table");
    var row = table.insertRow(-1);
    var cell = row.insertCell(-1);
    cell.innerHTML = this.place
    for(var i = 0; i <this.string.length-1; i++){
      var cell = row.insertCell(-1);
      cell.innerHTML = this.string[i]
    }
    var cell = row.insertCell(-1);
    cell.innerHTML = this.string[8]
  }
}
var pikeplace = new CookieStand('Pike Place Market',17,88,5.2);
var seatac = new CookieStand('Seatac Airport',6,44,1.2);
var southcenter = new CookieStand('Southcenter Mall',11,38,1.9);
var bellevue = new CookieStand('Bellevue Square',20,48,3.3);
var alki = new CookieStand('Alki',3,24,2.6);
pikeplace.makeTable();
seatac.makeTable();
southcenter.makeTable();
bellevue.makeTable();
alki.makeTable();
var form = document.getElementById("form");
// Stores form data for table editing
function submitForm(){
  makeUserRow() //When you hit submit it should make a row so <---
};
// Creates a row in the sales table from form data
function makeUserRow(){
  var location = form.elements['location'].value
  var minCookies = Number(form.elements['min customer'].value)
  var maxCookies = Number(form.elements['max customer'].value)
  var avgCookies = Number(form.elements['avg cookies cust'].value)
  // console.log(minCookies+4) found out properties were loging as string
  var cookieStand = new CookieStand(location,minCookies,maxCookies,avgCookies)
  cookieStand.makeTable()
};
