function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = 'expires='+ d.toUTCString();
  document.cookie = cname + '=' + cvalue + '; ' + expires;
}

function getCookie(cname) {
  var name = cname + '=';
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length,c.length);
    }
  }
  return;
}

function removeClass(elements, className) {
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (element.classList) {
      element.classList.remove(className);
    } else {
      element.className = element.className.replace(new RegExp('(^|\\b)' +
        className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }
}

function rmc(cookie_name, class_name) {
  var value = getCookie(cookie_name);
  if (typeof value != 'undefined') {
    var els = document.getElementsByClassName(class_name);
    removeClass(els, class_name);
  } else {
    setCookie(cookie_name, true, 365);
  }
}
