/**
 * Created with JetBrains PhpStorm.
 * User: Настя
 * Date: 07.04.13
 * Time: 13:25
 * To change this template use File | Settings | File Templates.
 */
function addClass(el, cls) {
    el.className += " "+cls
}
function removeClass(el, cls) {
    var re = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    el.className = el.className.replace(re, ' ')
}
var lightbox = document.getElementById('lightbox');
var article = document.getElementById('article');
var openLink = document.getElementById('open_lightbox');
var closeLink = document.getElementById('close_lightbox');
openLink.onclick = function () {
    lightbox.style.display = "block";
    addClass(article,'active');
}

closeLink.onclick = function () {
    lightbox.style.display = "none";
    removeClass(article,'active');
}
