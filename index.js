
let nome = prompt("Qual o nome do seu herói? \n")
let xp = prompt("Quanto de XP ele tem? (informe em número) \n" );

elo = "";

if(xp < 0){
    console.log("Xp invalido");
}else if (xp <= 1000) {
    elo = "Ferro";
} else if ( xp <= 2000) {
    elo = "Bronze";
} else if (xp <= 5000) {
    elo = "Prata";
} else if (xp <=7000) {
    elo = "Ouro";
} else if (xp <= 8000) {
    elo = "Platina";
} else if (xp <=9000) {
    elo = "Ascendente";
} else if (xp <= 10000) {
    elo = "Imortal";
} else {
    elo = "Radiante";
}

console.log("O Herói " + nome + " está no nível de " + elo);