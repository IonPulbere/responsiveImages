var el= document.getElementById('range');
var text= document.getElementById('range-value');
function autocompleteM(){
var valel=el.value;
    if ((valel<90)&&(valel>50)){
      text.style.color="#E4ED36";
    } else if (valel>90) {
      text.style.color="#FF8276";
    }
    else {
      text.style.color="#fff";
    }
  text.textContent=valel;
}
el.addEventListener('input',function(){
autocompleteM();
},false);


var htmlTag= document.getElementsByTagName('html')[0];
var colInput= document.getElementById('colorID');
function getCollor(e){
htmlTag.style.backgroundColor=e.target.value;
}
colInput.addEventListener('input',function(e){
getCollor(e);
}
,false)
