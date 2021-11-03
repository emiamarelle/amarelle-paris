const data = [

{
    id: 1,
    name: "Producto 1",
    //imginfo: "https://via.placeholder.com/300/023e8a/FFFFFF",
    description: "Descripción de producto 1",
    price: 8499,
    stock: 8
  },
  {
    id: 2,
    name: "Producto 2",
    //imginfo: "https://via.placeholder.com/300/0077b6/FFFFFF",
    description: "Descripción de producto 2",
    price: 6899,
    stock: 3
  },
];

export const getData = new Promise((res, rej) => {
    setTimeout(() => {
      res(data);
    }, 2000);
})

export const getItem = new Promise((res, rej) => {
    setTimeout(() => {
      res(data[0]);
    }, 2000);
})