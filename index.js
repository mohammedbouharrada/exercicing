document.getElementById("hor").setAttribute("disabled","true");
setInterval("horloge()",1000);
  function horloge(){
         var date = new Date;
          var seconds = date.getSeconds();
          var minutes = date.getMinutes();
          var hours = date.getHours();
          var dateVersion = hours + ':' + minutes+ ':'+seconds;
          var ipt = document.getElementById("hor");
          ipt.value = dateVersion;
 }
