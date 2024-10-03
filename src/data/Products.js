const productosAlimenticios = [
    {
        id: 1,
        nombre: "Croquetas Premium",
        descripcion: "Alimento seco de alta calidad para perros adultos, formulado con ingredientes seleccionados que garantizan una nutrición equilibrada. Contiene proteínas de origen animal que promueven la salud muscular y un pelaje brillante.",
        precio: 250.00,
        img: "/images/snack.jpg",
        categoria: "perros"
    },
    {
        id: 2,
        nombre: "Snacks de Pollo",
        descripcion: "Deliciosos bocadillos de pollo para perros, elaborados con carne de pollo fresca y libre de conservantes. Ideales como recompensa durante el entrenamiento o como un pequeño mimo para tu mejor amigo.",
        precio: 80.00,
        img: "/images/perritoSnack.jpg",
        categoria: "perros"
    },
    {
        id: 3,
        nombre: "Comida Húmeda",
        descripcion: "Alimento húmedo de atún para gatos, rico en proteínas y ácidos grasos omega-3, que favorecen una piel saludable y un pelaje suave. Su textura jugosa y sabor irresistible hará que tu gato lo adore.",
        precio: 120.00,
        img: "/images/catSanck1.jpg",
        categoria: "gatos"
    },
    {
        id: 4,
        nombre: "Croquetas Premium",
        descripcion: "Croquetas nutritivas para gatos adultos, formuladas con ingredientes de alta calidad que proporcionan la energía necesaria para su vida diaria. Contienen taurina para una buena salud ocular y cardiovascular.",
        precio: 300.00,
        img: "/images/catSnack.jpg",
        categoria: "gatos"
    },
    {
        id: 5,
        nombre: "Snacks de Salmón",
        descripcion: "Bocadillos de salmón, una delicia para tu gato, ricos en proteínas y omega-3. Estos snacks son perfectos como premio o entre comidas, ayudando a mantener la salud de su piel y su pelaje.",
        precio: 90.00,
        img: "/images/catSnack3.jpg",
        categoria: "gatos"
    },
    {
        id: 6,
        nombre: "Alimento Balanceado",
        descripcion: "Nutrición balanceada para perros de todas las razas, diseñado para mantener una salud óptima en cada etapa de su vida. Contiene fibra natural que ayuda en la digestión y previene problemas gastrointestinales.",
        precio: 400.00,
        img: "/images/perroSnack.jpg",
        categoria: "perros"
    },
    {
        id: 7,
        nombre: "Croquetas Cachorros",
        descripcion: "Alimento especial para cachorros en crecimiento, enriquecido con DHA para un desarrollo óptimo del cerebro y la visión. Su fórmula equilibrada ayuda a fortalecer su sistema inmunológico.",
        precio: 280.00,
        img: "/images/perroSnack2.jpg",
        categoria: "perros"
    },
    {
        id: 8,
        nombre: "Snacks de Pescado",
        descripcion: "Bocadillos saludables de pescado, ricos en omega-3 y proteínas, que ayudan a mantener un pelaje brillante y una piel saludable. Ideales para perros que aman el sabor del mar.",
        precio: 100.00,
        img: "/images/snackPet.jpg",
        categoria: "perros"
    },
    {
        id: 9,
        nombre: "Alimento Natural",
        descripcion: "Comida natural y sin conservantes para gatos, hecha con ingredientes frescos y saludables. Ayuda a mantener un peso adecuado y una salud óptima, sin aditivos artificiales.",
        precio: 350.00,
        img: "/images/snack2.jpg",
        categoria: "gatos"
    },
    {
        id: 10,
        nombre: "Croquetas Sin Grano",
        descripcion: "Alimento sin granos, ideal para perros sensibles con problemas digestivos. Contiene proteínas de alta calidad y está libre de cereales que podrían causar alergias.",
        precio: 330.00,
        img: "/images/snackPet.jpg",
        categoria: "perros"
    },
    {
        id: 11,
        nombre: "Snacks de Hígado",
        descripcion: "Bocadillos irresistibles de hígado, que proporcionan una fuente concentrada de nutrientes esenciales. Perfectos para recompensar a tu gato, ayudando a mantener su energía durante el día.",
        precio: 95.00,
        img: "/images/snack2.jpg",
        categoria: "gatos"
    },
    {
        id: 12,
        nombre: "Comida Húmeda",
        descripcion: "Comida húmeda de pollo, rica en proteínas y diseñada para ser altamente palatable. Ideal para gatos que necesitan un poco de aliento extra en su dieta o tienen problemas de hidratación.",
        precio: 150.00,
        img: "/images/catSnack3.jpg",
        categoria: "gatos"
    },
    {
        id: 13,
        nombre: "Alimento Seco",
        descripcion: "Alimento seco nutritivo para perros adultos, formulado con una mezcla de proteínas, carbohidratos y grasas que aseguran una alimentación completa. Ideal para mantener su energía y salud general.",
        precio: 320.00,
        img:  "/images/snackPet.jpg",
        categoria: "perros"
    },
    {
        id: 14,
        nombre: "Snacks de Atún",
        descripcion: "Deliciosos snacks de atún para gatos, ricos en proteínas y sabor. Estos bocadillos son perfectos como un premio saludable y sabroso que tu gato disfrutará al máximo.",
        precio: 80.00,
        img: "/images/catSnack3.jpg",
        categoria: "gatos"
    },
    {
        id: 15,
        nombre: "Croquetas Perros Activos",
        descripcion: "Alimento diseñado para perros activos y enérgicos, con un contenido calórico ajustado para satisfacer sus necesidades. Ayuda a mantener la masa muscular y la energía durante actividades intensas.",
        precio: 400.00,
        img: "/images/perritoSnack3.jpg",
        categoria: "perros"
    },
    {
        id: 16,
        nombre: "Alimento Húmedo",
        descripcion: "Delicioso alimento húmedo para perros, lleno de proteínas y nutrientes esenciales. Perfecto para perros con necesidades especiales o aquellos que prefieren una dieta húmeda.",
        precio: 200.00,
        img: "/images/perroSnack2.jpg",
        categoria: "perros"
    },
    {
        id: 17,
        nombre: "Snacks de Queso",
        descripcion: "Bocadillos de queso para consentir a tu gato. Estos snacks son perfectos para utilizar como premio durante el entrenamiento o simplemente para mostrar cariño.",
        precio: 85.00,
        img: "/images/snack.jpg",
        categoria: "gatos"
    },
    {
        id: 18,
        nombre: "Alimento Balanceado",
        descripcion: "Nutrición balanceada para gatos de todas las edades, con una mezcla de ingredientes naturales que favorecen una vida activa y saludable. Ideal para mantener un peso adecuado.",
        precio: 300.00,
        img: "/images/catSnack.jpg",
        categoria: "gatos"
    },
    {
        id: 19,
        nombre: "Croquetas de Cordero",
        descripcion: "Croquetas de cordero para perros con paladar exigente. Esta fórmula gourmet es ideal para aquellos que buscan algo especial en su dieta diaria.",
        precio: 360.00,
        img: "/images/snack2.jpg",
        categoria: "perros"
    },
    {
        id: 20,
        nombre: "Snacks de Pavo",
        descripcion: "Bocadillos de pavo, perfectos para el snack de tu gato. Ricos en sabor y con una textura que encanta, son ideales para un mimo especial en cualquier momento del día.",
        precio: 90.00,
        img: "/images/snack2.jpg",
        categoria: "gatos"
    }
];

const getFoodProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productosAlimenticios);
    }, 8000);
});

export default getFoodProducts;
