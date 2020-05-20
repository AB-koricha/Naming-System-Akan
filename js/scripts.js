var date=31;
if(date > 0){
  console.log("valid");
}else if(date < 30){
  console.log("valid");
}else{
  alert("enter valid one");
}
var month=12;
if(month > 0){
  console.log("valid");
}else if(month < 12){
  console.log("valid");
}else {
  alert("enter valid one")
}
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];
