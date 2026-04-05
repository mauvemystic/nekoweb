/*
The Javascript portion of code I made in order to make a working font selector on my Neocities website, you will need the HTML code for the font selector form as well which will also be on my Pastebin profile, in a folder called "font selector code html and javascript". My code works by storing the user's selection in their browser selection and checking for it when they load the website, so if you have the code below somewhere on each webpage, it will work across multiple site pages as well. If you would like to see the code in action, my website is punkwasp.neocities.org. This code is completely free to use, no credit required. You could also tweak it to edit things besides font family, and it will work with custom fonts you've uploaded to the site as long as you've done the work of setting them up in your CSS file.
*/

var bodyElem = document.querySelector('body');

var fontForm = document.getElementById('fontFamily');

if(!localStorage.getItem('fontFamily')) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  localStorage.setItem('fontFamily', document.getElementById('fontFamily').value);

  setStyles();
}

function setStyles() {
  var currentFont = localStorage.getItem('fontFamily');

  document.getElementById('fontFamily').value = currentFont;

  bodyElem.style.fontFamily = currentFont;
}

fontForm.onchange = populateStorage;