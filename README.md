# Perfil do Atleta — Momento Atleta

Página responsiva de currículo esportivo em HTML, CSS e JavaScript puro.

## Como visualizar
1. Extraia o ZIP.
2. Abra `index.html` no navegador. Para desenvolvimento, recomenda-se usar a extensão **Live Server** do VS Code.
3. Edite os dados em `data.js`.

## Como personalizar para outro atleta
O arquivo `data.js` concentra o conteúdo:
- identificação, posição, clube e apresentação;
- dados pessoais e características;
- atributos de 0 a 100 (gráfico radar e barras);
- histórico de clubes e conquistas;
- fotos e link para galeria externa;
- vídeos categorizados com links do YouTube;
- contato e Instagram.

Para editar o histórico, adicione ou remova objetos no array `careerHistory` em `data.js`. Cada registro aceita `period`, `club`, `category`, `modality` (por exemplo, `Futsal`, `Fut7` ou `Campo`) e `logo` (caminho ou URL do escudo; opcional).

Para editar títulos e conquistas, adicione ou remova objetos no array `achievementHistory` em `data.js`. Cada registro aceita `title` e `detail`.

### Fotos
Informe URLs públicas nos campos `heroImage`, `portraitImage` e `gallery[].image`. Se os campos ficarem vazios, a página apresenta blocos visuais de demonstração. Para uma publicação real, hospede as fotos em um serviço/CDN e use os endereços HTTPS.

### Vídeos
Em cada item de `videos`, preencha `url` com o endereço do vídeo no YouTube. A miniatura é carregada automaticamente e, ao clicar nela ou em “Assistir”, o vídeo é reproduzido na própria página. Se necessário, informe uma miniatura personalizada no campo opcional `thumbnail`.

### Atributos
As pontuações são demonstrativas. Combine com o atleta/treinador uma escala objetiva e mantenha o mesmo critério entre atletas. Evite publicar notas como se fossem avaliações oficiais sem validação. Cada item pode incluir `groups: ["attack"]`, `groups: ["defense"]` ou ambos para aparecer nas duas séries do radar. As séries começam sobrepostas e podem ser ocultadas pelos controles do gráfico.

## Estrutura
- `index.html` — estrutura da página
- `styles.css` — identidade visual e responsividade
- `data.js` — dados editáveis do atleta
- `app.js` — renderização, filtros, gráfico, galeria e compartilhamento

## Observações
- Não há backend nem banco de dados: cada perfil pode ser publicado como uma página estática.
- Os dados de exemplo reproduzem as informações visíveis no material de referência, com texto de apresentação revisado e pontuações ilustrativas.
- A fonte Google Fonts depende de conexão com a internet; fontes de sistema são usadas como fallback.
