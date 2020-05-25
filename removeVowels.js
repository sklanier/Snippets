function disemvowel(str) {
    //we can use a regular expression to replace all vowels in a given string
    return str.replace(/[aeiou]/ig, '');
}