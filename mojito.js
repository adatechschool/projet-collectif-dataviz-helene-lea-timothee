document.addEventListener("DOMContentLoaded", function () { //quand on charge les éléments du DOM alors ça fait ça
    const apiURL = "http://thecocktaildb.com/api/json/v1/1/search.php?s=mojito" //à réutiliser en changeant le nom du cocktail
    fetch(apiURL).then(rep => rep.json()).then(data => {

        const name = document.querySelector("#name")
        const ingredients = document.querySelector("#Ingrédients")
        const instructions = document.querySelector("#Instructions")

        const mojitoObj = data.drinks[0]

        for (let key in mojitoObj) {
            if (mojitoObj.hasOwnProperty(key)) {
                if (key.includes('strIngredient') && mojitoObj[key] !== null)
                    ingredients.innerHTML += `<li> ${mojitoObj[key]} </li>`

                if (key.includes('strDrink'))
                    name.innerHTML = `${mojitoObj.strDrink}`

                if (key.includes(''))
                    instructions.innerHTML += ``
            }
        };
    });
});