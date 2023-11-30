let herois = [{
        nome: "Kartz",
        xp: 500,
        nivel: ""
    },
    {
        nome: "Michael",
        xp: 5000,
        nivel: ""
    },
    {
        nome: "Xec",
        xp: 67050,
        nivel: ""
    },
    {
        nome: "WLSK",
        xp: 2300,
        nivel: ""
    }
]

herois.forEach(heroi => {

    if (heroi.xp <= 1000) {
        heroi.nivel = "Ferro"
    } else if (heroi.xp > 1000 && heroi.xp <= 2000) {
        heroi.nivel = "Bronze"
    }  else if (heroi.xp > 2000 && heroi.xp <= 6000) {
        heroi.nivel = "Prata"
    }  else if (heroi.xp > 6000 && heroi.xp <= 7000) {
        heroi.nivel = "Ouro"
    }  else if (heroi.xp > 7000 && heroi.xp <= 8000) {
        heroi.nivel = "Platina"
    }  else if (heroi.xp > 8000 && heroi.xp <= 9000) {
        heroi.nivel = "Ascendente"
    }  else if (heroi.xp > 9000 && heroi.xp <= 10000) {
        heroi.nivel = "Imortal"
    }  else if (heroi.xp > 10000 ) {
        heroi.nivel = "Radiante"
    } 
        
});

herois.forEach(heroi => {
    console.log(`O Herói de nome ${heroi.nome} está no nível de ${heroi.nivel}`)
});

