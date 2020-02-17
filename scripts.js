function myFunction()
{
  var inFetch = prompt("enter a sentence");
  var res=inFetch.split(' ');
  var chars = inFetch.split('');
  var clone = inFetch.split();

/* splited output*/
  document.getElementById("display-words").innerHTML=res[3];
  document.getElementById("display-char").innerHTML=chars[8];
  document.getElementById("display-sentence").innerHTML=clone;
/* joined output*/
var joiner = ["css","JS","bootstrap"];
  document.getElementById("join-words").innerHTML=joiner.join();
  document.getElementById("join-char").innerHTML=joiner.join(' ');
  document.getElementById("join-sentence").innerHTML=joiner.join('-');
};
