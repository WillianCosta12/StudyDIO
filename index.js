let herois = [{
        nome: "Kartz",
        xp: 500,
        nivel: "",
        vitorias: 30,
        derrotas: 2,
    },
    {
        nome: "Michael",
        xp: 5000,
        nivel: "",
        vitorias: 90,
        derrotas: 10,
    },
    {
        nome: "Xec",
        xp: 67050,
        nivel: "",
        vitorias: 10,
        derrotas: 0,
    },
    {
        nome: "WLSK",
        xp: 2300,
        nivel: "",
        vitorias: 20,
        derrotas: 45,
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

function calculoRanked(heroi){
    let ranked = ""

    if (heroi.vitorias <= 10) {
        ranked = "Ferro"
    } else if (heroi.vitorias > 10 && heroi.vitorias <= 20) {
        ranked = "Bronze"
    } else if (heroi.vitorias > 20 && heroi.vitorias <= 50) {
        ranked = "Prata"
    } else if (heroi.vitorias > 50 && heroi.vitorias <= 80) {
        ranked = "Ouro"
    } else if (heroi.vitorias > 80 && heroi.vitorias <= 90) {
        ranked = "Diamante"
    } else if (heroi.vitorias > 90 && heroi.vitorias <= 100) {
        ranked = "Lendário"
    } else if (heroi.vitorias > 100) {
        ranked = "Imortal"
    }

    return ranked

}

herois.forEach(heroi => {
    console.log(`O Herói de nome ${heroi.nome} está no nível de ${heroi.nivel}`)

    let retorno = calculoRanked(heroi);

    console.log(`O Herói tem de saldo de ${heroi.vitorias - heroi.derrotas} está no nível de ${retorno}`)

});