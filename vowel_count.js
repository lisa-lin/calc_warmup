/* Build a function vowel_count() which takes a string an returns the number of vowels (AEIOUY) */

function vowel_count() {
  a = "holy guacamole!";

  var numVowels = 0;

  for(var i = 0; i < a.length; i++) {
          if('aouiey'.search(a[i]) > -1){
              numVowels++;
          }
  }

  alert(numVowels + " vowels")
}

vowel_count();
