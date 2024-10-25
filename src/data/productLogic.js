import productsCollection from './productsCollection'
const getFoodProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({data: productsCollection});
    }, 3000);
});

export default getFoodProducts;