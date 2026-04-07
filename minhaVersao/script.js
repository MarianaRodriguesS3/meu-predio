// LÓGICA DO DIRETÓRIO

// ESTADO GLOBAL
let estado = {
  busca: "",
  categoria: "todos",
  somenteVazias: false,
};

// Cache debounce
let debounceTimeout;

// INICIALIZAÇÃO
window.onload = function () {
  configurarTema();
  preprocessarEstabelecimentos();
  renderizarFiltros();
  exibirSkeletons();

  // Render inicial
  setTimeout(() => aplicarFiltros(), 500);

  // Input de busca
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.addEventListener("input", buscarDebounced);
};

// PRÉ-PROCESSAMENTO
function preprocessarEstabelecimentos() {
  estabelecimentos.forEach((e) => {
    e._search = normalizar(
      `${e.nome || ""} ${e.desc || ""} ${e.sala || ""} ${e.cat || ""} ${e.andar || ""}`
    );
  });
}

// DEBOUNCE BUSCA
function buscarDebounced() {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    const input = document.getElementById("searchInput");
    estado.busca = input ? normalizar(input.value) : "";
    aplicarFiltros();
  }, 250);
}

// FILTROS
const ORDEM_CATEGORIAS = ["Saúde", "Direito", "Estética", "Educação", "Outros"];

function renderizarFiltros() {
  const container = document.querySelector(".filters");
  if (!container) return;
  container.innerHTML = "";

  // Botão "Todos"
  const todosBtn = criarBotaoFiltro("Todos", "todos");
  container.appendChild(todosBtn);

  // Botões de categoria
  ORDEM_CATEGORIAS.forEach((cat) => {
    if (estabelecimentos.some((e) => !e.vazia && e.cat === cat)) {
      container.appendChild(criarBotaoFiltro(cat, cat));
    }
  });

  // Botão salas vazias
  container.appendChild(criarBotaoFiltro("🏢 Salas Disponíveis", "vazias"));

  todosBtn.classList.add("active");
}

function criarBotaoFiltro(label, categoria) {
  const btn = document.createElement("button");
  btn.className = "filter-btn";
  btn.textContent = label;

  if (categoria === "vazias") {
    btn.classList.add("btn-negocios");
    btn.onclick = () => filterVazias(btn);
  } else {
    btn.onclick = () => filter(categoria, btn);
  }

  return btn;
}

// APLICAR FILTROS
function aplicarFiltros() {
  console.time("render");
  let lista = [...estabelecimentos];

  if (estado.busca) {
    lista = lista.filter((e) => e._search.includes(estado.busca));
  }

  if (estado.categoria !== "todos") {
    lista = lista.filter((e) => !e.vazia && e.cat === estado.categoria);
  }

  if (estado.somenteVazias) {
    lista = lista.filter((e) => e.vazia);
  }

  renderizarCards(lista);
  console.info("Filtro aplicado", estado);
  console.timeEnd("render");
}

// RENDER CARDS
function renderizarCards(lista) {
  const container = document.getElementById("directory");
  container.innerHTML = "";

  if (!lista || lista.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <h3>Nenhum resultado encontrado</h3>
        <p>Tente ajustar sua busca ou filtros.</p>
      </div>
    `;
    return;
  }

  const listaOrdenada = [...lista].sort((a, b) => {
    if (a.andar === "Interm.") return 1;
    if (b.andar === "Interm.") return -1;
    return b.andar - a.andar;
  });

  const fragment = document.createDocumentFragment();

  listaOrdenada.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "card" + (item.vazia ? " card-vazia" : "");
    card.style.animationDelay = `${index * 0.02}s`;

    const labelAndar =
      typeof item.andar === "number" ? `${item.andar}º Andar` : item.andar;
    const nomeFinal = item.vazia ? "SALA DISPONÍVEL" : item.nome || "Não informado";
    const descFinal = item.vazia
      ? "Excelente oportunidade para o seu negócio. Entre em contato com a administração!"
      : item.desc || "Descrição não disponível";
    const seloFinal = item.vazia ? "Vazia" : item.cat || "";

    const floor = document.createElement("span");
    floor.className = "floor";
    floor.textContent = `${labelAndar} - Sala ${item.sala || "?"}`;

    const h3 = document.createElement("h3");
    h3.textContent = nomeFinal;

    const p = document.createElement("p");
    p.textContent = descFinal;

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = seloFinal;

    card.appendChild(floor);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(badge);

    fragment.appendChild(card);
  });

  container.appendChild(fragment);
}

// FUNÇÕES DE FILTRO
function filter(categoria, btn) {
  ativarBotao(btn);
  estado.categoria = categoria.toLowerCase() === "todos" ? "todos" : categoria;
  estado.somenteVazias = false;
  aplicarFiltros();
}

function filterVazias(btn) {
  ativarBotao(btn);
  estado.somenteVazias = true;
  estado.categoria = "todos";
  aplicarFiltros();
}

// NORMALIZAÇÃO
function normalizar(texto) {
  return texto
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// BOTÃO ATIVO
function ativarBotao(btn) {
  document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
}

// TEMA CLARO/ESCURO
function configurarTema() {
  const btn = document.getElementById("theme-toggle");
  const aplicar = (t) => {
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("theme", t);
  };

  const salvo = localStorage.getItem("theme") || "light";
  aplicar(salvo);

  if (btn) {
    btn.addEventListener("click", () => {
      const atual = document.documentElement.getAttribute("data-theme");
      aplicar(atual === "dark" ? "light" : "dark");
    });
  }
}

// SKELETONS
function exibirSkeletons() {
  const container = document.getElementById("directory");
  container.innerHTML = Array(8).fill('<div class="card-skeleton"></div>').join("");
}

// PREPARAÇÃO PARA API FUTURA
async function fetchDados() {
  try {
    const res = await fetch("/api/salas");
    return await res.json();
  } catch (e) {
    console.error("Erro ao carregar dados", e);
    return [];
  }
}

// Evento customizado de atualização
window.dispatchEvent(new CustomEvent("salasAtualizadas"));