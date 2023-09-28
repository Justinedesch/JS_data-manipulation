console.log(`${cities.length} communes chargées`);


// Exercice 2.1 => filter

//Variable result sur laquelle est appliquée la fonction .filter()
//Fonction de recherche qui renvoie tous les éléments qui remplissent la condition assignée
// ->  resultat renvoyé sous forme d'un nouveau tableau d'elements
// -> Cette fonction ne prends qu'un seul paramètre


const result = cities.filter((city) => city.population > 300000);

console.log(result);

//
// //Variable ResultDeux sur laquelle est appliquée la fonction .foreach()
// // Boucle qui parcours les elements d'un tableau et stock les éléments correspondant au paramètre définit
//
const  resultDeux = cities.forEach((city) => city.population > 300000);
console.log(resultDeux);

//
// // Classement des resultats par ordre decroissant
var sorted = result.sort((a, b) => {
    return b.population - a.population;
});

console.log(sorted);

for (obj of sorted) {
    console.log(`${obj.nom} (${obj.population})`)
}


// ----------------------------------------------------------------------------------------

// Exercice 2.2


//On crée une fonction getcitybydept, ainsi qu'un tableau vide "filtered_data" dans lequel seront stockés les résutats.


function getCitiesByDept(cd) {
    let filtered_data = [];


    //Boucle foreach pour parcourir notre tableau de villes
    // La fonction .push transferea les resutats correspondants à notre paramètre prédéfini dans notre  tableau vide

    cities.forEach( city => {
        if (city.codeDepartement == cd) {
            filtered_data.push(city);
        }
    });
    return filtered_data;



    // for (const city of cities) {
    //     if (city.codeDepartement == cd) {
    //         filtered_data.push(city);
    //     }
    // }

    //On filtre notre resultat
    // filtered_data = (cities.filter(city => city.codeDepartement === cd))
    // return filtered_data;

}

console.log(cities)
console.log(getCitiesByDept("74"))


// -----------------------------------------------------------------------------------------------------------


// //exercice 2.3


// Fonction displayCity qui affiche les departements et noms des villes.

function displayCity(city) {
    console.log(`${city.codeDepartement} (${city.nom})`)
}


let filtered_cities = getCitiesByDept("74");
filtered_cities.forEach( city => displayCity(city));






//variable avec fonction.map
// La fonction .map() permet de modifier le contenu des éléments d'un tableau
// -> Elle affichera les valeurs modifiées dans un nouveua tableau.

// let result = filtered_cities.map( city => displayCity(city) );
// console.log(result);

// -> le . map fonctionnerait si on modifiair la function displayCity, en y ajoutant un return. Elle a besoin d'une valeur de retour.




//
// var cities74 = getCitiesByDept("74").map((value) => {
//     return value.nom
// });
//
//
// console.log(cities74);



//---------------------------------------------------

// Illustration de la fonction Array.find()
// Fonction qui permet de rechercher un élément unique dans un tableau
function getCityByName(cityName) {


    var result = cities.find((city) => {
        return cityName === city.nom
    })

    return result;

}

console.log(getCityByName('Annecy'))



























//
//     //Exercice 3 => foreach
//
//     function countPopByDept(departement) {
//
//         var tableau = getCitiesByDept(departement);
//         var habitantTotal = 0
//         tableau.forEach(obj => {
//             habitantTotal = habitantTotal + obj.population
//         })
//         return habitantTotal;
//     }
//
//     console.log(countPopByDept(42));
