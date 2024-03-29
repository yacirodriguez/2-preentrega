export const products= [

{
    
    nameProduct: "Zapatillas Nike B&N",
    price: 5200,
    img:'./src/assets/img/nike-byn.png',
    description: "Descripcion de Zapatillas Adidas",
    category: "zapatillas",
    stock: 10
},
{
    
    nameProduct: "Lanús",
    price: 5200,
    img:'./src/assets/img/lanus.png',
    description: "Descripcion de Camiseta Lanús",
    category: "camisetas",
    stock: 10
}
]

export const getProducts = ()=>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(products)
        }, 500)
    })
}

export const getProductsByCategory = (category)=>{
    return new Promise((res, rej) => {
        setTimeout(()=>{
            res(products.filter (prod=> prod.category === category))
        }, 500)
    })
}

export const getProductById = id => {
    return new Promise((res,rej)=>
    setTimeout(()=>
    res(products.find(prod =>prod.id.toString() === id))
    ), 500)
}