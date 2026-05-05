async function fetchData(){

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        const pokemonCry = data.cries.latest;
        const audioElement = document.getElementById("pokemonCry");
        const pokemonHeight = (data.height / 3.048).toFixed(2);
        const pokemonWeight = (data.weight / 4.5359237).toFixed(2);

        document.getElementById("pokemonHeight").innerText = pokemonHeight + " Feet";
        document.getElementById("pokemonWeight").innerText = pokemonWeight +" Pounds";

        audioElement.src = pokemonCry;
        audioElement.style.display ="block";
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
}