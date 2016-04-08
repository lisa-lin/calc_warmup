/* Build a function my_max() which takes an array and returns the maximum number */

function my_max() {
  var max = 0;
  var i;
  var array=[];

  for(i=0; i<5; i++){
    var number=prompt("Enter 5 numbers to find the max");
    number=parseFloat(number);
    if(number>max)
     max=number;
     // if you need to hold the value
     array.push(number);
  }


  alert("your highest number is " + max );
  document.write("max = " + max);
}

my_max();
