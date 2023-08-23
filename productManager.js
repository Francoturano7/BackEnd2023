class ProductManager {
    constructor() {
        this.products = []
    }

    getProducts(){
     return   console.log(this.products)
    }
    addProduct(title, description,price,thumbnail,code,stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            return console.log("Todos los campos son obligatorios")
        }else{
            const codeExist=this.#validateCode(code)
            if (codeExist) {
                 console.log("El producto ya existe")
        }else{
        const product = {
            id:this.#createId(),
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        this.products.push(product)
        console.log("Producto agregado")
    }
}
    }

    getProductById(idProduct){
        const productFound= this.#validateId(idProduct)
        if(productFound){
            console.log(productFound)
        }else{
            console.log("Producto no encontrado")
        }
    }

    #createId(){
        let id=
        this.products.length===0
        ?1
        :this.products[this.products.length -1].id+1
        return id
    }

    #validateId(id){
        return this.products.find(product=> product.id===id)
    }

    #validateCode(code){
        return this.products.find(product=>product.code===code)
    }
}



const product = new ProductManager()
product.getProducts()
product.addProduct("Iphone 13", "Celular", 950, "./iphone", 101, 82)
product.getProducts()
product.addProduct("Ipad Mini", "Tablet", 1600, "./tablet", 102, 65)
product.getProducts()
product.addProduct("MacBook Pro", "PC", 2600, "./pc", 103, 47)
product.getProducts()
product.getProductById(1)
product.getProductById(38)



