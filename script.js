
imekorisnika=document.getElementById('ime')

sifrakorisnika=document.getElementById('sifra')

cekiran=document.getElementsByName('')

var ispravnasifra=/^[A-Za-z]\w{7,15}$/

zabsifra=document.getElementById('zabsif')

zabsifra.addEventListener('click', otvoridialog)



function prikaziVreme() {
    var danas=new Date()
var h=danas.getHours()
var m=danas.getMinutes()
var s=danas.getSeconds()

m=proveriVreme(m)
s= proveriVreme (s)
document.getElementById('vreme').innerHTML=h+":"+m+":"+s
setTimeout('prikaziVreme()',500)
}

function proveriVreme (i)
{
if (i<10) 
  {i="0" + i}
  return i
}

function validacija(){
  if (imekorisnika.value.length<6) {
      alert('Ime ima manje od 6 karaktera')
      
      imekorisnika.focus()
      imekorisnika.value=""
      return false;
      
      
  }

  if (!(sifrakorisnika.value.match(ispravnasifra))){
    alert('Uneta sifra treba da ima izmedju 8 i 16 karaktera i treba da pocne sa slovom')
    sifrakorisnika.focus()
    sifrakorisnika.value=""
    return false
  }


}

formasifre="<label>Unesi novu sifru </label><br>\
              <input type=\"password\" placeholder=\"Unesite sifru\"><br>\
              <label>Ponovite unos</label><br>\
              <input type=\"password\" placeholder=\"Unesite istu sifru\"><br>"
  



function otvoridialog(){
  mojProzor=window.open("", "mojProzor","width=500,height=400, top=100,left=500,");
  mojProzor.document.write(formasifre)
}






