document.addEventListener("DOMContentLoaded", function () {
  // Page has finished loading. Now, do things.
  loadLayoutByPetraPixel();

  // Add any custom JavaScript code here...

  // Multiple Font-Selector
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
  });
  // End of Multiple Font-Selector Code

  // Font Switch
  function toggleFont() {
    // Select the <link> element
    let theme = document.getElementById('font');

    // Toggle between light.css and dark.css
    if (theme.getAttribute('href') == 'fonts.css') {
        theme.setAttribute('href', 'accessible.css');
    } else {
        theme.setAttribute('href', 'fonts.css');
    }
  }
  // End of Font Switch Code

  // Multiple Theme Switch
  function lightmode() {
    document.getElementById('colortheme').setAttribute('href', './style/light.css');}
    
  function darkmode() {
    document.getElementById('colortheme').setAttribute('href', './style/dark.css');}

          function darkmode() {
    document.getElementById('colortheme').setAttribute('href', './style/dark.css');
  localStorage.setItem('theme', 'dark');}

  function lightmode() {
    document.getElementById('colortheme').setAttribute('href', './style/light.css');
  localStorage.setItem('theme', 'light');}

  if(localStorage.getItem('theme') == 'dark'){
    darkmode();}
  if(localStorage.getItem('theme') == 'light'){
    lightmode();}
  // End of Multiple Theme Switch Code

  // Theme Switch
function toggleTheme() {
  // Select the <link> element
  let theme = document.getElementById('themes');

  // Toggle between light.css and dark.css
  if (theme.getAttribute('href') == '/style/style.css') {
      theme.setAttribute('href', '/style/dark.css');
  } else {
      theme.setAttribute('href', '/style/style.css');
  }
}
// End of Theme Switch Code

// Cursor Trail Code 
// <![CDATA[
var colours=new Array('#525f93', '#795E87', '#C4B5CF', '#3c4c5f', '#C1C8D7', '#D8CEDF', '#EBE7EF', '#e6e9ef'); // colours of the stars
var minisize=10; // smallest size of stars in pixels
var maxisize=15; // biggest size of stars in pixels
var stars=66; // maximum number of stars on screen
var over_or_under="over"; // set to "over" for stars to always be on top, or "under" to allow them to float behind other objects

/*****************************
*JavaScript Love Heart Cursor*
* (c)2013+ mf2fm web-design *
* http://www.mf2fm.com/rv *
* DON'T EDIT BELOW THIS BOX *
*****************************/
var x=ox=400;
var y=oy=300;
var swide=800;
var shigh=600;
var sleft=sdown=0;
var herz=new Array();
var herzx=new Array();
var herzy=new Array();
var herzs=new Array();
var kiss=false;

if (typeof('addRVLoadEvent')!='function') function addRVLoadEvent(funky) {
  var oldonload=window.onload;
  if (typeof(oldonload)!='function') window.onload=funky;
  else window.onload=function() {
    if (oldonload) oldonload();
    funky();
  }
}

addRVLoadEvent(mwah);

function mwah() { if (document.getElementById) {
  var i, heart;
  for (i=0; i<stars; i++) {
    heart=createDiv("auto", "auto");
    heart.style.visibility="hidden";
    heart.style.zIndex=(over_or_under=="over")?"1001":"0";
    heart.style.color=colours[i%colours.length];
    heart.style.pointerEvents="none";
    if (navigator.appName=="Microsoft Internet Explorer") heart.style.filter="alpha(opacity=75)";
    else heart.style.opacity=0.75;
    heart.appendChild(document.createTextNode(String.fromCharCode(10047)));
    document.body.appendChild(heart);
    herz[i]=heart;
    herzy[i]=false;
  }
  set_scroll();
  set_width();
  herzle();
}}

function herzle() {
  var c;
  if (Math.abs(x-ox)>1 || Math.abs(y-oy)>1) {
    ox=x;
    oy=y;
    for (c=0; c<stars; c++) if (herzy[c]===false) {
      herz[c].firstChild.nodeValue=String.fromCharCode(10023);
      herz[c].style.left=(herzx[c]=x-minisize/2)+"px";
      herz[c].style.top=(herzy[c]=y-minisize)+"px";
      herz[c].style.fontSize=minisize+"px";
      herz[c].style.fontWeight='normal';
      herz[c].style.visibility='visible';
      herzs[c]=minisize;
      break;
    }
  }
  for (c=0; c<stars; c++) if (herzy[c]!==false) blow_me_a_kiss(c);
  setTimeout("herzle()", 40);
}

document.onmousedown=pucker;
document.onmouseup=function(){clearTimeout(kiss);};

function pucker() {
  ox=-1;
  oy=-1;
  kiss=setTimeout('pucker()', 100);
}

function blow_me_a_kiss(i) {
  herzy[i]-=herzs[i]/minisize+i%2;
  herzx[i]+=(i%5-2)/5;
  if (herzy[i]<sdown-herzs[i] || herzx[i]<sleft-herzs[i] || herzx[i]>sleft+swide-herzs[i]) {
  herz[i].style.visibility="hidden";
  herzy[i]=false;
  }
  else if (herzs[i]>minisize+2 && Math.random()<.5/stars) break_my_heart(i);
  else {
    if (Math.random()<maxisize/herzy[i] && herzs[i]<maxisize) herz[i].style.fontSize=(++herzs[i])+"px";
    herz[i].style.top=herzy[i]+"px";
    herz[i].style.left=herzx[i]+"px";
  }
}

function break_my_heart(i) {
  var t;
  herz[i].firstChild.nodeValue=String.fromCharCode(9676);
  herz[i].style.fontWeight='bold';
  herzy[i]=false;
  for (t=herzs[i]; t<=maxisize; t++) setTimeout('herz['+i+'].style.fontSize="'+t+'px"', 60*(t-herzs[i]));
  setTimeout('herz['+i+'].style.visibility="hidden";', 60*(t-herzs[i]));
}

document.onmousemove=mouse;
function mouse(e) {
  if (e) {
    y=e.pageY;
    x=e.pageX;
  }
  else {
    set_scroll();
    y=event.y+sdown;
    x=event.x+sleft;
  }
}

window.onresize=set_width;
function set_width() {
  var sw_min=999999;
  var sh_min=999999;
  if (document.documentElement && document.documentElement.clientWidth) {
    if (document.documentElement.clientWidth>0) sw_min=document.documentElement.clientWidth;
    if (document.documentElement.clientHeight>0) sh_min=document.documentElement.clientHeight;
  }
  if (typeof(self.innerWidth)=='number' && self.innerWidth) {
    if (self.innerWidth>0 && self.innerWidth<sw_min) sw_min=self.innerWidth;
    if (self.innerHeight>0 && self.innerHeight<sh_min) sh_min=self.innerHeight;
  }
  if (document.body.clientWidth) {
    if (document.body.clientWidth>0 && document.body.clientWidth<sw_min) sw_min=document.body.clientWidth;
    if (document.body.clientHeight>0 && document.body.clientHeight<sh_min) sh_min=document.body.clientHeight;
  }
  if (sw_min==999999 || sh_min==999999) {
    sw_min=800;
    sh_min=600;
  }
  swide=sw_min;
  shigh=sh_min;
}

window.onscroll=set_scroll;
function set_scroll() {
  if (typeof(self.pageYOffset)=='number') {
    sdown=self.pageYOffset;
    sleft=self.pageXOffset;
  }
  else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
    sdown=document.body.scrollTop;
    sleft=document.body.scrollLeft;
  }
  else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
    sleft=document.documentElement.scrollLeft;
    sdown=document.documentElement.scrollTop;
  }
  else {
    sdown=0;
    sleft=0;
  }
}

function createDiv(height, width) {
  var div=document.createElement("div");
  div.style.position="absolute";
  div.style.height=height;
  div.style.width=width;
  div.style.overflow="hidden";
  div.style.backgroundColor="transparent";
  return (div);
}
// ]]>
// End of Cursor Trail Code


function loadLayoutByPetraPixel() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToCurrentPage();
}

const nesting = getNesting();

function headerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `
  
      <!-- =============================================== -->
      <!-- HEADER -->
      <!-- =============================================== -->

      <header>
        <div class="header-content">
	        <div class="header-title"><img src="./imgs/butterfly1.gif" alt="x">  mauvemystic's dream island  <img style="transform: scaleX(-1);" src="./imgs/butterfly1.gif" alt="x"></div>
        </div>
      </header>

	  
	
	  
      <!-- =============================================== -->
      <!-- RIGHT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="right-sidebar">
        
      <!-- NAVIGATION -->
        <nav aria-label="site" class="deskside">
        <div class="sidebar-title">Navigation</div>
          <ul>
	          <li><a href="/" class="hvr-wobble-horizontal">home</a></li>
	          <li><a href="/aboutme" class="hvr-wobble-horizontal">about me</a></li>
            <li><a href="/now" class="hvr-wobble-horizontal">now</a></li>
            <li><a href="/defaults" class="hvr-wobble-horizontal">my defaults</a></li>
            <li><a href="/guestbook" class="hvr-wobble-horizontal">guestbook</a></li>
          </ul>
          <details name="tab"><summary> For Me</summary>
            <ul>
              <li><a href="/blog" class="hvr-wobble-horizontal">&nbsp;journal</a></li>
              <li><a href="/inspiration_station/" class="hvr-wobble-horizontal">&nbsp;inspiration station</a></li>
            </ul>
          </details>
          <details name="tab"><summary> My Interests</summary>
            <ul>
              <li><a href="/medialog" class="hvr-wobble-horizontal">&nbsp;media log</a></li>
              <li><a href="/collections" class="hvr-wobble-horizontal">&nbsp;collections</a></li>
              <li><a href="/lists/" class="hvr-wobble-horizontal">&nbsp;my lists</a></li>
              <li><a href="/altar" class="hvr-wobble-horizontal">&nbsp;altar</a></li>
            </ul>
          </details>
          <details name="tab"><summary> Island Info</summary>
            <ul>
              <li><a href="/about-the-island" class="hvr-wobble-horizontal">&nbsp;about the island</a></li>
              <li><a href="/todo" class="hvr-wobble-horizontal">&nbsp;todos</a></li>
              <li><a href="/changelog" class="hvr-wobble-horizontal">&nbsp;changelog</a></li>
              <li><a href="/styleguide" class="hvr-wobble-horizontal">&nbsp;style guide</a></li>
            </ul>
          </details>
          <details name="tab"><summary> Links Out</summary>
            <ul>
              <li><a href="/resources" class="hvr-wobble-horizontal">&nbsp;resources</a></li>
              <li><a href="/other_sites" class="hvr-wobble-horizontal">&nbsp;sites to see</a></li>
            </ul>
          </details>
	      </nav>
        
        <div class="sidebar-section">
          <nav class="mobileside">
          <details id="navdrop"><summary class="sum"><div id="navdrophead">Navigation</div></summary>
            <ul>
	          <li><a href="/" class="hvr-wobble-horizontal" style="margin-right: 20px">home</a></li>
	          <li><a href="/aboutme" class="hvr-wobble-horizontal" style="margin-right: 20px">about me</a></li>
            <li><a href="/now" class="hvr-wobble-horizontal" style="margin-right: 20px">now</a></li>
            <li><a href="/defaults" class="hvr-wobble-horizontal" style="margin-right: 20px">my defaults</a></li>
            <li><a href="/guestbook" class="hvr-wobble-horizontal" style="margin-right: 20px">guestbook</a></li>
          </ul>
          <details name="tab"><summary> For Me</summary>
            <ul>
              <li><a href="/blog" class="hvr-wobble-horizontal">&nbsp;journal</a></li>
              <li><a href="/inspiration_station/" class="hvr-wobble-horizontal">&nbsp;inspiration station</a></li>
            </ul>
          </details>
          <details name="tab"><summary> My Interests</summary>
            <ul>
              <li><a href="/medialog" class="hvr-wobble-horizontal">&nbsp;media log</a></li>
              <li><a href="/collections" class="hvr-wobble-horizontal">&nbsp;collections</a></li>
              <li><a href="/lists/" class="hvr-wobble-horizontal">&nbsp;my lists</a></li>
              <li><a href="/altar" class="hvr-wobble-horizontal">&nbsp;altar</a></li>
            </ul>
          </details>
          <details name="tab"><summary>  Island Info</summary>
            <ul>
              <li><a href="/about-the-island" class="hvr-wobble-horizontal">&nbsp;about the island<span class="new"></span></a><span class="new"></span></li>
              <li><a href="/todo" class="hvr-wobble-horizontal">&nbsp;todos</a></li>
              <li><a href="/changelog" class="hvr-wobble-horizontal">&nbsp;changelog</a></li>
              <li><a href="/styleguide" class="hvr-wobble-horizontal">&nbsp;style guide</a></li>
            </ul>
          </details>
          <details name="tab"><summary> Links Out</summary>
            <ul>
              <li><a href="/resources" class="hvr-wobble-horizontal">&nbsp;resources</a></li>
              <li><a href="/other_sites" class="hvr-wobble-horizontal">&nbsp;sites to see</a></li>
            </ul>
          </details>
        </nav>

        <div class="sidebar-section">
          <div class="sidebar-title"><label for="fontFamily">Font/Theme</label></div>
          <blockquote>
            <select name="fontFamily" id="fontFamily" class="center" style="margin-bottom: 10px">
              <option value="rainyhearts">my default</option>
              <option value="Courier New">Courier New</option>
              <option value="Trebuchet MS">Trebuchet MS</option>
            </select>

            
            <button class="center" onclick="darkmode()">dark mode</button>
            <button class="center" onclick="lightmode()">light mode</button>  
        
            <!-- NEED TO LEARN TO SAVE CHOICES TO LOCAL STORAGE TO USE
            <button onclick="toggleFont()">toggle font</button>
            
            <button onclick="toggleTheme()">toggle theme</button>  -->

          </blockquote>
        </div>

        <div class="sidebar-section">
          <div class="sidebar-title">Tunes</div>
          <blockquote>
            <p class="center" style="margin-bottom: 0.25em">Opens in a separate tab!</p>
            <button onclick="window.open('/webdeck-player/index.html', 'Web Deck Player', 'height=250, width=600')" class="center">Open music player</button>
          </blockquote>
        </div>
        <iframe class="center" src="https://nekoweb.org/frame/follow" frameborder="0" width="170" height="28"></iframe>
        <div class="sidebar-title">Status</div>
          <blockquote>
            <span class="bold">listening to:</span>
            <div id="listening"><span id="trackName">nothing at the moment!</span></div>
          </blockquote>
          <blockquote>
            <div id="statuscafe">
              <div id="statuscafe-username"></div>
              <div id="statuscafe-content"></div>
          </blockquote>
        </div>
        
        <div class="sidebar-section deskside">
        <div class="sidebar-title">Currently</div>
          <ul>
            <li><span class="bold">date</span> <time datetime="2026-04-01">04.01.2026<time></li>
            <li><span class="bold">watching</span> jujutsu kaisen season 3</li>
            <li><span class="bold">reading</span> nothing atm</li>
            <li><span class="bold">playing</span> Murdoku</li>
            <li><span class="bold">learning</span> how to use Linux</li>
            <li><span class="bold">loving</span> my job so far!!</li>
          </ul>
        
        </div>

        <details id="statusdrop"><summary><div id="statusdrophead">Currently</div></summary>
          <ul>
            <li><span class="bold">date</span> <time datetime="2026-04-01">04.01.2026<time></li>
            <li><span class="bold">watching</span> jujutsu kaisen season 3</li>
            <li><span class="bold">reading</span> nothing atm</li>
            <li><span class="bold">playing</span> Murdoku</li>
            <li><span class="bold">learning</span> how to use Linux</li>
            <li><span class="bold">loving</span> my job so far!!</li>
          </ul>
          </details>
        </div>
      </aside>

      `;
      
      
}



function footerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `


      <!-- =============================================== -->
      <!-- FOOTER -->
      <!-- =============================================== -->

      <footer>
        <div>
          mauvemystic c. 2026   <img src="./imgs/lavender-rose.png" width="9px">   <a href='https://nekoweb.org/follow/mauvemystic.nekoweb.org'>nekoweb profile</a>   <img src="./imgs/lavender-rose.png" width="9px">   <a href="./sitemap">sitemap</a>   <img src="./imgs/lavender-rose.png" width="9px">   <a href="#">back to top</a>
        </div>
      </footer>`;
}

/* Do not edit anything below this line unless you know what you're doing. */

function giveActiveClassToCurrentPage() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");
    const currentHref = window.location.href.replace(".html", "") + "END";

	/* Homepage */
    if (href == "/" || href == "/index.html") {
      if (pathname == "/") {
        el.classList.add("active");
      }
    } else {
      /* Other pages */
      if (currentHref.includes(href + "END")) {
        el.classList.add("active");

        /* Subnavigation: */
		
        /* removing the code that keeps 'details' open
        if (el.closest("details")) {
          el.closest("details").setAttribute("open", "open");
          el.closest("details").classList.add("active");
        }
        */

        if (el.closest("ul")) {
          if (el.closest("ul").closest("ul")) {
          	el.closest("ul").closest("ul").classList.add("active");
          }
        }
      }
    }
  });
}

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes == 1) return "./";
  return "../".repeat(numberOfSlashes - 1);
}
