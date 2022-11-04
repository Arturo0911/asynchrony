import fetch from 'node-fetch'

const API: string = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi: string) {
    const response = await fetch(urlApi);
    const data = await response.json()
    return data;
}

const anotherFunction = async (urlApi: string) => {
    try {
        const products: any | string[]  = await fetchData(`${urlApi}/products`);
        const product: any = await fetchData(`${urlApi}/products/${products[0].id}`)
        const category: any = await fetchData(`${urlApi}/categories/${product.category.id}`);
        
        console.log(products.length);
        console.log(product.title);
        console.log(category.name);
    } catch (error){
        console.error(error);
    }
}

anotherFunction(API)