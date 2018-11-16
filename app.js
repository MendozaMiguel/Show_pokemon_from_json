function getJson(){
  fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
    .then(res => res.json())
    .then(function(data){
      console.log(data);
      let id_pokemon = '';
      let name_pokemon = '';
      let type = '';
      let image = '';
      let faiblesse = '';
      const pokemon = data.pokemon
      pokemon.forEach(function(pokedex) {
        id_pokemon += `<div class=poke>${pokedex.id}</div><br>`;
        name_pokemon += `<div class=poke>${pokedex.name}</div><br>`;
        type += `<div class=poke>${pokedex.type}</div><br>`;
        image += `<img title=${pokedex.name} src="${pokedex.img}">`
        faiblesse += `<div class=poke>${pokedex.weaknesses}</div><br>`;
      });
      document.getElementById("id_pokemon").innerHTML = id_pokemon;
      document.getElementById("name_pokemon").innerHTML = name_pokemon;
      document.getElementById("type").innerHTML = type;
      document.getElementById("image").innerHTML = image;
      document.getElementById("faiblesse").innerHTML = faiblesse;
   })
    .catch(err =>  console.log(err))
}

getJson();