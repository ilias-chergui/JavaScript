var myRequest = new XMLHttpRequest();
myRequest.open("GET", "./data.json");
myRequest.onload = function() {
  var myData = JSON.parse(myRequest.responseText);

  //Donner un score
  myData.forEach(Math.random() * 1001);
  console.log(myData[0]);
};
myRequest.send();



////////// J'abandonne. Je retournerais dessus un de ces 4. //////////
