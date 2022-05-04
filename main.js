function exo1() {
    let x = prompt("jour de semaine")

    switch (x) {
        case "lundi":
            console.log("on est lundi")
            break
        case "mardi":
            console.log("on est mardi")
            break
        case "mercredi":
            console.log("on est mercredi")
            break
        case "jeudi":
            console.log("on est jeudi")
            break
        case "vendredi":
            console.log("on est vendredi")
            break
        case "samedi":
            console.log("on est samedi")
            break
        case "dimanche":
            console.log("on est dimanche")
            break
        default:
            console.log("ce n'est pas un jour de la semaine")
            break
    }
}
function exo2(){
    let x = "moche"

    switch(x){
        case "beau":
            console.log("il fait beau")
            break
        case "moche":
            console.log("il fait moche")    
            break
        default:
            console.log("ce n'est pas un temps")
            break
    }
}
function exo3(){
    let x = Math.abs(prompt("nbr"))
    let rep = x % 2
    switch(rep){
        case 0:
            console.log("divisible")
            break
        default:
            console.log("non divisible par 2")
            break
    }
}
function exo4(){
    let x = Math.abs(prompt("nbr1"))
    let y = Math.abs(prompt("nbr2"))
    let op = prompt("operateur")
    switch(op){
        case "+":
            console.log(x + y)
            break
        case "-":
            console.log(x - y)
            break
        case "*":
            console.log(x * y)
            break
        case "/":
            console.log(x / y)
            break
        default:
            console.log("rien")
            break
    }
}