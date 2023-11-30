class Hero{
    
    constructor(nome, age, type){
        this.nome = nome,
        this.age = age,
        this.type = type
    }

    atacar(){

        if (this.type === "mago") {
           console.log(`O ${this.type} atacou usando magia`) 
        } else if (this.type === "guerreiro") {
            console.log(`O ${this.type} atacou usando espada`) 
        } else if (this.type === "monge") {
            console.log(`O ${this.type} atacou usando artes marciais`) 
        }else if (this.type === "ninja") {
            console.log(`O ${this.type} atacou usando shuriken`) 
        }
    }
}

const heroi1 = new Hero("Marcelo", 20, "mago");
const heroi2 = new Hero("Carlinhos", 10, "guerreiro");
const heroi3 = new Hero("Marcos", 25, "monge");
const heroi4 = new Hero("MM", 14, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();