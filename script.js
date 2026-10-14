let num1 = Number(prompt("ingresa el primer numero:"));
let num2 = Number(prompt("ingresa el segundo numero:"));
let num3 = Number(prompt("ingresa el tercer numero:"));

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("error, debes poner numeros");
} else {
    let mayor, centro, menor;

    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
        if (num2 >= num3) {
            centro = num2;
            menor = num3;
        } else {
            centro = num3;
            menor = num2;
        }
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
        if (num1 >= num3) {
            centro = num1;
            menor = num3;
        } else {
            centro = num3;
            menor = num1;
        }
    } else {
        mayor = num3;
        if (num1 >= num2) {
            centro = num1;
            menor = num2;
        } else {
            centro = num2;
            menor = num1;
        }
    }
    if (num1 === num2 && num2 === num3) {
        console.log("los tres numeros son iguales: " + num1);
    } else {
        console.log("de mayor a menor: " + mayor + ", " + centro + ", " + menor);
        console.log("de menor a mayor: " + menor + ", " + centro + ", " + mayor);
    }
}