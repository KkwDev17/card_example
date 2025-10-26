type Card = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  url: string;  
};

export const CardDB: Card[] = [
  {
    id: "1",
    name: "Laptop HP",
    price: 4500,
    description:
      "Laptop HP Pavilion 15 en excelente estado, reacondicionada y probada para un rendimiento óptimo. Ideal para clases, trabajo o uso diario. Incluye cargador original, batería funcional y disco SSD de 256 GB.",
    category: "ELECTRODOMÉSTICOS",
    url: "/laptop.jpg", 
  },
  {
    id: "2",
    name: "Galaxy S10",
    price: 3350,
    description:
      "Galaxy S10 con pantalla AMOLED impecable y cámara nítida. Revisado y limpiado completamente. Batería en buen estado (85% de salud).",
    category: "ELECTRODOMÉSTICOS",
    url: "/celular.png",  
  },
  {
    id: "3",
    name: "Audífonos BC",
    price: 500,
    description:
      "Audífonos inalámbricos con cancelación activa de ruido. Funcionan perfectamente y se entregan con su estuche original.",
    category: "ELECTRODOMÉSTICOS",
    url: "/audifonos.png",  
  },
];
