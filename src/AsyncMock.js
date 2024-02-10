

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