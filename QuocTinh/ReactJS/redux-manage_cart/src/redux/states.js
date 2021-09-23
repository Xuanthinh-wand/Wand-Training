
export let manageCart = {
    products: [
        { id: 1, name: "IPhone 13 Pro Max", img: "https://cdn.tgdd.vn/Products/Images/42/250728/iphone-13-pro-max-silver-600x600.jpg", price: 123456 },
        { id: 2, name: "Samsung Galaxy Z Fold 3", img: "https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-green4-org.jpg", price: 222222 },
        { id: 3, name: "Oppo Neno 6", img: "https://cdn.tgdd.vn/Products/Images/42/236186/oppo-reno6-den-11-org.jpg", price: 333333 },
        { id: 4, name: "Acer Aspire 7 A715", img: "https://cdn.tgdd.vn/Products/Images/44/239538/Slider/vi-vn-acer-aspire-7-a715-41g-r150-r7-nhq8ssv004-4.jpg", price: 444444 },
        { id: 5, name: "Hp Pavilion 15", img: "https://cdn.tgdd.vn/Products/Images/44/244354/Slider/vi-vn-hp-pavilion-15-eg0505tu-i5-46m02pa-5.jpg", price: 555555 },
        { id: 6, name: "Samsung Galaxy Tab S7", img: "https://cdn.tgdd.vn/Products/Images/522/240254/samsung-galaxy-tab-s7-fe-black-1-org.jpg", price: 888888 }
    ],
    carts: [
        { id: 1, id_user: 2, id_product: 1, count: 12 },
        // { id: 2, id_user: 2, id_product: 3, count: 4 },
        // { id: 3, id_user: 2, id_product: 2, count: 7 },
        // { id: 4, id_user: 1, id_product: 1, count: 3 },
        // { id: 5, id_user: 3, id_product: 3, count: 7 },
        // { id: 6, id_user: 3, id_product: 1, count: 1 },
        // { id: 7, id_user: 2, id_product: 2, count: 2 },
        // { id: 8, id_user: 4, id_product: 3, count: 7 },
        // { id: 9, id_user: 4, id_product: 4, count: 9 }
    ],
    users: [
        { id: 1, user_name: "tinh", password: "111", full_name: "Nguyen Quoc Tinh 1" },
        { id: 2, user_name: "tinh", password: "222", full_name: "Nguyen Quoc Tinh 2" },
        { id: 3, user_name: "tinh", password: "333", full_name: "Nguyen Quoc Tinh 3" }
    ],
    user_loged: null
}