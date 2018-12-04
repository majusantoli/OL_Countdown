var YY = 2020;
var MM = 07;
var DD = 24;
var HH = 10;
var MI = 10;
var SS = 10; 

function atualizaContador() 
{  
var hoje = new Date();  
var futuro = new Date(YY,MM-1,DD,HH,MI,SS);   
var ss = parseInt((futuro - hoje) / 1000);  
var mm = parseInt(ss / 60);  
var hh = parseInt(mm / 60);  
var dd = parseInt(hh / 24);   
ss = ss - (mm * 60);  
mm = mm - (hh * 60);  
hh = hh + (dd * 24);   
var faltam = '<h1 class="textorelogio">As Olimpíadas começam em </h1> <div class="relogio"><div class="numero">';
faltam += (toString(hh).length) ? hh+' horas,  ' : '';  
faltam += (toString(mm).length) ? mm+' min, ' : '';  
faltam += ss+' seg </div></div>';   

 if (hh+mm+ss > 0) 
 {
  document.getElementById('contador').innerHTML = faltam;	
  setTimeout(atualizaContador,1000);  
 }
 else
 {
  document.getElementById('contador').innerHTML = '<h1>Já começou!!!!</h1>';	
  setTimeout(atualizaContador,1000);  
 }
}

