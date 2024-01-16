const products= [
{
    id: 1,
    nameProduct: "Zapatillas Nike",
    price: 5000,
    img:'./src/assets/img/zapatillas-nike.png',
    quantity: 1,
    description: "Descripcion de Zapatillas Nike",
    category: "zapatillas",
    stock:20 
},
{
    id: 2,
    nameProduct: "Zapatillas Adidas",
    price: 5200,
    img:'./src/assets/img/championes-adidas-multix-gris.jpg',
    quantity: 1,
    description: "Descripcion de Zapatillas Adidas",
    category: "zapatillas",
    stock: 10
},
{
    id: 3,
    nameProduct: "Camiseta Liverpool",
    price: 4800,
    img:'./src/assets/img/camiseta-liverpool.jpg',
    quantity: 1,
    description: "Descripcion de Camiseta Liverpool",
    category: "camisetas",
    stock: 8
}
]

export const getProducts = ()=>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(products)
        }, 1000)
    })
}

export const getProductsByCategory = (category)=>{
    return new Promise((res, rej) => {
        setTimeout(()=>{
            res(products.filter (prod=> prod.category === category))
        }, 2000)
    })
}

export const getProductById = id => {
    return new Promise((res,rej)=>
    setTimeout(()=>
    res(products.find(prod =>prod.id.toString() === id))
    ), 1000)
}