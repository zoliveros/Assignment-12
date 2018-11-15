$(document).ready(function(){
function getWeather(){
$.ajax({
 url:"https://api.openweathermap.org/data/2.5/find?",
 type:"GET",
 dataType:"JSON",
 data:{
   q:"New York",
   units:"metric",
   appid:"def43d4c7650e3ec67a14632986e328c",
 },

//metric = celsius

 success: function(data){
   console.log(data);
   console.log(data.list[0].main.temp);
   $("#NY").html("The tempurature in New York is: " +  data.list[0].main.temp +" degrees Celsius");

   var temp = data.list[0].main.temp;
  			 if(temp < "20"){
  			 	$(".temperature").show();
     			$(".temperature").css("background-color", "light-blue");
     		} else {
     			$(".temperature").show();
     			$(".temperature").css("background-color", "yellow");
     		}

		},


$('#NY').on('click',function(){
 getWeather('metric',function(){
 var unit = 'metric';
 });
});


success: function(data){
  console.log(data);
  console.log(data.list[1].main.temp);
  $("#Germany").html("The tempurature in Heilbad Heiligenstadt is: " +  data.list[0].main.temp +" degrees Celsius");

  var temp = data.list[1].main.temp;
        if(temp < "20"){
         $(".temperature").show();
         $(".temperature").css("background-color", "light-blue");
       } else {
         $(".temperature").show();
         $(".temperature").css("background-color", "yellow");
       }

   },

   $("#Germany").click(function(){
    getWeather('metric', function(){
    var unit= 'metric';
    });

    error: function(data, textStatus, errorThrown) {
      console.log("whomp, whomp");
      //Do Something to handle error
      console.log(errorThrown);
     }
    });
