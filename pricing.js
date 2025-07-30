

var toggleBtn = document.getElementById ('toggle-button');
var toggleIconOn = document.getElementById ('toggle-icon-on');
var toggleIconOff = document.getElementById ('toggle-icon-off');




toggleIconOn.onclick = function () {
    toggleIconOn.style.display = 'none'
    toggleIconOff.style.display = 'block'

};

toggleIconOff.onclick = function () {
    toggleIconOn.style.display = 'block'
    toggleIconOff.style.display = 'none'

};