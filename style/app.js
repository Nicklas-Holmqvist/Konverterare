document.getElementById('item-1').style.display = 'flex';
document.getElementById('item-2').style.display = 'none';
document.getElementById('item-3').style.display = 'none';
document.getElementById('item-4').style.display = 'none';

function blue() {
    document.getElementById('item-1').style.display = 'flex';
    document.getElementById('item-2').style.display = 'none';
    document.getElementById('item-3').style.display = 'none';
    document.getElementById('item-4').style.display = 'none';
}

function green() {
    document.getElementById('item-1').style.display = 'none';
    document.getElementById('item-2').style.display = 'flex';
    document.getElementById('item-3').style.display = 'none';
    document.getElementById('item-4').style.display = 'none';
}

function yellow() {
    document.getElementById('item-1').style.display = 'none';
    document.getElementById('item-2').style.display = 'none';
    document.getElementById('item-3').style.display = 'flex';
    document.getElementById('item-4').style.display = 'none';
}

function pink() {
    document.getElementById('item-1').style.display = 'none';
    document.getElementById('item-2').style.display = 'none';
    document.getElementById('item-3').style.display = 'none';
    document.getElementById('item-4').style.display = 'flex';
}


function kvadrat() {
    const omkrets = (Number(document.getElementById('item1-nr1').value) * 2) + (Number(document.getElementById('item1-nr2').value) * 2)
    console.log(omkrets);
    
    const area = Number(document.getElementById('item1-nr1').value) * Number(document.getElementById('item1-nr2').value);
    console.log(area);

    const sumOmkrets = document.getElementById('item1-1').innerText = omkrets;
    const sumArea = document.getElementById('item1-2').innerText = area;

    const resetNr1 = document.getElementById('item1-nr1').value = '';
    const resetNr2 = document.getElementById('item1-nr2').value = '';
}

function rektangel() {
    const omkrets = (Number(document.getElementById('item2-nr1').value) * 2) + (Number(document.getElementById('item2-nr2').value) * 2)
    console.log(omkrets);
    
    const area = Number(document.getElementById('item2-nr1').value) * Number(document.getElementById('item2-nr2').value);
    console.log(area);

    const sumOmkrets = document.getElementById('item2-1').innerText = omkrets;
    const sumArea = document.getElementById('item2-2').innerText = area;

    const resetNr1 = document.getElementById('item2-nr1').value = '';
    const resetNr2 = document.getElementById('item2-nr2').value = '';
}

function triangel() {
    const omkretsPre = ((Number(document.getElementById('item3-nr1').value) * 2) + (Number(document.getElementById('item3-nr2').value) * 2));
    const roten = Math.round((Math.sqrt(omkretsPre)) * 10) /10;
    console.log(roten);

    const omkrets = Number(document.getElementById('item3-nr1').value) + Number(document.getElementById('item3-nr2').value) + roten;
    console.log(omkrets);
    
    const area = Number(document.getElementById('item3-nr1').value) * Number(document.getElementById('item3-nr2').value);
    console.log(area);

    

    const sumOmkrets = document.getElementById('item3-1').innerText = omkrets;
    const sumArea = document.getElementById('item3-2').innerText = area;

    const resetNr1 = document.getElementById('item3-nr1').value = '';
    const resetNr2 = document.getElementById('item3-nr2').value = '';
}

function cirkel() {
    const omkrets = (Number(document.getElementById('item4-nr1').value) / 2) * (Math.PI);
    console.log(omkrets);
    
    const area = Number(document.getElementById('item4-nr1').value)  * (Math.PI);
    console.log(area);

    const sumOmkrets = document.getElementById('item4-1').innerText = Math.round(Number(omkrets) *10) /10;
    const sumArea = document.getElementById('item4-2').innerText = Math.round(Number(area) * 10) /10;

    const resetNr1 = document.getElementById('item4-nr1').value = '';
    const resetNr2 = document.getElementById('item4-nr2').value = '';
}

