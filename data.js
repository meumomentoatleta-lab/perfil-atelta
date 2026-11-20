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
    detail: "2º lugar ouro Sub-09 (2023)",
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
  instagram: "",
  instagramLabel: "Instagram",
  bio: "Atleta de Futsal e Futebol 7, atuando como Ala/Lateral e Pivô/Meio-campo pelo Náutico na categoria Sub-11. Destaca-se pela velocidade, agilidade, coordenação motora e capacidade de organizar as jogadas, com preferência por assistências, finalizações e controle de bola.",
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
  heroImage: "images/capa.jpg",
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
    {
      title: "Náutico x Decisão U11 — Highlights",
      category: "Melhores momentos",
      duration: "02:59",
      date: "2026",
      url: " https://www.youtube.com/watch?v=W6yGVYX-ukQ",
    },
    {
      title: "Náutico x Sport U11— Highlights",
      category: "Melhores momentos",
      duration: "03:25",
      date: "2026",
      url: "https://www.youtube.com/watch?v=NFdFnj25VEY",
    },
    {
      title: "Benfica U11 — Highlights",
      category: "Melhores momentos",
      duration: "05:05",
      date: "2026",
      url: "https://www.youtube.com/watch?v=gWrYzZL4HfU&list=PLvuDTxVHGwy7pdwIuVGe3VIn1VdHPRf6J&index=5",
    },
    {
      title: "Benfica x Timbu - U12 — Highlights",
      category: "Melhores momentos",
      duration: "04:48",
      date: "2026",
      url: "https://www.youtube.com/watch?v=hNlwvrL5kq8&list=PLvuDTxVHGwy7pdwIuVGe3VIn1VdHPRf6J&index=2",
    },
    {
      title: "ELO x CVI - U11 — Highlights",
      category: "Escolar",
      duration: "01:22",
      date: "2025",
      url: "https://www.youtube.com/watch?v=VoJayuGKy8s&list=PLvuDTxVHGwy7pdwIuVGe3VIn1VdHPRf6J&index=6",
    },
    {
      title: "Retrô x Vasco U9 — Highlights",
      category: "Melhores momentos",
      duration: "01:22",
      date: "2024",
      url: "https://www.youtube.com/shorts/n7cFFCaLrEo",
    },
  ],
};
