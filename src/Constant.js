import { TextInput } from "react-native";

export const cores = {
    COR_PRIMARIA: "#F96163",
    COR_LIGHT: "#FFF",
    COR_DARK: "#000",
    COR_ALT_DARK: "#262626",
};

export const categorias = [
    {
        id: "01",
        nome: "Brancos",
    },
    {
        id: "02",
        nome: "Integrais",
    },
    {
        id: "03",
        nome: "Rústicos",
    },
    {
        id: "04",
        nome: "Viennoiserie",
    },
    {
        id: "05",
        nome: "Confeitaria",
    },
];

export const ListaReceitas = [
    {
        id: "01",
        nome: "Pão Francês",
        image: require("../assets/img/frances.png"),
        ingredientes: [
            "farinha branca",
            "agua",
            "sal",
            "melhorador", 
            "fermento"
        ],
        quantidades: [
            0.61,
            0.366,
            0.0122,
            0.0061, 
            0.0061
        ],
    },
    {
        id: "02",
        nome: "Brioche",
        image: require("../assets/img/brioche.png"),
        ingredientes: "tchau"
    },
    {
        id: "03",
        nome: "Pão Italiano",
        image: require("../assets/img/frances.png"),
        ingredientes: "lal"
    },
    {
        id: "04",
        nome: "Baguette",
        image: require("../assets/img/frances.png"),
        ingredientes: "oi"
    },
    {
        id: "05",
        nome: "Pão Australiano",
        image: require("../assets/img/australiano.png"),
        ingredientes: ["quantidade",<TextInput/>]
    },
    {
        id: "06",
        nome: "Baguette Integral",
        image: require("../assets/img/integral.png"),
        ingredientes: "tchau"
    },
    {
        id: "07",
        nome: "Pão de milho",
        image: require("../assets/img/milho.png"),
        ingredientes: "lal"
    },
    {
        id: "08",
        nome: "Croissant",
        image: require("../assets/img/frances.png"),
        ingredientes: "oi"
    },
]