//Objetos - Clases
//cuando a la variable la seguimos de llave creamos un objeto {}

class Productos{
    constructor(nombre, categoria, stock, cantidadComprada){
        this.nombre = nombre;
        this.categoria = categoria;
        this.stock = stock;
        this.cantidad = cantidadComprada;
    }
//El método se crea igual que una función, pero sin la palabra function y va dentro de la clase, pero fuera del constructor
controlStock(){

    if(this.cantidad > this.stock){

       alert("No tenemos suficiente stock de este producto") 
    }
    else if(this.cantidad < this.stock && this.cantidad > 0) {
        this.stock = this.stock - this.cantidad
        alert("La cantidad ingresada es: " + this.cantidad + " El stock actualizado es de: " + this.stock);

    }
    else{
        alert("Usted ingresó una cantidad negativa , eso es incorrecto")
    }
}


}
//Genenrar un objeto con datos que yo le pase, trabajar con ese objeto mediante métodos. 
let compraUsuario = Number(prompt("Ingrese la cantidad a comprar"));
const objeto1 = new Productos ("fideos", "pastas", 50, compraUsuario);

objeto1.controlStock()