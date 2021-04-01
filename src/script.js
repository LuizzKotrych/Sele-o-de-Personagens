var escolhaSeuPersonagem = prompt("Digite 1 para escolher Amazon, 2 para escolher Assassin, 3 para escolher Necromancer, 4 para escolher Barbarian, 5 para escolher Druid, 6 para escolher Sorceress e 7 para escolher Paladin")

if (escolhaSeuPersonagem == 1) {
   document.write("<h2>" + "As filhas selvagens de Skartara são treinadas no uso de arcos e javelinas." + "</h2>")
   document.write('<img src="https://blizzard.gamespress.com/cdn/propressroom/Content/Artwork/Eva/BlizzardLive/artwork/2021/02/19233007-5b03b3ac-ac9c-492b-8d1f-de8db2502286/D2R_Amazon.png?w=1024&maxheight=4096&mode=pad&format=png">')
} else if (escolhaSeuPersonagem == 2) {
    document.write("<h2>" + "Escolha sua tática: Armadilhas, combate próximo ou armas de lançamento." + "</h2>")
   document.write('<img src="https://blizzard.gamespress.com/cdn/propressroom/Content/Artwork/Eva/BlizzardLive/artwork/2021/02/19233007-5b03b3ac-ac9c-492b-8d1f-de8db2502286/D2R_Assassin.png?w=1024&maxheight=4096&mode=pad&format=png">')
} else if (escolhaSeuPersonagem == 3) {
   document.write("<h2>" + "Invocador das trevas, cavaleiro negro. Os discípulos de Trang-Oul se erguem." + "</h2>")
   document.write('<img src="https://blizzard.gamespress.com/cdn/propressroom/Content/Artwork/Eva/BlizzardLive/artwork/2021/02/19233007-5b03b3ac-ac9c-492b-8d1f-de8db2502286/D2R_Necromancer.png?w=1024&maxheight=4096&mode=pad&format=png">')
} else if (escolhaSeuPersonagem == 4) {
    document.write("<h2>" + "Os filhos de Arreat são poderosos em combate corpo-a-corpo." + "</h2>")
   document.write('<img src="https://blizzard.gamespress.com/cdn/propressroom/Content/Artwork/Eva/BlizzardLive/artwork/2021/02/19233007-5b03b3ac-ac9c-492b-8d1f-de8db2502286/D2R_Barbarian.png?w=1024&maxheight=4096&mode=pad&format=png">')
} else if (escolhaSeuPersonagem == 5) {
   document.write("<h2>" + "Um caçador expert em arco e flecha, mas também um shamã ou um poderoso metamorfo." + "</h2>")
   document.write('<img src="https://blizzard.gamespress.com/cdn/propressroom/Content/Artwork/Eva/BlizzardLive/artwork/2021/02/19233007-5b03b3ac-ac9c-492b-8d1f-de8db2502286/D2R_Druid.png?w=1024&maxheight=4096&mode=pad&format=png">') 
} else if (escolhaSeuPersonagem == 6) {
    document.write("<h2>" + "Poderosas usuárias de magia, elas podem controlar todos os elementos." + "</h2>")
   document.write('<img src="https://blizzard.gamespress.com/cdn/propressroom/Content/Artwork/Eva/BlizzardLive/artwork/2021/02/19233007-5b03b3ac-ac9c-492b-8d1f-de8db2502286/D2R_Sorceress.png?w=1024&maxheight=4096&mode=pad&format=png">')
} else if (escolhaSeuPersonagem == 7) {
   document.write("<h2>" + "Um seguidor fervente do paraíso celestial." + "</h2>")
   document.write('<img src="https://blizzard.gamespress.com/cdn/propressroom/Content/Artwork/Eva/BlizzardLive/artwork/2021/02/19233007-5b03b3ac-ac9c-492b-8d1f-de8db2502286/D2R_Paladin.png?w=1024&maxheight=4096&mode=pad&format=png">')
}else {
  document.write ("<h2>" + "Nenhuma classe selecionada. Volte ao menu principal!" + "</h2>")
  document.write ('<img src="https://i.imgur.com/YLLJ458.png">')
}