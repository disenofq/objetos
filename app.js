class Productos{
    constructor(nombre, categoria, stock, cantidadComprada){
        this.nombre = nombre;
        this.categoria = categoria;
        this.stock = stock;
        this.cantidad = cantidadComprada;
    }

controlStock(){

    if(this.cantidad > this.stock){

       alert("Lo sentimos, no hay stock") 
    }
    else if(this.cantidad < this.stock && this.cantidad > 0) {
        this.stock = this.stock - this.cantidad
        alert("La cantidad ingresada es: " + this.cantidad + " El stock actualizado es de: " + this.stock);

    }
    else{
        alert("Por favor verifique la cantidad ingresada")
    }
}


}

let compraUsuario = Number(prompt("Ingrese la cantidad a comprar"));
const objeto1 = new Productos ("indumentaria", "zapatillas", 100, compraUsuario);

objeto1.controlStock()