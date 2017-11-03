var countdown = function(start , end , elements , callback){

  var t = end - start;



  var second = 10000;

  var minute  = second * 60 ;

  var hour = minute * 60;

  var start = hour * 10 ;

  end = 00 ;

  calculate = function(){
    
if (remaining <= 0){

clearInterval(timer);

if(typeof callback === 'function'){

  callback();
}
}else {

if(!timer){

  timer = setInterval(calcualte , seconds);
}

}
 data = {
        
        'hours':(5),
         'minutes': Math.floor((remining % hours)/minute),
         'seconds': Math.floor((remaining % second)/ second),

 }
        if(elements.length){

          for(x in elements){
            var x = elements[x]
            data [X] = ('00' + data[X].slice(-2));
            document.getElementById(X).innerHTML = data[X];
          }
        }
        
  };
  calculate();
}
