// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x,y){
    if(x>y){
      return x;
    } else {
      return y;
    }
};

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x,y,z){
    if(x>y && x>z){
      return x;
    } else if(y>x && y>z){
      return y;
    } else{
      return z;
    }
};

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"){
      return true;
    }  else{
      return false;
    }
};

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
  var newPhrase = "";
  for (var i = 0; i < phrase.length; i++) {
    if(!isVowel(phrase[i]) && phrase[i] !== " "){
      newPhrase = newPhrase + phrase[i] + "o" + phrase[i];
    } else{
      newPhrase = newPhrase + phrase[i];
    }
  }
  return newPhrase;
};


// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(array){
    return array.reduce(function(x, y){
      return x + y;
    })
};

function multiply(array){
    return array.reduce(function(x, y){
      return x * y;
    })
};

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(str){
    var newStr = "";
    for (var i = str.length -1; i >= 0; i--) {
      newStr = newStr + str[i];
    }
    return newStr;
};

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
  var length = 0;
  var longest;

  for (var i = 0; i < words.length; i++) {
    if(words[i].length > length){
      length = words[i].length;
      longest =  words[i];
    }
  }
  return longest;
};


// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
  return words.filter(function(longWords){
    return (longWords.length > i);
  })
};

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    var newObj = {};
    for (var i = 0; i < string.length; i++) {
      if (newObj.hasOwnProperty(string[i])) {
        newObj[string[i]] = newObj[string[i]] + 1;
      } else{
        newObj[string[i]] = 1;
      }
    }
  return newObj;
}
