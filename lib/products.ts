export type Product = {
    id: number,
    name: string,
    price: number,
    category: string,
    description: string
}

export const products: Product[] = [
    // Laptops
    {
        id: 1,
        name: "Dell Inspiron 15",
        price: 55000,
        category: "Laptop",
        description: "15.6-inch laptop with Intel Core i5, 16GB RAM and 512GB SSD."
    },
    {
        id: 2,
        name: "HP Pavilion",
        price: 62000,
        category: "Laptop",
        description: "Powerful laptop with Intel Core i5, 16GB RAM and 512GB SSD."
    },
    {
        id: 3,
        name: "MacBook Air M3",
        price: 95000,
        category: "Laptop",
        description: "Apple laptop with M3 chip, 8GB RAM and 256GB SSD."
    },
    {
        id: 4,
        name: "Lenovo IdeaPad Slim 5",
        price: 68000,
        category: "Laptop",
        description: "Slim laptop with AMD Ryzen 7 processor and 16GB RAM."
    },
    {
        id: 5,
        name: "ASUS VivoBook 15",
        price: 48000,
        category: "Laptop",
        description: "Everyday laptop with Intel Core i5 and 512GB SSD."
    },

    // Mobiles
    {
        id: 6,
        name: "iPhone 16",
        price: 75000,
        category: "Mobile",
        description: "Apple smartphone with A18 chip and advanced dual camera."
    },
    {
        id: 7,
        name: "Samsung Galaxy S25",
        price: 80000,
        category: "Mobile",
        description: "Premium Android smartphone with AMOLED display."
    },
    {
        id: 8,
        name: "OnePlus 13",
        price: 70000,
        category: "Mobile",
        description: "Flagship smartphone with Snapdragon processor."
    },
    {
        id: 9,
        name: "Google Pixel 9",
        price: 65000,
        category: "Mobile",
        description: "Google smartphone with excellent AI-powered camera."
    },
    {
        id: 10,
        name: "Nothing Phone 3",
        price: 45000,
        category: "Mobile",
        description: "Unique smartphone with transparent design and Glyph interface."
    },

    // Watches
    {
        id: 11,
        name: "Apple Watch Series 10",
        price: 45000,
        category: "Watch",
        description: "Smartwatch with fitness tracking and health monitoring."
    },
    {
        id: 12,
        name: "Samsung Galaxy Watch 7",
        price: 30000,
        category: "Watch",
        description: "Android smartwatch with health and sleep tracking."
    },
    {
        id: 13,
        name: "Noise ColorFit Pro 5",
        price: 4000,
        category: "Watch",
        description: "Affordable smartwatch with AMOLED display."
    },
    {
        id: 14,
        name: "Fire-Boltt Phoenix",
        price: 2500,
        category: "Watch",
        description: "Budget smartwatch with Bluetooth calling."
    },
    {
        id: 15,
        name: "Garmin Forerunner 165",
        price: 25000,
        category: "Watch",
        description: "GPS smartwatch designed for running and fitness tracking."
    }
];