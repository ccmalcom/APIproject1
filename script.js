const apiURL = 'https://www.dnd5eapi.co';
let magicWeaponURL =  ["/api/magic-items/vorpal-sword", "/api/magic-items/vicious-weapon", "/api/magic-items/trident-of-fish-command", "/api/magic-items/sword-of-wounding", "/api/magic-items/sword-of-sharpness", "/api/magic-items/sword-of-life-stealing", "/api/magic-items/sun-blade", "/api/magic-items/scimitar-of-speed", "/api/magic-items/oathbow", "/api/magic-items/nine-lives-stealer", "/api/magic-items/mace-of-terror", "/api/magic-items/mace-of-smiting", "/api/magic-items/mace-of-disruption", "/api/magic-items/luck-blade", "/api/magic-items/javelin-of-lightning", "/api/magic-items/holy-avenger", "/api/magic-items/hammer-of-thunderbolts", "/api/magic-items/giant-slayer", "/api/magic-items/frost-brand", "/api/magic-items/flame-tongue", "/api/magic-items/dwarven-thrower", "/api/magic-items/dragon-slayer", "/api/magic-items/defender", "/api/magic-items/dancing-sword", "/api/magic-items/dagger-of-venom", "/api/magic-items/berserker-axe"];

let regularWeaponURL =["/api/equipment/net", "/api/equipment/longbow", "/api/equipment/crossbow-heavy", "/api/equipment/crossbow-hand", "/api/equipment/blowgun", "/api/equipment/whip", "/api/equipment/warhammer", "/api/equipment/war-pick", "/api/equipment/trident", "/api/equipment/shortsword", "/api/equipment/scimitar", "/api/equipment/rapier", "/api/equipment/pike", "/api/equipment/morningstar", "/api/equipment/maul", "/api/equipment/longsword", "/api/equipment/lance", "/api/equipment/halberd", "/api/equipment/greatsword", "/api/equipment/greataxe", "/api/equipment/glaive", "/api/equipment/flail", "/api/equipment/battleaxe", "/api/equipment/sling", "/api/equipment/shortbow", "/api/equipment/dart", "/api/equipment/crossbow-light", "/api/equipment/spear", "/api/equipment/sickle", "/api/equipment/quarterstaff", "/api/equipment/mace", "/api/equipment/light-hammer", "/api/equipment/javelin", "/api/equipment/handaxe", "/api/equipment/greatclub", "/api/equipment/dagger", "/api/equipment/club"];

let weaponInfo = document.querySelector('.putHere')
const isMagic = document.querySelector('#magicOption')

let randomMagicWeapon = magicWeaponURL[Math.floor(Math.random()*magicWeaponURL.length)]
console.log(randomMagicWeapon);

let randomRegWeapon = regularWeaponURL[Math.floor(Math.random()*regularWeaponURL.length)]
console.log(randomRegWeapon);

//constraints
let submitBtn = document.querySelector('form');
submitBtn.addEventListener('submit', returnWeapon);


function returnWeapon(e){
    e.preventDefault();
    if(isMagic.selectedValue = 1){
        fetch(`${apiURL}${randomMagicWeapon}`)
            .then(function(response){
                return response.json(); 
            })
            .then(function(json){
                displayMagicResults(json);
            })
        } else if(isMagic.selectedValue = 2) { 
            //! this should fire the below code when selected, instead it always fires displayMagicResults
            fetch(`${apiURL}${randomRegWeapon}`)
            .then(function(response){
                return response.json();
            })
            .then(function(json){
                displayRegResults(json);
            })
        }
}

function displayMagicResults(json){
    while(weaponInfo.firstChild){
        weaponInfo.removeChild(weaponInfo.firstChild);
    }
    let weaponName = document.createElement('li');
    weaponName.innerHTML = '<p>'+ 'Name: ' + json.name + '</p>';
    weaponInfo.appendChild(weaponName);

    let weaponType = document.createElement('li');
    weaponType.innerHTML = '<p>'+ 'Type: ' + json.desc[0] + '</p>';
    weaponInfo.appendChild(weaponType);

    for(i=1; i<json.desc.length; i++){

    let weaponDesc = document.createElement('li');
    weaponDesc.innerHTML = '<p>'+ 'Feature: ' + json.desc[i] + '</p>';
    weaponInfo.appendChild(weaponDesc);
    }

}

function displayRegResults(json){
    let weaponName = document.createElement('li');
    weaponName.innerHTML = '<p>'+ 'Name: ' + json.name + '</p>';
    weaponInfo.appendChild(weaponName);

    let weaponCatRan = document.createElement('li');
    weaponCatRan.innerHTML = '<p>'+ 'Type: ' + json.category_range + '</p>';
    weaponInfo.appendChild(weaponCatRan);

    let weaponCost = document.createElement('li');
    weaponCost.innerHTML = '<p>'+ 'Cost: ' + json.cost.quantity + json.cost.unit + '</p>';
    weaponInfo.appendChild(weaponCost);
    
    let weaponDam = document.createElement('li');
    weaponDam.innerHTML = '<p>'+ 'Damage: ' + json.damage.damage_dice + ' ' + json.damage.damage_type.name + '</p>';        weaponInfo.appendChild(weaponDam);
    
    let weaponWeight = document.createElement('li');
    weaponWeight.innerHTML = '<p>'+ 'Weight: ' + json.damage.weight + '</p>';
    weaponInfo.appendChild(weaponWeight);
    
    
}

// function returnWeapon(){
    // fetch(apiURL + '/api/equipment-categories/weapon')
    // .then(function(response){
    //     return response.json();
    // })
    // .then(function(json){
    //     weaponInfo = json.equipment[1].url
    //     console.log(weaponInfo);
    // })
    
    // fetch(apiURL + weaponInfo)
    // .then(function(response){
    //     return response.json();
    // })
    // .then(function(json){
    //     console.log(json);
    // })


// }

//results
// const section = document.querySelector('section');
// submitBtn = document.getElementsByClassName('.submitButton')
// submitBtn.onClick(fetchResult())



// let weaponList = document.querySelector('ul');
// // function fetchResult(){
//  // e.preventDefault();
//     fetch(apiURL)
//     .then(function(response){
//         return response.json();
//     }).then(function(json){
//         let weapons = json.response.index;

//         for (p of weapons){
//             let listItem = document.createElement('li');
//             listItem.innerHTML = '<p>' + p.name + '</p>';
//             weaponList.appendChild(listItem)
//         }
//     })

