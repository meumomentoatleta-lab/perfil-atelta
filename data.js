/*
  PERSONALIZE ESTE ARQUIVO PARA CADA ATLETA.
  - Imagens: informe URLs públicas (Cloudinary, site, CDN) em heroImage, portraitImage e gallery.
  - Vídeos: informe o link completo do YouTube em url. O botão abre o vídeo em nova aba.
  - Atributos: notas de 0 a 100. Use avaliação técnica real; as notas abaixo são apenas demonstração.
*/
window.ATHLETE = {
  name: "Pietro Yamal",
  role: "Ala / Lateral / Pivô / Meio-campo",
  sport: "Futsal e Futebol 7",
  club: "Náutico",
  location: "Paulista, PE",
  age: "11 anos",
  birthDate: "15/10/2015",
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
    { name: "Finalização", value: 88, groups: ["attack"] },
    { name: "Velocidade", value: 90, groups: ["attack", "defense"] },
    { name: "Drible", value: 86, groups: ["attack"] },
    { name: "Passe", value: 85, groups: ["attack"] },
    { name: "Visão de jogo", value: 87, groups: ["attack"] },
    { name: "Marcação", value: 82, groups: ["defense"] },
    { name: "Controle de bola", value: 88, groups: ["attack"] },
    { name: "Resistência", value: 84, groups: ["defense"] },
    { name: "Precisão", value: 86, groups: ["attack"] },
    { name: "Assistência", value: 89, groups: ["attack"] },
  ],
  career: [
    {
      period: "2023 — ATUAL",
      club: "Náutico",
      category: "Categoria Sub-11",
    },
  ],
  achievements: [],
  gallery: [
    { image: "", caption: "Em campo" },
    { image: "", caption: "Disputa de bola" },
    { image: "", caption: "Ação ofensiva" },
    { image: "", caption: "Treinamento" },
  ],
  allPhotosUrl: "",
  videos: [
    {
      title: "Náutico x Sport — melhores momentos",
      category: "Melhores momentos",
      duration: "03:25",
      date: "Temporada atual",
      url: "https://www.youtube.com/watch?v=NFdFnj25VEY",
    },
    {
      title: "Gols — compilado",
      category: "Gols",
      duration: "02:10",
      date: "Carreira",
      url: "",
    },
    {
      title: "Dribles e jogadas individuais",
      category: "Dribles",
      duration: "01:45",
      date: "Carreira",
      url: "",
    },
    {
      title: "Assistências e criação",
      category: "Assistências",
      duration: "02:05",
      date: "Carreira",
      url: "",
    },
  ],
};
