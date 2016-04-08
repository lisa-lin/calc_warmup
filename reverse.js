/* Build a function reverse() which takes a string and returns all the characters in the opposite position, e.g. */
function reverse(s){
    return s.split("").reverse().join("");
}

alert(reverse("kayak. just kidding!"));
