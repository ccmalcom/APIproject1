const apiURL = 'https://www.dnd5eapi.co/api/equipment-categories/weapon';
// let url;

//constraints
// const searchTerm1 = document.querySelector('.search');
// const searchForm = document.querySelector('form');
// const submitBtn = document.querySelector('.submitButton');

//results
// const section = document.querySelector('section');
// submitBtn = document.getElementsByClassName('.submitButton')
// submitBtn.onClick(fetchResult())



let weaponList = document.querySelector('ul');
// function fetchResult(){
 // e.preventDefault();
    fetch(apiURL)
    .then(function(response){
        return response.json();
    }).then(function(json){
        let weapons = json.response.index;

        for (p of weapons){
            let listItem = document.createElement('li');
            listItem.innerHTML = '<p>' + p.name + '</p>';
            weaponList.appendChild(listItem)
        }
    })

