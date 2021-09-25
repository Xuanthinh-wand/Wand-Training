var initialState = [
    {
        id : 1,
        name : 'Iphone 7 Plus',
        image : 'https://dummyimage.com/300.png/09f/fff',
        
    },
    {
        id : 2,
        name : 'Samsung galaxy S7',
        image : 'https://dummyimage.com/300.png/09f/fff',
       
    },
    {
        id : 3,
        name : 'Oppo F1s',
        image : 'https://dummyimage.com/300.png/09f/fff',
        
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default products;