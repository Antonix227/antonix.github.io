let woman = document.querySelector('#woman');
let man = document.querySelector('#man'); 
let Kobieta = document.querySelector('#kobieta');
let mezczyzna = document.querySelector('#mezczyzna'); 
let wybor = document.querySelector('#wybor')

woman.onmousemove = () => changeBackground('#ffc0cb');
man.onmousemove = () => changeBackground('#578cb5');

woman.onclick = () => generateWishes(zyczeniaK);
man.onclick = () => generateWishes(zyczeniaM);

kobieta.onclick = () => changeWishes(zyczeniaK,'#ffc0cb');
mezczyzna.onclick = () => changeWishes(zyczeniaM,'#578cb5');


function changeBackground($color){
    wybor.style.backgroundColor = $color;
    document.body.style.backgroundColor = $color;
}

function generateWishes($zyczenia){
    let miejsce = document.querySelector("#zyczenia");
    miejsce.innerHTML = $zyczenia;
    wybor.remove()
}

function changeWishes($zyczenia, $color){
    let miejsce = document.querySelector("#zyczenia");
    miejsce.innerHTML = $zyczenia;
    document.body.style.backgroundColor = $color;

}






let zyczeniaM ="<h1>Życzenia z okazji dnia mężczyzn</h1><br>\
<p>Abyś był pomocny jak komputer<br>\
Szybki jak japoński skuter<br>\
sympatyczny jak maskotka<br>\
i słodki jak szarlotka</p>";


let zyczeniaK="<h1>Życzenia z okazji dnia kobiet</h1><br>\
<p>Z okazji Dnia Kobiet,<br>\
życzę Ci dużo zdrowia w szczególności.<br>\
Niech uśmiech na twojej twarzy zawsze gości,<br>\
a życie nie sprawia trudności i przykrości.<br>\
Niech wiatr pieśń niesie Ci radosną,<br>\
abyś zawsze czuła się jak wiosna.<br>\
Wśród kwiatów i śpiewających ptaków,<br>\
aby motyle na dłoni Ci siadały.</p>";
