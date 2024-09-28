const productosAlimenticios = [
    
    
    {
        id: 1,
        nombre: "Croquetas Premium Perro",
        descripcion: "Alimento seco de alta calidad para perros adultos.",
        precio: 250.00,
        img: "/images/croquetas_perro.jpg",
        categoria: "perros"
    },
    {
        id: 2,
        nombre: "Snacks de Pollo para Perro",
        descripcion: "Deliciosos bocadillos de pollo para perros.",
        precio: 80.00,
        img: "/images/snacks_pollo_perro.jpg",
        categoria: "perros"
    },
    {
        id: 3,
        nombre: "Comida Húmeda Gato",
        descripcion: "Alimento húmedo de atún para gatos.",
        precio: 120.00,
        img: "/images/comida_humeda_gato.jpg",
        categoria: "gatos"
    },
    {
        id: 4,
        nombre: "Croquetas Gato Premium",
        descripcion: "Croquetas nutritivas para gatos adultos.",
        precio: 300.00,
        img: "/images/croquetas_gato.jpg",
        categoria: "gatos"
    },
    {
        id: 5,
        nombre: "Snacks de Salmón para Gato",
        descripcion: "Bocadillos de salmón, una delicia para tu gato.",
        precio: 90.00,
        img: "/images/snacks_salmón_gato.jpg",
        categoria: "gatos"
    },
    {
        id: 6,
        nombre: "Alimento Balanceado Perro",
        descripcion: "Nutrición balanceada para perros de todas las razas.",
        precio: 400.00,
        img: "/images/alimento_balanceado_perro.jpg",
        categoria: "perros"
    },
    {
        id: 7,
        nombre: "Croquetas para Cachorros",
        descripcion: "Alimento especial para cachorros en crecimiento.",
        precio: 280.00,
        img: "/images/croquetas_cachorro.jpg",
        categoria: "perros"
    },
    {
        id: 8,
        nombre: "Snacks de Pescado para Perro",
        descripcion: "Bocadillos saludables de pescado.",
        precio: 100.00,
        img: "/images/snacks_pescado_perro.jpg",
        categoria: "perros"
    },
    {
        id: 9,
        nombre: "Alimento Natural Gato",
        descripcion: "Comida natural y sin conservantes para gatos.",
        precio: 350.00,
        img: "/images/alimento_natural_gato.jpg",
        categoria: "gatos"
    },
    {
        id: 10,
        nombre: "Croquetas Sin Granos Perro",
        descripcion: "Alimento sin granos, ideal para perros sensibles.",
        precio: 330.00,
        img: "/images/croquetas_sin_granos_perro.jpg",
        categoria: "perros"
    },
    {
        id: 11,
        nombre: "Snacks de Hígado para Gato",
        descripcion: "Bocadillos irresistibles de hígado.",
        precio: 95.00,
        img: "/images/snacks_higado_gato.jpg",
        categoria: "gatos"
    },
    {
        id: 12,
        nombre: "Comida Húmeda Pollo para Gato",
        descripcion: "Comida húmeda de pollo, rica en proteínas.",
        precio: 150.00,
        img: "/images/comida_humeda_pollo_gato.jpg",
        categoria: "gatos"
    },
    {
        id: 13,
        nombre: "Alimento Seco para Perro Adulto",
        descripcion: "Alimento seco nutritivo para perros adultos.",
        precio: 320.00,
        img: "/images/alimento_seco_perro_adulto.jpg",
        categoria: "perros"
    },
    {
        id: 14,
        nombre: "Snacks de Atún para Gato",
        descripcion: "Deliciosos snacks de atún para gatos.",
        precio: 80.00,
        img: "/images/snacks_atun_gato.jpg",
        categoria: "gatos"
    },
    {
        id: 15,
        nombre: "Croquetas para Perros Activos",
        descripcion: "Alimento diseñado para perros activos y enérgicos.",
        precio: 400.00,
        img: "/images/croquetas_perro_activo.jpg",
        categoria: "perros"
    },
    {
        id: 16,
        nombre: "Alimento Húmedo para Perro",
        descripcion: "Delicioso alimento húmedo para perros.",
        precio: 200.00,
        img: "/images/comida_humeda_perro.jpg",
        categoria: "perros"
    },
    {
        id: 17,
        nombre: "Snacks de Queso para Gato",
        descripcion: "Bocadillos de queso para consentir a tu gato.",
        precio: 85.00,
        img: "/images/snacks_queso_gato.jpg",
        categoria: "gatos"
    },
    {
        id: 18,
        nombre: "Alimento Balanceado para Gato",
        descripcion: "Nutrición balanceada para gatos de todas las edades.",
        precio: 300.00,
        img: "/images/alimento_balanceado_gato.jpg",
        categoria: "gatos"
    },
    {
        id: 19,
        nombre: "Croquetas de Cordero para Perro",
        descripcion: "Croquetas de cordero para perros con paladar exigente.",
        precio: 360.00,
        img: "/images/croquetas_cordero_perro.jpg",
        categoria: "perros"
    },
    {
        id: 20,
        nombre: "Snacks de Pavo para Gato",
        descripcion: "Bocadillos de pavo, perfectos para el snack de tu gato.",
        precio: 90.00,
        img: "/images/snacks_pavo_gato.jpg",
        categoria: "gatos"
    }
];

const getFoodProducts = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve(productosAlimenticios)
    }, 3000);
});

export default getFoodProducts;
