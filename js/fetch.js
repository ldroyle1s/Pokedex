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

        //the six stats
        const pokemonHp = data.stats[0].base_stat;
        const pokemonAtk =  data.stats[1].base_stat;
        const pokemonDef =  data.stats[2].base_stat;
        const pokemonSpAtk = data.stats[3].base_stat;
        const pokemonSpDef = data.stats[4].base_stat;
        const pokemonSpeed = data.stats[5].base_stat;

        const HpElement = document.getElementById("pokemonHp");
        const AtkElement = document.getElementById("pokemonAtk");
        const DefElement = document.getElementById("pokemonDef");
        const SpAtkElement = document.getElementById("pokemonSpAtk");
        const SpDefElement = document.getElementById("pokemonSpDef");
        const SpeedElement = document.getElementById("pokemonSpeed");
        
        document.getElementById("pokemonHp").innerHTML = "Hp <br />" + pokemonHp;
        document.getElementById("pokemonAtk").innerHTML = "Atk <br />" + pokemonAtk;
        document.getElementById("pokemonDef").innerHTML = "Def <br />" + pokemonDef;
        document.getElementById("pokemonSpAtk").innerHTML = "Sp Atk <br />" + pokemonSpAtk;
        document.getElementById("pokemonSpDef").innerHTML = "Sp Def <br />" + pokemonSpDef;
        document.getElementById("pokemonSpeed").innerHTML = "Speed <br />" + pokemonSpeed;

        //Height and Width
        document.getElementById("pokemonHeight").innerText = pokemonHeight + " Feet";
        document.getElementById("pokemonWeight").innerText = pokemonWeight +" Pounds";

        //Image and audio
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