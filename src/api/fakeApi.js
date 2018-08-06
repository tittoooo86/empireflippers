import listings from '../data/listings';

const fetchItems = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve(listings), Math.random() * 100)
});

export default {fetchItems};