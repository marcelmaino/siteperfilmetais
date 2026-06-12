/* =========================================================
   PERFIL METAIS — Render da página interna de produto
   Lê ?p=slug e popula o template produto.html a partir
   de window.PRODUTOS (produtos-data.js).
   ========================================================= */
(function () {
  "use strict";

  const data = window.PRODUTOS || {};
  const order = window.PRODUTOS_ORDER || Object.keys(data);

  const params = new URLSearchParams(location.search);
  let slug = (params.get("p") || "").toLowerCase();
  if (!data[slug]) slug = order[0]; // fallback para o primeiro produto

  const p = data[slug];
  const $ = (id) => document.getElementById(id);

  if (!p) {
    const app = $("produtoApp");
    if (app) {
      app.innerHTML =
        '<section class="pt-44 pb-32 text-center"><div class="mx-auto max-w-xl px-5"><p class="eyebrow justify-center mb-6">Produto não encontrado</p><h1 class="font-display font-extrabold text-4xl text-white mb-6">Ops, não achamos esse produto.</h1><a href="produtos.html" class="btn btn-primary">Ver todos os produtos →</a></div></section>';
    }
    return;
  }

  /* expõe nome do produto para o reset do formulário */
  window.__PRODUTO_NOME = p.name;

  const setText = (id, txt) => { const el = $(id); if (el) el.textContent = txt; };
  const setImg = (id, src, alt) => {
    const el = $(id);
    if (!el) return;
    el.style.display = ""; // reverte o onerror disparado pelo src="" inicial
    el.onerror = function () { this.style.display = "none"; };
    el.alt = alt || "";
    el.src = src;
  };

  /* ---- Cabeçalho / hero ---- */
  document.title = p.name + " — Perfil Metais";
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", p.name + ": " + (p.tagline || "") + " Especificações, fotos e formulário de interesse.");

  setText("pCrumb", p.name);
  setText("pNum", p.num || "");
  setText("pName", p.name);
  setText("pTagline", p.tagline || "");
  setText("pIntro", p.intro || "");
  setText("pNameForm", p.name);
  setImg("pHeroBg", p.hero, "");

  const formProduto = $("formProduto");
  if (formProduto) formProduto.value = p.name;

  /* ---- Imagem principal + destaques ---- */
  const gallery = Array.isArray(p.gallery) ? p.gallery : [];
  setImg("pGalleryMain", gallery[0] || p.hero, p.name);

  /* Coluna lateral: destaques de especificação (marca), em vez de fotos genéricas */
  const thumbs = $("pGalleryThumbs");
  if (thumbs) {
    const highlights = (p.specs || []).slice(0, 2);
    thumbs.innerHTML =
      highlights
        .map(
          (s) =>
            '<div class="card-line p-6 flex flex-col justify-between min-h-[150px]">' +
            '<span class="font-mono text-xs tracking-widest text-molten">' +
            s.label.toUpperCase() +
            "</span>" +
            '<span class="font-display font-bold text-xl text-white mt-3 leading-tight">' +
            s.value +
            "</span></div>"
        )
        .join("") +
      '<a href="#interesse" class="card-line p-6 flex items-center justify-between group bg-molten/10 hover:bg-molten/20">' +
      '<span class="font-display font-bold text-xl text-white">Pedir este produto</span>' +
      '<span class="text-molten text-2xl group-hover:translate-x-1 transition">→</span></a>';
  }

  /* ---- Especificações ---- */
  const specs = $("pSpecs");
  if (specs) {
    specs.innerHTML = (p.specs || [])
      .map(
        (s) =>
          '<div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 py-4 border-b border-steel-800">' +
          '<dt class="font-mono text-xs tracking-widest text-steel-500 sm:w-56 shrink-0">' +
          s.label.toUpperCase() +
          "</dt>" +
          '<dd class="text-white font-head font-medium text-lg">' +
          s.value +
          "</dd></div>"
      )
      .join("");
  }

  /* ---- Aplicações ---- */
  const apps = $("pApplications");
  if (apps) {
    apps.innerHTML = (p.applications || [])
      .map(
        (a) =>
          '<li class="flex items-center gap-4 p-4 card-line"><span class="text-molten font-mono text-sm">→</span><span class="text-steel-200 font-head font-medium text-lg">' +
          a +
          "</span></li>"
      )
      .join("");
  }

  /* ---- Relacionados (4 outros produtos) ---- */
  const related = $("pRelated");
  if (related) {
    const others = order.filter((s) => s !== slug).slice(0, 4);
    related.innerHTML = others
      .map((s) => {
        const o = data[s];
        return (
          '<a href="produto.html?p=' +
          s +
          '" class="product-card group block aspect-[4/3] img-fallback">' +
          '<img src="' +
          (o.gallery && o.gallery[0] ? o.gallery[0] : o.hero) +
          '" onerror="this.style.display=\'none\'" alt="' +
          o.name +
          '" class="absolute inset-0 w-full h-full object-cover opacity-55" />' +
          '<div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent"></div>' +
          '<div class="relative h-full flex flex-col justify-between p-5">' +
          '<span class="font-mono text-xs text-molten">' +
          o.num +
          "</span>" +
          '<div><h3 class="font-display font-bold text-xl text-white">' +
          o.name +
          '</h3><span class="font-mono text-xs text-steel-400 group-hover:text-molten transition">Ver produto →</span></div>' +
          "</div></a>"
        );
      })
      .join("");
  }
})();
