const apiURL = 'https://www.dnd5eapi.co';
let magicWeaponURL = ["/api/magic-items/vorpal-sword", "/api/magic-items/vicious-weapon", "/api/magic-items/trident-of-fish-command", "/api/magic-items/sword-of-wounding", "/api/magic-items/sword-of-sharpness", "/api/magic-items/sword-of-life-stealing", "/api/magic-items/sun-blade", "/api/magic-items/scimitar-of-speed", "/api/magic-items/oathbow", "/api/magic-items/nine-lives-stealer", "/api/magic-items/mace-of-terror", "/api/magic-items/mace-of-smiting", "/api/magic-items/mace-of-disruption", "/api/magic-items/luck-blade", "/api/magic-items/javelin-of-lightning", "/api/magic-items/holy-avenger", "/api/magic-items/hammer-of-thunderbolts", "/api/magic-items/giant-slayer", "/api/magic-items/frost-brand", "/api/magic-items/flame-tongue", "/api/magic-items/dwarven-thrower", "/api/magic-items/dragon-slayer", "/api/magic-items/defender", "/api/magic-items/dancing-sword", "/api/magic-items/dagger-of-venom", "/api/magic-items/berserker-axe"];

let regularWeaponURL = ["/api/equipment/net", "/api/equipment/longbow", "/api/equipment/crossbow-heavy", "/api/equipment/crossbow-hand", "/api/equipment/blowgun", "/api/equipment/whip", "/api/equipment/warhammer", "/api/equipment/war-pick", "/api/equipment/trident", "/api/equipment/shortsword", "/api/equipment/scimitar", "/api/equipment/rapier", "/api/equipment/pike", "/api/equipment/morningstar", "/api/equipment/maul", "/api/equipment/longsword", "/api/equipment/lance", "/api/equipment/halberd", "/api/equipment/greatsword", "/api/equipment/greataxe", "/api/equipment/glaive", "/api/equipment/flail", "/api/equipment/battleaxe", "/api/equipment/sling", "/api/equipment/shortbow", "/api/equipment/dart", "/api/equipment/crossbow-light", "/api/equipment/spear", "/api/equipment/sickle", "/api/equipment/quarterstaff", "/api/equipment/mace", "/api/equipment/light-hammer", "/api/equipment/javelin", "/api/equipment/handaxe", "/api/equipment/greatclub", "/api/equipment/dagger", "/api/equipment/club"];

let weaponInfo = document.querySelector('.putHere');
const isMagic = document.querySelector('#magicOption');
const outputBox = document.querySelector('section');
// const anotherBtn = document.querySelector('#anotherButton');
let submitBtn = document.querySelector('form');
let dataBox = document.querySelector('.info')
dataBox.style.display = ('none')

submitBtn.addEventListener('submit', returnWeapon);
// anotherBtn.addEventListener('click', returnWeapon)

//fetch data from url depending on magic or no
function returnWeapon(e) {
    console.log(isMagic.value);
    e.preventDefault();
    if (isMagic.value == 1) {
        let randomMagicWeapon = magicWeaponURL[Math.floor(Math.random() * magicWeaponURL.length)]
        console.log(randomMagicWeapon);
        fetch(`${apiURL}${randomMagicWeapon}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                displayMagicResults(json);
            })
    } else {

        let randomRegWeapon = regularWeaponURL[Math.floor(Math.random() * regularWeaponURL.length)]
        console.log(randomRegWeapon);
        fetch(`${apiURL}${randomRegWeapon}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                displayRegResults(json);
            })
    }
}

//display magic weapon details
function displayMagicResults(json) {
    dataBox.style.display = ('block')
    while (weaponInfo.firstChild) {
        weaponInfo.removeChild(weaponInfo.firstChild);
    }
    let weaponName = document.createElement('li');
    weaponName.innerHTML = '<p>' + '<b>' + 'Name: ' + '</b>' + json.name + '</p>';
    weaponInfo.appendChild(weaponName);
    
    let weaponType = document.createElement('li');
    weaponType.innerHTML = '<p>' + '<b>' + 'Type: ' + '</b>' + json.desc[0] + '</p>';
    weaponInfo.appendChild(weaponType);
    
    for (i = 1; i < json.desc.length; i++) {
        
        let weaponDesc = document.createElement('li');
        weaponDesc.innerHTML = '<p>' + '<b>' + 'Feature: ' + '</b>' + json.desc[i] + '</p>';
        weaponInfo.appendChild(weaponDesc);
    }
    
}

//display regular weapon results
function displayRegResults(json) {
    dataBox.style.display = ('block')
    while (weaponInfo.firstChild) {
        weaponInfo.removeChild(weaponInfo.firstChild);
    }
    let weaponName = document.createElement('li');
    weaponName.innerHTML = '<p>' + '<b>' + 'Name: ' +  '</b>' + json.name + '</p>';
    weaponInfo.appendChild(weaponName);

    let weaponCatRan = document.createElement('li');
    weaponCatRan.innerHTML = '<p>' + '<b>' + 'Type: ' + '</b>' + json.category_range + '</p>';
    weaponInfo.appendChild(weaponCatRan);

    let weaponRange = document.createElement('li');
    weaponRange.innerHTML = '<p>' + '<b>' + 'Range: ' +  '</b>' + json.range.normal + '</p>';
    weaponInfo.appendChild(weaponRange);

    if(json.range.long){
        let weaponLongRange = document.createElement('li');
    weaponLongRange.innerHTML = '<p>' + '<b>' + 'Long Range: ' + '</b>'+ json.range.long + '</p>';
    weaponInfo.appendChild(weaponLongRange)
    };

    if (json.throw_range) {
        let weaponThrownRange = document.createElement('li');
        weaponThrownRange.innerHTML = '<p>' + '<b>' + 'Thrown Range: ' + '</b>'  + json.throw_range.normal + '</p>';
        weaponInfo.appendChild(weaponThrownRange);
    };
    
    if (json.throw_range) {
        let weaponThrownRangeLong = document.createElement('li');
        weaponThrownRangeLong.innerHTML = '<p>' + '<b>' + 'Long Throw Range: ' + '</b>' + json.throw_range.long + '</p>';
        weaponInfo.appendChild(weaponThrownRangeLong);
    };

    let weaponCost = document.createElement('li');
    weaponCost.innerHTML = '<p>' + '<b>' + 'Cost: ' + '</b>' + json.cost.quantity + json.cost.unit + '</p>';
    weaponInfo.appendChild(weaponCost);

    if (json.damage) {
        let weaponDam = document.createElement('li');
        weaponDam.innerHTML = '<p>' + '<b>' + 'Damage: ' + '</b>' + json.damage.damage_dice + ' ' + json.damage.damage_type.name + '</p>'; weaponInfo.appendChild(weaponDam);
    } else {
        let weaponSpecial = document.createElement('li');
        weaponSpecial.innerHTML = '<p>' + '<b>' + 'Feature: ' + '</b>' + json.special + '</p>';
        weaponInfo.appendChild(weaponSpecial);
    };

    let weaponWeight = document.createElement('li');
    weaponWeight.innerHTML = '<p>' + '<b>' + 'Weight: ' + '</b>' + json.weight + '</p>';
    weaponInfo.appendChild(weaponWeight);


}

