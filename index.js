function convert() {
  var match = /[A-Za-z]/gi;
  var inputtext = document.getElementById("input").value.toLowerCase();
  var wordarr = inputtext.split(" ");
  var outputarr = [];
  for (let i = 0; i < wordarr.length; i++) {
    var newWord = "";
    for (let j = 0; j < wordarr[i].length; j++) {
      if (j % 2 == 0) {
        newWord = newWord.concat(wordarr[i][j]);
      } else {
        newWord = newWord.concat(wordarr[i][j].toUpperCase());
      }
    }
    outputarr.push(newWord);
  }
  var outputtext = outputarr.join(" ");
  document.getElementById("output").value = outputtext;
}
