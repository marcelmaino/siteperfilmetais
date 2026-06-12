/* =========================================================
   PERFIL METAIS — Base de dados dos produtos
   Edite aqui specs, fotos e textos de cada produto.
   As páginas internas (produto.html?p=slug) leem deste objeto.
   ========================================================= */
var IMG = "https://www.perfilmetais.ind.br/painel/admin/upload/produtos/";

window.PRODUTOS = {
  acessorios: {
    num: "01",
    name: "Acessórios",
    tagline: "Tudo para a serralheria e a obra em um só lugar.",
    intro:
      "Linha completa de acessórios para serralheria, soldagem e fixação. Itens de giro rápido para complementar projetos em ferro e aço com a praticidade de quem atende no atacado e no varejo.",
    hero: IMG + "des_129_acessoriosI.png",
    gallery: [
      IMG + "des_129_acessoriosI.png",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80",
    ],
    specs: [
      { label: "Categorias", value: "Fixação, soldagem, corte e abrasivos" },
      { label: "Itens", value: "Parafusos, eletrodos, discos, brocas, dobradiças" },
      { label: "Material", value: "Aço carbono, aço inox, zincado" },
      { label: "Atendimento", value: "Atacado e varejo" },
    ],
    applications: ["Serralheria", "Manutenção industrial", "Construção civil", "Montagens metálicas"],
  },

  acm: {
    num: "02",
    name: "ACM",
    tagline: "Revestimento moderno para fachadas que impressionam.",
    intro:
      "O ACM (Aluminum Composite Material) é uma placa composta por duas lâminas de alumínio e um núcleo polimérico. Leve, rígido e versátil, é a solução ideal para fachadas ventiladas, painéis e comunicação visual.",
    hero: IMG + "des_137_acm.jpg",
    gallery: [
      IMG + "des_137_acm.jpg",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=900&q=80",
    ],
    specs: [
      { label: "Espessura total", value: "3 mm e 4 mm" },
      { label: "Lâmina de alumínio", value: "0,21 mm a 0,50 mm" },
      { label: "Dimensões", value: "1.220 × 2.440 / 3.050 / 6.000 mm" },
      { label: "Acabamentos", value: "PE, PVDF, brilho, fosco e metálicos" },
      { label: "Núcleo", value: "Polietileno / mineral antichama" },
    ],
    applications: ["Fachadas ventiladas", "Painéis decorativos", "Comunicação visual", "Forros e totens"],
  },

  bobinas: {
    num: "03",
    name: "Bobinas",
    tagline: "Aço em bobina pronto para a sua linha de produção.",
    intro:
      "Bobinas de aço laminadas a quente, a frio e galvanizadas para indústrias que transformam metal em escala. Fornecemos com regularidade e qualidade para alimentar processos de corte, conformação e estampagem.",
    hero: IMG + "des_130_bobinas.jpg",
    gallery: [
      IMG + "des_130_bobinas.jpg",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1487875961445-47a00398c267?auto=format&fit=crop&w=900&q=80",
    ],
    specs: [
      { label: "Processos", value: "Laminada a quente (LQ), a frio (LF) e galvanizada (GI)" },
      { label: "Espessura", value: "0,43 mm a 6,35 mm" },
      { label: "Largura", value: "Até 1.500 mm" },
      { label: "Acabamento", value: "Decapada, óleo, zincada" },
      { label: "Serviço", value: "Desbobinamento e corte sob medida" },
    ],
    applications: ["Indústria metalúrgica", "Estamparia", "Tubos e perfis", "Telhas e implementos"],
  },

  calhas: {
    num: "04",
    name: "Calhas",
    tagline: "Captação de água com acabamento e durabilidade.",
    intro:
      "Calhas, rufos e condutores fabricados em aço galvanizado e galvalume. Produzidos sob medida para a perfeita drenagem pluvial de coberturas residenciais, comerciais e industriais.",
    hero: IMG + "des_131_calhas.jpg",
    gallery: [
      IMG + "des_131_calhas.jpg",
      "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
    ],
    specs: [
      { label: "Tipos", value: "Calha, rufo, pingadeira e condutor" },
      { label: "Material", value: "Galvanizado e galvalume" },
      { label: "Espessura", value: "0,43 mm a 0,80 mm" },
      { label: "Desenvolvimento", value: "Sob medida, conforme projeto" },
      { label: "Dobras", value: "Diversos perfis e cortes" },
    ],
    applications: ["Coberturas residenciais", "Galpões industriais", "Comércios", "Reformas"],
  },

  chapas: {
    num: "05",
    name: "Chapas",
    tagline: "A base de todo projeto em aço, na medida certa.",
    intro:
      "Chapas de aço em diversas espessuras e acabamentos: lisas, xadrez e galvanizadas. Cortamos e dobramos com precisão para entregar a peça exata que o seu projeto exige.",
    hero: IMG + "des_132_chapas.jpg",
    gallery: [
      IMG + "des_132_chapas.jpg",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80",
    ],
    specs: [
      { label: "Tipos", value: "Lisa, xadrez e galvanizada" },
      { label: "Processo", value: "Laminada a quente e a frio" },
      { label: "Espessura", value: "0,90 mm a 25,40 mm" },
      { label: "Dimensões", value: "1.000 × 2.000 / 1.200 × 3.000 mm" },
      { label: "Serviços", value: "Corte a laser, dobra, furação e calandra" },
    ],
    applications: ["Estruturas metálicas", "Pisos industriais", "Implementos", "Caldeiraria"],
  },

  inox: {
    num: "06",
    name: "Inox",
    tagline: "Resistência e acabamento que não enferrujam.",
    intro:
      "Aço inoxidável em chapas, tubos e barras nas séries 304, 316 e 430. Combina resistência à corrosão, higiene e estética para aplicações que exigem o melhor desempenho.",
    hero: IMG + "des_138_p_tubos-de-aco-inox-11.jpg",
    gallery: [
      IMG + "des_138_p_tubos-de-aco-inox-11.jpg",
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?auto=format&fit=crop&w=900&q=80",
    ],
    specs: [
      { label: "Ligas", value: "AISI 304, 316 e 430" },
      { label: "Formatos", value: "Chapas, tubos, barras e cantoneiras" },
      { label: "Acabamento", value: "Polido, escovado e fosco (2B)" },
      { label: "Espessura (chapa)", value: "0,40 mm a 6,00 mm" },
      { label: "Resistência", value: "Anticorrosiva e higiênica" },
    ],
    applications: ["Indústria alimentícia", "Cozinhas industriais", "Arquitetura", "Equipamentos"],
  },

  laminados: {
    num: "07",
    name: "Laminados",
    tagline: "Perfis e barras laminados para estrutura e serralheria.",
    intro:
      "Produtos siderúrgicos laminados: barras, vergalhões, cantoneiras, barras chatas e perfis. A matéria-prima confiável para estruturas, serralheria e fabricação metálica.",
    hero: IMG + "des_133_laminados.jpg",
    gallery: [
      IMG + "des_133_laminados.jpg",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80",
    ],
    specs: [
      { label: "Produtos", value: "Barra redonda, quadrada, chata e cantoneira" },
      { label: "Vergalhões", value: "CA-50 e CA-60" },
      { label: "Bitolas", value: "Diversas, sob consulta" },
      { label: "Material", value: "Aço carbono" },
      { label: "Comprimento", value: "Barras de 6 e 12 metros" },
    ],
    applications: ["Serralheria", "Estruturas", "Concreto armado", "Fabricação metálica"],
  },

  "perfil-especial": {
    num: "08",
    name: "Perfil Especial",
    tagline: "Perfis sob medida para o seu projeto exclusivo.",
    intro:
      "Fabricação de perfis especiais conforme o desenho e a aplicação do cliente. Desenvolvemos seções personalizadas em aço para atender demandas específicas de indústria e construção.",
    hero: IMG + "des_134_perfilespecial.jpg",
    gallery: [
      IMG + "des_134_perfilespecial.jpg",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1487875961445-47a00398c267?auto=format&fit=crop&w=900&q=80",
    ],
    specs: [
      { label: "Fabricação", value: "Sob medida, conforme desenho" },
      { label: "Processo", value: "Conformação e dobra a frio" },
      { label: "Material", value: "Aço carbono e galvanizado" },
      { label: "Espessura", value: "Conforme projeto" },
      { label: "Desenvolvimento", value: "Engenharia de aplicação" },
    ],
    applications: ["Projetos industriais", "Máquinas e equipamentos", "Soluções customizadas", "OEM"],
  },

  "perfil-estrutural": {
    num: "09",
    name: "Perfil Estrutural",
    tagline: "A espinha dorsal de galpões e edificações.",
    intro:
      "Perfis estruturais para construção metálica: U, U enrijecido (UDC), cantoneiras, vigas e tubos estruturais. Resistência e padronização para estruturas seguras e eficientes.",
    hero: IMG + "des_135_estrutural.jpg",
    gallery: [
      IMG + "des_135_estrutural.jpg",
      "https://images.unsplash.com/photo-1487875961445-47a00398c267?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80",
    ],
    specs: [
      { label: "Perfis", value: "U, UDC (enrijecido), cantoneira e viga" },
      { label: "Tubos", value: "Estruturais quadrado e retangular" },
      { label: "Espessura", value: "1,20 mm a 6,35 mm" },
      { label: "Norma", value: "Conforme NBR / ASTM" },
      { label: "Comprimento", value: "6 e 12 metros" },
    ],
    applications: ["Galpões e barracões", "Mezaninos", "Coberturas", "Estruturas metálicas"],
  },

  "perfil-perfilado": {
    num: "10",
    name: "Perfil Perfilado",
    tagline: "Perfis conformados a frio com leveza e precisão.",
    intro:
      "Perfis perfilados a frio para drywall, telhas, terças e fechamentos. Leves, padronizados e econômicos, ideais para montagens rápidas e estruturas leves.",
    hero: IMG + "des_136_perfilados.jpg",
    gallery: [
      IMG + "des_136_perfilados.jpg",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
    ],
    specs: [
      { label: "Tipos", value: "Terças, montantes, guias e cartolas" },
      { label: "Processo", value: "Perfilado a frio" },
      { label: "Material", value: "Aço galvanizado e zincado" },
      { label: "Espessura", value: "0,43 mm a 3,00 mm" },
      { label: "Comprimento", value: "Sob medida" },
    ],
    applications: ["Drywall e steel frame", "Terças de cobertura", "Fechamentos", "Forros"],
  },

  telhas: {
    num: "11",
    name: "Telhas",
    tagline: "Telhas metálicas sob medida que protegem e valorizam.",
    intro:
      "Fabricação própria de telhas metálicas sob medida nos perfis trapezoidal, ondulado e termoacústico. Um produto que valoriza, protege e embeleza o seu patrimônio.",
    hero: IMG + "des_139_TELHAS03.jpg",
    gallery: [
      IMG + "des_139_TELHAS03.jpg",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
    ],
    specs: [
      { label: "Perfis", value: "Trapezoidal, ondulada e termoacústica" },
      { label: "Material", value: "Galvalume, galvanizada e pré-pintada" },
      { label: "Espessura", value: "0,43 mm a 0,80 mm" },
      { label: "Comprimento", value: "Sob medida (fabricação própria)" },
      { label: "Cores", value: "Diversas, sob consulta" },
    ],
    applications: ["Coberturas industriais", "Galpões", "Residências", "Fechamentos laterais"],
  },

  tubos: {
    num: "12",
    name: "Tubos",
    tagline: "Tubos para estrutura, mecânica e condução.",
    intro:
      "Tubos de aço com e sem costura nos formatos redondo, quadrado e retangular. Versatilidade para estruturas, móveis, mecânica e aplicações industriais diversas.",
    hero: IMG + "des_126_tubos2.jpg",
    gallery: [
      IMG + "des_126_tubos2.jpg",
      "https://images.unsplash.com/photo-1487875961445-47a00398c267?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=80",
    ],
    specs: [
      { label: "Formatos", value: "Redondo, quadrado e retangular" },
      { label: "Tipos", value: "Industrial, mecânico e estrutural" },
      { label: "Diâmetro", value: '3/8" a 12"' },
      { label: "Parede", value: "0,90 mm a 6,00 mm" },
      { label: "Costura", value: "Com e sem costura" },
    ],
    applications: ["Estruturas metálicas", "Móveis e corrimãos", "Mecânica", "Condução"],
  },

  "telhas-metalicas": {
    num: "13",
    name: "Telhas Metálicas",
    tagline: "Cobertura metálica que protege e valoriza o patrimônio.",
    intro:
      "Fabricação própria de telhas metálicas em diversos perfis e acabamentos. Leves, resistentes e produzidas sob medida, garantem cobertura eficiente e durável para qualquer projeto.",
    hero: IMG + "des_139_TELHAS03.jpg",
    gallery: [
      IMG + "des_139_TELHAS03.jpg",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
    ],
    specs: [
      { label: "Perfis", value: "Trapezoidal, ondulada, termoacústica e autoportante" },
      { label: "Material", value: "Galvalume, galvanizada e pré-pintada" },
      { label: "Espessura", value: "0,43 mm a 0,80 mm" },
      { label: "Comprimento", value: "Sob medida (fabricação própria)" },
      { label: "Isolamento", value: "Opção termoacústica (EPS / PU)" },
    ],
    applications: ["Coberturas industriais", "Galpões e barracões", "Residências", "Fechamentos laterais"],
  },

  "corte-laser-oxicorte": {
    num: "14",
    name: "Corte a Laser e Oxicorte",
    tagline: "Precisão de corte para peças sob desenho.",
    intro:
      "Serviço de corte a laser e oxicorte para transformar chapas em peças exatas conforme o seu projeto. Alta precisão para o laser e grande capacidade de espessura no oxicorte.",
    hero: IMG + "des_132_chapas.jpg",
    gallery: [
      IMG + "des_132_chapas.jpg",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=80",
    ],
    specs: [
      { label: "Processos", value: "Corte a laser (fibra) e oxicorte" },
      { label: "Espessura (laser)", value: "Até 20 mm" },
      { label: "Espessura (oxicorte)", value: "Até 100 mm" },
      { label: "Materiais", value: "Aço carbono, inox e galvanizado" },
      { label: "Arquivos", value: "DXF / DWG conforme desenho" },
    ],
    applications: ["Peças sob medida", "Sinalização e recortes", "Indústria", "Serralheria"],
  },

  "dobras-chapas": {
    num: "15",
    name: "Dobras de Chapas",
    tagline: "Conformação precisa em diversas espessuras.",
    intro:
      "Corte e dobra de chapas com precisão para diversos tamanhos e espessuras. Entregamos a peça pronta e no formato exato, com furação e calandra para complementar.",
    hero: IMG + "des_135_estrutural.jpg",
    gallery: [
      IMG + "des_135_estrutural.jpg",
      "https://images.unsplash.com/photo-1487875961445-47a00398c267?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80",
    ],
    specs: [
      { label: "Comprimento de dobra", value: "Até 3.000 mm" },
      { label: "Espessura", value: "Até 12 mm (conforme material)" },
      { label: "Ângulos", value: "Diversos, conforme projeto" },
      { label: "Serviços", value: "Corte, furação e calandra" },
      { label: "Acabamento", value: "Peça pronta para uso" },
    ],
    applications: ["Perfis especiais", "Peças dobradas sob medida", "Estruturas", "Implementos"],
  },

  "produtos-gaveta": {
    num: "16",
    name: "Produtos de Gaveta",
    tagline: "Itens de pronta-entrega para o seu dia a dia.",
    intro:
      "Linha de produtos de pronta-entrega e giro rápido, sempre disponíveis em estoque. A solução ágil para reposição, manutenção e pequenas demandas — no atacado e no varejo.",
    hero: IMG + "des_129_acessoriosI.png",
    gallery: [
      IMG + "des_129_acessoriosI.png",
      "https://images.unsplash.com/photo-1581092160607-7baf19073b1f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80",
    ],
    specs: [
      { label: "Disponibilidade", value: "Pronta-entrega (itens em estoque)" },
      { label: "Itens", value: "Chapas, tubos, barras e acessórios cortados" },
      { label: "Quantidade", value: "Varejo e atacado" },
      { label: "Retirada", value: "Balcão ou entrega com frota própria" },
      { label: "Ideal para", value: "Reposição e demandas rápidas" },
    ],
    applications: ["Serralheria", "Manutenção", "Pequenas obras", "Reposição rápida"],
  },
};

window.PRODUTOS_ORDER = [
  "acessorios", "acm", "bobinas", "calhas", "chapas", "inox",
  "laminados", "perfil-especial", "perfil-estrutural", "perfil-perfilado", "telhas", "tubos",
  "telhas-metalicas", "corte-laser-oxicorte", "dobras-chapas", "produtos-gaveta",
];
