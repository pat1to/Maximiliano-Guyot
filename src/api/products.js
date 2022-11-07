const products = [ 
  {
      nombre: "Mono espacial",
      tag: "1 solo mono",
      descripcion: "mono espacial el cual te llevara a sus limites mentales",
      precio: "1.5ETH",
      imagen: "https://pbs.twimg.com/profile_images/546085950812880897/CqzqX90a_400x400.jpeg",
      id: "0",
      categoria: "mono",
      stock: 20,
  },
  {
      nombre: "Mono volador",
      tag: "3 mono bailarines",
      descripcion: "un mono volador, no llega al espacio pero aun siente",
      precio: "1.3ETH",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSesZtZc7FrrvOckGXi_q2YIWXMtZENcjbfow&usqp=CAU",
      id: "1",
      categoria: "mono",
      stock: 15,
  },
  {
      nombre: "Mona besadora",
      tag: "6 mono muack",
      descripcion: "te besara, pero no te enamores",
      precio: "1.5ETH",
      imagen: "https://i.pinimg.com/736x/4b/7c/ea/4b7cea62673687c4db2da2acf80dcb99--coach-google.jpg",
      id: "2",
      categoria: "mona",
      stock: 100,
  },
  {
      nombre: "Mona bailarina",
      tag: "15 monas bailarinas que danzan",
      descripcion: "bailaran en el hilo de tu mente para derrumbarte",
      precio: "1.7ETH",
      imagen: "https://i.pinimg.com/originals/2f/2f/ce/2f2fcea37507080f6395949f3bf3e496.jpg",
      id: "3",
      categoria: "mona",
      stock: 6,
  },
  {
      nombre: "monito loquin",
      tag: "esta loco",
      descripcion: "esta loquin y chiquitin",
      precio: "1ETH",
      imagen: "https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/02553-monito-safari-png-.png?fit=1000%2C1000&ssl=1",
      id: "4",
      categoria: "monito",
      stock: 1,
  },
  {
      nombre: "monito banana",
      tag: "1 solo monito y 1 sola banana",
      descripcion: "es un monito bebe y una banana",
      precio: "33ETH",
      id: "5",
      imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN24Jnp3hPSL5C2GNYlvk06MK4ZdnEHJ3o1g&usqp=CAU",
      categoria: "monito",
      stock: 3,
  },
];

export const getProducts = (categoria) =>
  new Promise((res, rej) => {
    const response = categoria
      ? products.filter((p) => p.categoria === categoria)
      : products;
    setTimeout(() => {
      res(response);
    }, 1500);
  });

export const getProduct = (productId) =>
  new Promise((res, rej) => {
    const response = products.find((product) => product.id === productId);
    setTimeout(() => {
      res(response);
    }, 1500);
  });
