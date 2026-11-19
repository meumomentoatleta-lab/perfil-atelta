(() => {
  const a = window.ATHLETE || {};
  const $ = (id) => document.getElementById(id);
  const safe = (value, fallback = "") => value || fallback;

  document.title = `${safe(a.name, "Atleta")} | Perfil do Atleta`;
  $("athleteName").textContent = safe(a.name, "NOME DO ATLETA").toUpperCase();
  $("athleteRole").innerHTML = `${safe(a.role, "Atleta").toUpperCase()} <i>•</i> ${safe(a.sport, "Esporte").toUpperCase()}`;
  $("clubBadge").textContent = safe(a.club, "CLUBE");
  $("locationBadge").textContent = safe(a.location, "LOCALIZAÇÃO").toUpperCase();
  $("overallScore").textContent = safe(a.overall, "—");
  $("updatedLabel").textContent = safe(a.updated, "PERFIL");
  $("portraitName").textContent = safe(a.name, "ATLETA").toUpperCase();
  $("portraitPosition").textContent = `${safe(a.role, "ATLETA").toUpperCase()} • ${safe(a.shirtNumber, "—")}`;
  $("athleteBio").textContent = safe(a.bio, "Adicione uma apresentação para este atleta.");
  $("year").textContent = new Date().getFullYear();
  $("contactButton").href = a.email ? `mailto:${a.email}` : "#";
  $("instagramLink").href = safe(a.instagram, "#");
  $("instagramLink").textContent = `${safe(a.instagramLabel, "Instagram")} ↗`;
  $("allPhotosLink").href = safe(a.allPhotosUrl, "#");
  if (!a.allPhotosUrl) $("allPhotosLink").addEventListener("click", e => { e.preventDefault(); showToast("Adicione o link da galeria em data.js"); });

  if (a.heroImage) $("heroPhoto").style.backgroundImage = `linear-gradient(90deg, #10172022, #101720cc), url("${a.heroImage}")`;
  if (a.heroImage) $("heroPhoto").style.backgroundSize = "cover";
  if (a.portraitImage) {
    $("portrait").innerHTML = `<img src="${a.portraitImage}" alt="Foto de ${safe(a.name, "atleta")}">`;
    $("portrait").classList.add("has-image");
  }

  const facts = [
    ["IDADE", a.age], ["NASCIMENTO", a.birthDate], ["ALTURA / PESO", [a.height, a.weight].filter(Boolean).join(" • ")],
    ["PÉ DOMINANTE", a.dominantFoot], ["POSIÇÃO", a.role], ["NACIONALIDADE", a.nationality]
  ].filter(x => x[1]);
  $("quickFacts").innerHTML = facts.map(([label, value]) => `<div class="fact"><span class="fact-mark">◆</span><span><b>${label}:</b> ${value}</span></div>`).join("");
  $("strengthTags").innerHTML = (a.strengths || []).map(s => `<span class="tag">${s}</span>`).join("");

  const attrs = a.attributes || [];
  renderRadar(attrs);
  $("attributeBars").innerHTML = attrs.map(item => {
    const value = clamp(item.value);
    return `<div class="attribute-row"><span class="attribute-name">${item.name}</span><div class="bar-track"><div class="bar-fill" style="width:${value}%"></div></div><span class="attribute-value">${value}</span></div>`;
  }).join("");

  $("careerTimeline").innerHTML = (a.career || []).map(item => `<div class="timeline-item"><span class="timeline-period">${item.period}</span><strong>${item.club}</strong><small>${item.category || ""}</small></div>`).join("");
  $("achievements").innerHTML = (a.achievements || []).map(item => `<div class="achievement"><span class="achievement-star">★</span><div><strong>${item.title}</strong><small>${item.detail || ""}</small></div></div>`).join("");

  const gallery = a.gallery || [];
  let currentPhoto = 0;
  $("galleryGrid").innerHTML = gallery.map((item, i) => `<button class="gallery-item" type="button" data-index="${i}" aria-label="Abrir foto: ${item.caption || "Atleta"}">${item.image ? `<img src="${item.image}" alt="${item.caption || "Foto do atleta"}" loading="lazy">` : `<div class="gallery-placeholder">MA<span>${safe(a.name, "ATLETA").split(" ").map(w => w[0]).slice(0,2).join("").toUpperCase()}</span></div>`}<span>${item.caption || "Foto do atleta"}</span></button>`).join("");
  $("galleryGrid").addEventListener("click", e => {
    const btn = e.target.closest(".gallery-item");
    if (!btn) return;
    currentPhoto = Number(btn.dataset.index);
    openLightbox();
  });
  function openLightbox() {
    const item = gallery[currentPhoto];
    if (!item || !item.image) { showToast("Adicione a URL desta foto em data.js"); return; }
    $("lightboxImage").src = item.image;
    $("lightboxImage").alt = item.caption || "Foto do atleta";
    $("lightboxCaption").textContent = item.caption || "";
    $("lightbox").classList.add("open");
    $("lightbox").setAttribute("aria-hidden", "false");
  }
  function closeLightbox() { $("lightbox").classList.remove("open"); $("lightbox").setAttribute("aria-hidden", "true"); }
  $("lightboxClose").addEventListener("click", closeLightbox);
  $("lightbox").addEventListener("click", e => { if (e.target === $("lightbox")) closeLightbox(); });
  $("lightboxPrev").addEventListener("click", () => { currentPhoto = (currentPhoto - 1 + gallery.length) % gallery.length; openLightbox(); });
  $("lightboxNext").addEventListener("click", () => { currentPhoto = (currentPhoto + 1) % gallery.length; openLightbox(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

  const videos = a.videos || [];
  function getYouTubeVideoId(value) {
    try {
      const url = new URL(value);
      const host = url.hostname.replace(/^www\./, "");
      if (host === "youtu.be") return validVideoId(url.pathname.slice(1).split("/")[0]);
      if (host !== "youtube.com" && host !== "m.youtube.com" && host !== "youtube-nocookie.com") return "";
      const parts = url.pathname.split("/").filter(Boolean);
      const id = parts[0] === "watch" ? url.searchParams.get("v") : parts[0] === "embed" || parts[0] === "shorts" || parts[0] === "live" ? parts[1] : "";
      return validVideoId(id);
    } catch {
      return "";
    }
  }
  function validVideoId(value) {
    return typeof value === "string" && /^[\w-]{11}$/.test(value) ? value : "";
  }
  const categories = ["Todos", ...new Set(videos.map(v => v.category).filter(Boolean))];
  let activeCategory = "Todos";
  $("videoFilters").innerHTML = categories.map((cat, i) => `<button type="button" class="filter-btn ${i === 0 ? "active" : ""}" data-category="${cat}">${cat}</button>`).join("");
  $("videoFilters").addEventListener("click", e => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    activeCategory = btn.dataset.category;
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.toggle("active", b === btn));
    renderVideos();
  });
  function renderVideos() {
    const filtered = videos.filter(v => activeCategory === "Todos" || v.category === activeCategory);
    $("videoCount").textContent = `${filtered.length} ${filtered.length === 1 ? "VÍDEO" : "VÍDEOS"}`;
    $("videoGrid").innerHTML = filtered.length ? filtered.map(v => `
      <article class="video-card">
        <button class="video-thumb" type="button" data-video-id="${getYouTubeVideoId(v.url)}" aria-label="Reproduzir: ${v.title}">
          ${v.thumbnail ? `<img class="video-thumbnail" src="${v.thumbnail}" alt="" loading="lazy">` : getYouTubeVideoId(v.url) ? `<img class="video-thumbnail" src="https://img.youtube.com/vi/${getYouTubeVideoId(v.url)}/hqdefault.jpg" alt="" loading="lazy">` : ""}
          <span class="video-type">${v.category || "VÍDEO"}</span><span class="play" aria-hidden="true">▶</span><span class="video-duration">${v.duration || ""}</span>
        </button>
        <div class="video-details"><div><strong>${v.title}</strong><small>${v.date || ""}</small></div><button class="video-open" type="button" data-video-id="${getYouTubeVideoId(v.url)}">Assistir ▶</button></div>
      </article>`).join("") : `<div class="empty-videos">Nenhum vídeo cadastrado nesta categoria.</div>`;
    $("videoGrid").querySelectorAll("[data-video-id]").forEach(button => button.addEventListener("click", () => {
      const card = button.closest(".video-card");
      const videoId = button.dataset.videoId;
      if (!videoId) { showToast("Adicione uma URL válida do YouTube em data.js"); return; }
      const thumbnail = card.querySelector(".video-thumb");
      if (!thumbnail) return;
      const player = document.createElement("iframe");
      player.className = "video-player";
      player.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
      player.title = `Reprodutor de vídeo: ${card.querySelector(".video-details strong").textContent}`;
      player.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      player.referrerPolicy = "strict-origin-when-cross-origin";
      player.allowFullscreen = true;
      thumbnail.replaceWith(player);
      const playLink = card.querySelector(".video-open");
      if (playLink) playLink.remove();
    }));
  }
  renderVideos();

  $("shareButton").addEventListener("click", async () => {
    const shareData = { title: document.title, text: `Confira o perfil esportivo de ${safe(a.name, "atleta")}.`, url: location.href };
    try {
      if (navigator.share) await navigator.share(shareData);
      else if (navigator.clipboard) { await navigator.clipboard.writeText(location.href); showToast("Link do perfil copiado!"); }
      else showToast("Copie o endereço desta página para compartilhar.");
    } catch (err) { if (err.name !== "AbortError") showToast("Não foi possível compartilhar agora."); }
  });

  function renderRadar(items) {
    const svg = $("radarChart"), cx = 210, cy = 164, radius = 112;
    if (!items.length) return;
    const n = items.length;
    const point = (i, scale) => {
      const angle = -Math.PI / 2 + (2 * Math.PI * i / n);
      return [cx + Math.cos(angle) * radius * scale, cy + Math.sin(angle) * radius * scale];
    };
    let markup = "";
    [0.25,0.5,0.75,1].forEach(scale => {
      const pts = items.map((_,i) => point(i,scale).join(",")).join(" ");
      markup += `<polygon points="${pts}" fill="none" stroke="#40505d" stroke-width="1"/>`;
    });
    items.forEach((item,i) => {
      const [x,y] = point(i,1);
      markup += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="#40505d" stroke-width="1"/>`;
    });
    const values = items.map((item,i) => point(i,clamp(item.value)/100).join(",")).join(" ");
    markup += `<polygon points="${values}" fill="#1c49ab" fill-opacity=".22" stroke="#1c49ab" stroke-width="2.5"/>`;
    items.forEach((item,i) => {
      const [x,y] = point(i,1.22);
      const anchor = x < cx-8 ? "end" : x > cx+8 ? "start" : "middle";
      markup += `<text x="${x}" y="${y}" fill="#c3cdd4" font-size="10" text-anchor="${anchor}" dominant-baseline="middle">${item.name}</text>`;
    });
    svg.innerHTML = markup;
  }
  function clamp(v) { return Math.max(0, Math.min(100, Number(v) || 0)); }
  let toastTimer;
  function showToast(message) {
    const el = $("toast"); el.textContent = message; el.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
  }
})();