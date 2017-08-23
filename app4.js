
function dosearch(){

$("#name").html("");
var search =$("#search").val();

var base_url = "https://newsapi.org"
var path = "/v1/articles?source=the-next-web&sortBy=latest&apiKey=useryourkeyhere"+search
$.ajax({
  url: base_url + path,
  dataType: 'json',
  success: function(data) {
      console.log(data)



      var v= data.sortBy;
       var source= data.source;
       var articles= data.articles;

       $("#name").text(v); 
       $("#name1").text(source); 
 for(var i=0;i<articles.length;i++){

        $("#name2").append("<p>"+articles[i].title+"</p>")

  
  }
  }
  });
}

