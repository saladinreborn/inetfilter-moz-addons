$(document).ready(function(){
  $("img").attr("id", function(arr){
    return "testImage" + (arr+1);
  });
  var gambar = []; //var for all loaded image
  var i = 0;
  var j = 1;
  while (j <= $("img").length){
   	gambar.push("testImage"+ j++);
  }
  
  setInterval(function(){
    if (i<= $("img").length-1){
      deteksiGambar(gambar[i++]);
      //console.log(gambar[i-1]);
    }

    else{
      clearInterval();
    }
  },300)

});
 
function deteksiGambar(file){
        nude.load(file);
        nude.scan(function(result){
                if (result){
                        console.log(file+" nudity detected");
                        $("#"+file).attr('src','http://3.bp.blogspot.com/-FV-EDYwmvyU/UTWfJ1YpL5I/AAAAAAAAAJ4/CNh9wOHfo7w/s1600/noporddn.png');
                }else{
                    console.log(file+" bukan nude");
                }
        });
       
};