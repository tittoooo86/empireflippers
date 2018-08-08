import listings from '../data/listings';

const fetchItems = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve(listings), Math.random() * 100)
});


const searchItems = (query) => new Promise((resolve, reject) => {
    const filtered = listings.filter(function(event){
        return event.type.toLowerCase().replace(/\s+/g, '').includes(query) ;
    });
    setTimeout(() => resolve(filtered), Math.random() * 100)
});

export default {fetchItems, searchItems};