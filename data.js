/*
  PERSONALIZE ESTE ARQUIVO PARA CADA ATLETA.
  - Imagens: informe URLs públicas (Cloudinary, site, CDN) em heroImage, portraitImage e gallery.
  - Vídeos: informe o link completo do YouTube em url. O botão abre o vídeo em nova aba.
  - Atributos: notas de 0 a 100. Use avaliação técnica real; as notas abaixo são apenas demonstração.
*/
const careerHistory = [
  {
    period: "2023 — 2024",
    club: "Geração",
    category: "Categoria Sub-08",
    modality: "Futebol 7",
    logo: "escudos/geracao.jpg",
  },
  {
    period: "2024 — 2025",
    club: "Retrô",
    category: "Categoria Sub-09",
    modality: "Futsal",
    logo: "escudos/retro.png",
  },
  {
    period: "2025 — ATUAL",
    club: "Náutico",
    category: "Categorias Sub-10, Sub-11",
    modality: "Futsal",
    logo: "escudos/logoNautico.png",
  },
  {
    period: "2025 — ATUAL",
    club: "Benfica Recife",
    category: "Categorias Sub-10, Sub-11",
    modality: "Futebol 7",
    logo: "escudos/benfica.png",
  },
];

const achievementHistory = [
  {
    title: "Copa Caruaru - Fut 7",
    detail: "Campeão prata Sub-08 (2023)",
  },
  {
    title: "Copa Caruaru - Fut 7",
    detail: "2º lugar ouro Sub-09 (2024)",
  },
  {
    title: "Copa Tronadon de Base - Futsal",
    detail: "Campeão Sub-10 (2025)",
  },
  {
    title: "Liga HD de Futsal",
    detail: "2º lugar Sub-10 (2025)",
  },
  {
    title: "Copa Pernambuco - Futsal",
    detail: "Campeão Sub-11 (2026)",
  },
  {
    title: "Liga Pernambucana de Futsal",
    detail: "Campeão Sub-11 (2026)",
  },
];

window.ATHLETE = {
  name: "Pietro",
  fullName: "Pietro Teixeira Rodrigues",
  role: "Ala / Lateral / Meio-campo",
  sport: "Futsal e Futebol 7",
  club: "Náutico",
  location: "Paulista, PE",
  age: "11 anos",
  birthYear: "2015",
  height: "140 cm",
  weight: "33 kg",
  dominantFoot: "Direito",
  shirtNumber: "20",
  nationality: "Brasileiro",
  email: "",
  instagram: "https://www.instagram.com/pietro_yamal/",
  bio: "Atleta de Futsal e Futebol 7, atuando como Ala/Lateral pelo futsal do Náutico. Destaca-se pela velocidade, agilidade, coordenação motora e capacidade de organizar as jogadas, com preferência por assistências, finalizações e controle de bola.",
  strengths: [
    "Velocidade",
    "Resistência",
    "Agilidade",
    "Equilíbrio",
    "Coordenação motora",
    "Flexibilidade",
  ],
  overall: 2015,
  updated: "ATUALIZADO EM 19/11/2026",
  heroImage: "images/capa.png",
  portraitImage: "images/3x4.jpg",
  attributes: [
    { name: "Finalização", value: 60, groups: ["attack"] },
    { name: "Velocidade", value: 85, groups: ["attack", "defense"] },
    { name: "Drible", value: 70, groups: ["attack"] },
    { name: "Passe", value: 90, groups: ["attack"] },
    { name: "Visão de jogo", value: 70, groups: ["attack"] },
    { name: "Marcação", value: 77, groups: ["defense"] },
    { name: "Controle de bola", value: 85, groups: ["attack"] },
    { name: "Resistência", value: 84, groups: ["defense"] },
    { name: "Precisão", value: 80, groups: ["attack"] },
    { name: "Assistência", value: 90, groups: ["attack"] },
  ],
  career: careerHistory,
  achievements: achievementHistory,
  gallery: [
    { image: "images/em-campo.jpg", caption: "Em campo" },
    { image: "images/disputa.png", caption: "Disputa de bola" },
    { image: "images/ofensiva.jpg", caption: "Ação ofensiva" },
    { image: "images/em-quadra.jpg", caption: "Em quadra" },
  ],
  allPhotosUrl: "",
  videos: [
    /* Vídeos de Futsal*/
    {
      title: "Náutico x Decisão U11 ",
      category: "Futsal",
      duration: "02:59",
      date: "2026",
      url: " https://www.youtube.com/watch?v=W6yGVYX-ukQ",
    },

    {
      title: "Náutico x Santa Cruz U11",
      category: "Futsal",
      duration: "02:14",
      date: "2026",
      url: "https://www.youtube.com/watch?v=JTwgtqDGXF4",
    },
    {
      title: "Náutico x Ajax U11",
      category: "Futsal",
      duration: "01:47",
      date: "2026",
      url: "https://youtu.be/Iv1HpYUJCrk?si=Vl7R7q-lAmejmprF",
    },
    {
      title: "Náutico x EJ U11",
      category: "Futsal",
      duration: "01:05",
      date: "2026",
      url: "https://youtu.be/-jq9OY_Xy90",
    },
    {
      title: "Náutico x Sport U11",
      category: "Futsal",
      duration: "03:25",
      date: "2026",
      url: "https://www.youtube.com/watch?v=NFdFnj25VEY",
    },
    {
      title: "Náutico x Capibaribe U11",
      category: "Futsal",
      duration: "00:56",
      date: "2026",
      url: "https://youtube.com/shorts/HaZ5vxW5aBM",
    },
    {
      title: "Náutico x Zenith U11 (Amistoso)",
      category: "Futsal",
      duration: "",
      date: "2026",
      url: "https://youtube.com/shorts/1aK7BSaBdM0",
    },
    {
      title: "Náutico x TS U11",
      category: "Futsal",
      duration: "01:05",
      date: "2026",
      url: "https://youtube.com/shorts/rWSGBZsC5fg",
    },

    {
      title: "Náutico x Zenith U11",
      category: "Futsal",
      duration: "01:21",
      date: "2026",
      url: "https://youtu.be/8BMBWjCo16U",
    },
    {
      title: "Highlights Náutico U10 - Copa Tronadon",
      category: "Futsal",
      duration: "01:54",
      date: "2025",
      url: "https://youtu.be/O_p5qcEfGZA",
    },

    {
      title: "ELO x CVI - U11 ",
      category: "Futsal",
      duration: "01:22",
      date: "2025",
      url: "https://www.youtube.com/watch?v=VoJayuGKy8s&list=PLvuDTxVHGwy7pdwIuVGe3VIn1VdHPRf6J&index=6",
    },
    {
      title: "ELO x CSE - U11 ",
      category: "Futsal",
      duration: "01:22",
      date: "2025",
      url: "https://youtu.be/O-NbRus6jzQ",
    },
    {
      title: "Náutico x B5 - U10 ",
      category: "Futsal",
      duration: "01:22",
      date: "2025",
      url: "",
    },
    ,
    {
      title: "Náutico x SP Soccer - U10",
      category: "Futsal",
      duration: "00:29",
      date: "2025",
      url: "https://youtu.be/8gRnJsGQCOQ",
    },
    {
      title: "Retrô x Vasco U9 ",
      category: "Futsal",
      duration: "01:22",
      date: "2024",
      url: "https://www.youtube.com/shorts/n7cFFCaLrEo",
    },

    /* Vídeos de futebol 7 */
    {
      title: "Benfica x Santa Cruz - U11 ",
      category: "Fut7",
      duration: "",
      date: "2026",
      url: "",
    },
    {
      title: "Benfica x Sesc Goiana - U11 ",
      category: "Fut7",
      duration: "05:05",
      date: "2026",
      url: "https://www.youtube.com/watch?v=gWrYzZL4HfU&list=PLvuDTxVHGwy7pdwIuVGe3VIn1VdHPRf6J&index=5",
    },
    {
      title: "Benfica x Capibaribe - U11 ",
      category: "Fut7",
      duration: ":01:14",
      date: "2026",
      url: "https://youtube.com/shorts/gsN2J3MEGhw",
    },

    {
      title: "Benfica x GM 2 - U11",
      category: "Fut7",
      duration: "04:13",
      date: "2026",
      url: "https://youtu.be/x7adOBlCGP0",
    },
    {
      title: "Benfica x Almirantes - U11",
      category: "Fut7",
      duration: "04:39",
      date: "2026",
      url: "https://www.youtube.com/watch?v=ty1j0Z84q94",
    },

    {
      title: "Benfica x Timbu - U12 ",
      category: "Fut7",
      duration: "04:48",
      date: "2026",
      url: "https://www.youtube.com/watch?v=hNlwvrL5kq8&list=PLvuDTxVHGwy7pdwIuVGe3VIn1VdHPRf6J&index=2",
    },
    {
      title: "Fera -Amistoso - U12 ",
      category: "Fut7",
      duration: "02:16",
      date: "2025",
      url: "https://youtube.com/shorts/Cp5XiQrnKQw",
    },

    /* Vídeos de Futvolei*/

    {
      title: "Treino de Futvolei - Filipinho",
      category: "Futvolei",
      duration: "1:08",
      date: "2026",
      url: "https://youtube.com/shorts/Bh41Km37fHo",
    },

    {
      title: "Treino de Futvolei - Royal",
      category: "Futvolei",
      duration: "1:34",
      date: "2026",
      url: "https://youtube.com/shorts/CgJD71PERTU",
    },
    /* Vídeos de Treinos */
    {
      title: "Treino Náutico U11",
      category: "Treinos",
      duration: "01:40",
      date: "2026",
      url: "https://youtube.com/shorts/h3ipN5IoGyo",
    },
    {
      title: "Físico",
      category: "Treinos",
      duration: "01:34",
      date: "2026",
      url: "https://youtube.com/shorts/X00HSGlytCQ",
    },
    {
      title: "Treino Náutico U11",
      category: "Treinos",
      duration: "02:00",
      date: "2026",
      url: "https://www.youtube.com/shorts/YKXXxmYaIqc",
    },
    /* Compilados */
    {
      title: "Compilado de Gols ",
      category: "Compilados",
      duration: "3:00",
      date: "2026",
      url: "",
    },
    {
      title: "Compilado de Assistências ",
      category: "Compilados",
      duration: "3:00",
      date: "2026",
      url: "",
    },
    {
      title: "Compilado de Dribles ",
      category: "Compilados",
      duration: "3:00",
      date: "2026",
      url: "",
    },
    {
      title: "Compilado de Ações Defensivas ",
      category: "Compilados",
      duration: "3:00",
      date: "2026",
      url: "",
    },
  ],
};
