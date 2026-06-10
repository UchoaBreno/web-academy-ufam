export type Produto = {
    id: number;
    nome: string;
    preco: number;
};

export const produtos: Produto[] = [
    {
        id: 1,
        nome: "Celular Samsung Galaxy S23",
        preco: 3000
    },
    {
        id: 2,
        nome: "Tablet Samsung Galaxy 3",
        preco: 4000
    },
    {
        id: 3,
        nome: "Monitor Dell DMD34",
        preco: 2550
    },
    {
        id: 4,
        nome: "Ar-condicionado Split Samsung Digital Inverter",
        preco: 3000
    },
    {
        id: 5,
        nome: "Ar-condicionado Split Samsung Digital Convencional",
        preco: 2500
    },
    {
        id: 6,
        nome: "Ar-condicionado Window Samsung Digital Convencional",
        preco: 1500
    }
];