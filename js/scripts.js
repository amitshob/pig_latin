var pigLatin = function(word) {


    var word_array = word.split("");
    var consonant= ["b","c","d","f","g","h","j","k","m","n","p","q","r","s","t","v","x","z","w","y"]
    // // return word;
    if (word_array[0] === "a"||"e"||"i"||"o"||"u") {// if 1st letter is a vowel

      word_array.push("a","y");

      return word_array.join("");
    }

    else if (consonant.indexOf(word_array[0])!== -1){ //if 1st letter is a consonant


      for (var index= 0; word_array[index] ===  "a"||"e"||"i"||"o"||"u" ; index++){
        word_array = word_array.push(word_array[index])
        word_array = word_array.splice(word_array[index+1]);

        }
       word_array.push("a","y");

       return word_array.join("");
    }

  }
//
//
//
//   else {
//     return "not a valid";
//   }
// }
//
$(document).ready(function() {
//
  $("form#pig-latin").submit(function(event) {
//
    var word = parse($("input#word").val());
    var result = pigLatin(word);
    // $(".not").text("");
//
    $(".word").text(word);
    $(".result").text(result);
//
//       if (!result) {
//         $(".not").text("not");
//       }
// //
      $("#result").show();
      event.preventDefault(); // so that it does not submit to a server anywhere

//     $("input#x").val("");
//
    });
  });
