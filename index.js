let name = "kauan";
let xp= 7500 
     
let = nivel

if (xp < 10000 ){
    nivel = "'ferro";
} else if  (xp <=1001 && xp <=2000) {
    nivel = "bronze";
} else if  (xp <=2001 && xp <=5000){
    nivel ="prata";
} else if(xp <=6001 && xp <= 7000){
    nivel =" ouro"
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radia";
  }
  
  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
