var pigLatin = function(word) {


    var word_array = word.split("");
    var consonants = ["b","c","d","f","g","h","j","k","m","n","p","q","r","s","t","v","x","z","w","y"];
    // // return word;

    if (word_array[0] === "a" || word_array[0] === "e" || word_array[0] === "i" || word_array[0] === "o" || word_array[0] === "u") {// if 1st letter is a vowel
      // debugger;
      word_array.push("a","y");

      return word_array.join("");
    }

    else if (consonants.indexOf(word_array[0]) !== -1){ //if 1st letter is a consonant

        // debugger;

      while (word_array[0] !== "a" && word_array[0] !== "e" && word_array[0] !== "i" && word_array[0] !== "o" && word_array[0] !== "u") {
        word_array.push(word_array[0]);
        word_array = word_array.splice(1);
      }

      // for (var index= 0; word_array[0] !== "a" && word_array[0] !== "e" && word_array[0] !== "i" && word_array[0] !== "o" && word_array[0] !== "u"; index+=1) {
      //   word_array.push(word_array[0]);
      //   word_array = word_array.splice(1);
      // }
      word_array.push("a","y");
      return word_array.join("");
    }

  }
//
//word_array[0] === "a" || word_array[0] ==="e" || word_array[0] === "i" || word_array[0] === "o" ||w ord_array[0] === "u"
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
