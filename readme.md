# 🏢 Diretório Digital: Edifício Stella Central

> **Status do Projeto:** 🚀 Concluído & Funcional  
> Uma solução moderna para localização de estabelecimentos comerciais, focada em UX e Design responsivo.

---

## 📋 Índice

- [x] [Visão Geral](#-visão-geral)
- [x] [Funcionalidades Principais](#-funcionalidades-principais)
- [x] [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [x] [Decisões de Engenharia](#-decisões-de-engenharia)
- [x] [Como Executar](#-como-executar)

---

## 🧐 Visão Geral 🏗️

Este projeto transforma a sinalética física de um prédio comercial numa interface digital dinâmica. A solução foca-se em eliminar a repetição visual e proporcionar uma navegação fluida para os visitantes do edifício.

## ✨ Funcionalidades Principais

- 🔍 **Busca Inteligente:** Pesquisa instantânea por nome, sala ou especialidade.
- 🌓 **Modo Noturno Automático:** Alternância de tema com persistência via `localStorage`.
- ⏳ **Skeleton Screen:** Interface de carregamento profissional com efeito _shimmer_.
- 🎯 **Filtros por Categoria:** Segmentação por Saúde, Direito, Estética e Educação.
- 📱 **Mobile First:** Totalmente otimizado para smartphones.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico:** Estrutura focada em acessibilidade.
- **CSS3 Moderno:** Variáveis nativas, Grid Layout e animações otimizadas.
- **JavaScript Vanilla:** Lógica pura (Zero dependências externas).

---
 
## 🧠 Tomadas de Decisão de Engenharia e Arquitetura do Projeto

Nesta seção, detalhamos os 10 pontos fundamentais que guiaram o desenvolvimento do **Diretório Stella Central**, focando em performance, UX e escalabilidade.

### 1. 📂 Engenharia e Inserção de Dados
* **Dados Reais:** Transcrição integral de todos os profissionais (advogados, dentistas, psicólogos, laboratórios) a partir das imagens do diretório físico.
* **Mapeamento de Vacância:** Identificação estratégica de salas sem placa através da propriedade `vazia: true`, permitindo um tratamento diferenciado no sistema.
* **Lógica de Ordenação:** O script organiza os andares do 12º para o 1º, deixando o "Intermediário" e "Garagem" por último, simulando a vista real de quem entra no prédio.
* **Otimização de Performance:** Renderização via `.map().join('')`, garantindo que a lista gigante carregue de forma fluida e rápida.

### 2. 🛡️ Lógica de Negócios e Filtros
* **Objetivo de Marketing:** Ao filtrar por "Salas Vazias", o sistema ignora categorias padrão e foca na captação de parceiros ("Venha ser parceiro").
* **Filtro Inteligente:** Categorias como "Saúde" ou "Direito" escondem automaticamente salas vazias (`!e.vazia`), mantendo a lista limpa e profissional.
* **Persistência de Preferências:** Uso de `localStorage` para salvar a escolha do tema (Claro/Escuro), evitando que o site "pisque" ao recarregar.
* **Busca Nível Google:** Função de normalização **NFD** que ignora acentos e cedilhas, facilitando a localização de nomes como "Tânia".

### 3. 🎨 Design System e UI "Senior"
* **Semântica Visual:** Uso de bordas `dashed` (tracejadas) para salas vazias, uma convenção de design que sugere espaço disponível para ocupação.
* **Variáveis de Design:** Criação da variável `--accent-vazia` para garantir consistência visual em todo o projeto e facilidade de manutenção.
* **Layout Alinhado (Flex-Grow):** Uso de `flex-grow: 1` nos parágrafos para que os selos (*badges*) fiquem sempre alinhados na base do card, independentemente do tamanho do texto.
* **Identidade Visual Moderna:** Implementação de `clip-path` no Hero e tipografia **Inter** para um aspeto de produto digital moderno.

### 4. 📱 Responsividade e Acessibilidade
* **Mobile First:** Configuração de Meta Tag Viewport e Grid Layout para que o site funcione perfeitamente em qualquer smartphone à porta do prédio.
* **Contraste no Dark Mode:** Cores selecionadas especificamente para manter alto contraste e legibilidade para pessoas com dificuldades visuais.
* **Transições Fluidas:** Uso de `transition: 0.3s ease` para que a mudança de tema e interações de hover sejam suaves e não "secas".

### 5. 📚 Documentação Técnica de Implementação
* **Engenharia de Estados:** Uso de propriedades booleanas como a forma mais limpa de gerir ocupação de salas.
* **Código Conciso:** Aplicação de operadores ternários para manter a renderização condicional simples e legível.
* **Feedback Imediato:** Uso do evento `onkeyup="buscar()"` para que o utilizador veja resultados enquanto digita, sem necessidade de clicar em "pesquisar".
* **Skeleton Screen:** O uso de *shimmers* e um pequeno delay de carregamento aumentam a percepção de que o sistema está a consultar uma base de dados robusta.

---

### ⚡ Performance

- **Renderização em Lote:** Otimização do DOM para evitar travamentos durante a busca.
- **Normalização de Strings:** Implementação de Regex para que a busca ignore acentos e letras maiúsculas/minúsculas.

---

## 🚀 Como Executar

1. Baixe os arquivos `index.html`, `style.css` e `script.js`.
2. Coloque-os na mesma pasta.
3. Abra o `index.html` no seu navegador.

---

## 🛠️ QA (Quality Assurance) do Projeto

1. Ícone na barra de busca: Check-list de QA Final da Busca: Para considerares esta tarefa "100% concluída", faz estes três testes rápidos no teu navegador:

- [x] Teste de Sobreposição: Digita uma frase bem longa. O texto deve "desaparecer" antes de tocar na lupa (isso confirma que o padding-right: 60px está a funcionar).
- [x] Teste de Clique: Tenta clicar exatamente em cima da lupa. O cursor deve aparecer dentro do campo de texto (isso confirma que o pointer-events: none está a funcionar).
- [x] Teste de Responsividade: Diminui o tamanho da janela do navegador. A lupa deve manter-se fixa na direita, acompanhando o redimensionamento da barra.

2. Responsividade 

- [x] Teste do smartphone 

---


## 🚀 Próximos passos


1. botão de whatsapp fixo

2. design das salas vazias para o próximo nível, podemos adicionar um Botão de WhatsApp apenas nos cards vazios. Assim, quando o interessado clicar, ele abre o chat direto com o setor de locação do prédio já com uma mensagem automática:

"Olá! Vi no site que a sala [X] no [Y] andar está disponível. Gostaria de mais informações."


---

_Desenvolvido com foco em alta performance e design moderno._

## 🚀 Comentários de melhoria segundo a IA

Analise o código a cima e me apresente melhorias no código para que ele tenha uma melhor Usabilidade (UX/UI), Tempo de resposta (Performance), melhor Performance de armazenamento (Consultas otimizadas), Escalabilidade, Segurança Confiabilidade e estabilidade, Manutenibilidade, Integração e Observabilidade.

Seu código já está bem organizado e funcional — especialmente na separação de responsabilidades e na UX inicial com skeletons 👏. Mas dá pra evoluir bastante em várias dimensões. Vou direto ao que realmente traz ganho prático.

🔧 1. Usabilidade (UX/UI)

✅ Problemas
Busca dispara a cada ação manual (não é fluida)
Falta feedback de “digitando”
Filtros não combinam entre si
Não há estado vazio amigável para filtros
Cards não têm hierarquia visual forte
🚀 Melhorias
🔹 Debounce na busca

Evita travar UI enquanto digita:

let timeout;
function buscarDebounced() {
  clearTimeout(timeout);
  timeout = setTimeout(buscar, 300);
}

👉 Use no input:

<input oninput="buscarDebounced()" />
🔹 Estado de loading real (não fake)

Hoje você usa setTimeout. Melhor simular apenas quando necessário:

async function carregarDados() {
  exibirSkeletons();
  const dados = await fetchDados(); // futuro backend
  renderizarCards(dados);
}
🔹 Melhor feedback vazio
container.innerHTML = `
  <div class="empty-state">
    <h3>Nenhum resultado encontrado</h3>
    <p>Tente ajustar sua busca ou filtros.</p>
  </div>
`;
🔹 Combinar busca + filtro

Hoje eles não se conversam. Crie estado global:

let estado = {
  busca: "",
  categoria: "todos",
  somenteVazias: false
};

E um único renderizador:

function aplicarFiltros() {
  let lista = [...estabelecimentos];

  if (estado.busca) {
    lista = lista.filter(e =>
      normalizar(`${e.nome} ${e.desc} ${e.sala}`)
        .includes(estado.busca)
    );
  }

  if (estado.categoria !== "todos") {
    lista = lista.filter(e => e.cat === estado.categoria);
  }

  if (estado.somenteVazias) {
    lista = lista.filter(e => e.vazia);
  }

  renderizarCards(lista);
}

⚡ 2. Performance (tempo de resposta)

✅ Problemas
.map().join("") com lista grande pode travar
Re-render completo sempre
Normalização repetida a cada busca
🚀 Melhorias
🔹 Pré-processamento (cache de busca)
const estabelecimentosProcessados = estabelecimentos.map(e => ({
  ...e,
  _search: normalizar(`${e.nome} ${e.desc} ${e.sala} ${e.cat}`)
}));

Busca vira:

e._search.includes(termo)

🔥 Ganho enorme em listas grandes.

🔹 Virtualização (para escala)

Se passar de ~200 itens:

renderizar só visíveis
usar IntersectionObserver
🔹 Evitar reflow pesado

Use documentFragment:

const fragment = document.createDocumentFragment();
lista.forEach(item => {
  const el = document.createElement("article");
  el.className = "card";
  el.innerHTML = ...
  fragment.appendChild(el);
});
container.innerHTML = "";
container.appendChild(fragment);

💾 3. Performance de armazenamento / consultas

🔹 Estrutura indexada por categoria
const index = {
  Saude: [],
  Direito: [],
  Estetica: [],
  vazias: []
};

Na carga:

estabelecimentos.forEach(e => {
  if (e.vazia) index.vazias.push(e);
  else index[e.cat]?.push(e);
});

👉 Filtro vira O(1) em vez de O(n)

📈 4. Escalabilidade

Problema

Tudo está no frontend → não escala bem

Solução futura
Migrar para API:
GET /salas?busca=psicologia&andar=12&vazia=false
Paginação:
?page=1&limit=20
Lazy loading de dados

🔐 5. Segurança

⚠️ Risco atual

Uso de innerHTML direto → vulnerável a XSS

🔹 Correção

Use textContent:

const h3 = document.createElement("h3");
h3.textContent = nomeFinal;

Ou sanitize:

function escapeHTML(str) {
  return str.replace(/[&<>"']/g, m => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[m]);
}

🧱 6. Confiabilidade & Estabilidade

🔹 Validação de dados
function validarItem(e) {
  return e && e.sala && e.andar !== undefined;
}
🔹 Fallback seguro
const nomeFinal = item.nome || "Não informado";

🧹 7. Manutenibilidade

🔹 Separar responsabilidades

Hoje tudo está junto. Ideal:

/data
/ui
/services
/utils
/state
🔹 Evitar strings mágicas
const CATEGORIAS = {
  SAUDE: "Saúde",
  DIREITO: "Direito"
};
🔹 Tipagem (MESMO em JS)
/**
 * @typedef {Object} Sala
 * @property {number|string} andar
 * @property {string} sala
 * @property {string} nome
 * @property {string} desc
 * @property {string} cat
 * @property {boolean} vazia
 */

🔗 8. Integração

🔹 Preparar para API
async function fetchDados() {
  try {
    const res = await fetch("/api/salas");
    return await res.json();
  } catch (e) {
    console.error("Erro ao carregar dados", e);
    return [];
  }
}
🔹 Webhooks / eventos
window.dispatchEvent(new CustomEvent("salasAtualizadas"));

📊 9. Observabilidade

🔹 Logging estruturado
console.info("Filtro aplicado", estado);
🔹 Monitorar performance
console.time("render");
renderizarCards(lista);
console.timeEnd("render");
🔹 Tracking de uso (futuro)
buscas mais usadas
categorias mais clicadas
salas mais visualizadas
🧠 RESUMO — O QUE MAIS IMPACTA

Se você fizer só 5 coisas, faça essas:

🔥 Cache _search (ganho absurdo)
🔥 Debounce na busca
🔥 Estado único de filtros
🔥 Evitar innerHTML (segurança)
🔥 Indexação por categoria

## Sugestão de melhorias no código pela IA

// --- DADOS DE EXEMPLOS ---
const estabelecimentos = [
  { andar: 12, sala: "1202-1203", nome: "APA Advocacia", desc: "Dr. Paulo Sergio Avezani", cat: "Direito", vazia: false },
  { andar: 12, sala: "1205", nome: "Drª Dayse Ayupe Lopardi", desc: "Cirurgiã Dentista", cat: "Saúde", vazia: false },
  { andar: 12, sala: "1206", nome: "Vinicius Navarro / Gabriela Ramos", desc: "Psicanálise", cat: "Saúde", vazia: false },
  { andar: 12, sala: "1207-1208", nome: "SOIP", desc: "Clínica Odontológica", cat: "Saúde", vazia: false },
  { andar: 12, sala: "1211", nome: "Nuance", desc: "Espaço de Estética", cat: "Estética", vazia: false },
  { andar: 12, sala: "1212", nome: "Dra. Daniella Saraiva / Florescer", desc: "Psicologia", cat: "Saúde", vazia: false },
  { andar: 12, sala: "1213-1215", nome: "", desc: "", cat: "", vazia: true },
  { andar: 6, sala: "612-615", nome: "", desc: "", cat: "", vazia: true },
  { andar: 1, sala: "112-115", nome: "", desc: "", cat: "", vazia: true },
];

// --- CACHE DE BUSCA ---
estabelecimentos.forEach(e => e._search = normalizar(`${e.nome} ${e.desc} ${e.sala} ${e.cat} ${e.andar}`));

// --- ESTADO GLOBAL ---
const estado = {
  termo: "",
  categoria: "todos",
  apenasVazias: false,
};

// --- UTILITÁRIOS ---
function normalizar(texto) {
  return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// --- FUNÇÃO DE RENDERIZAÇÃO SEGURA ---
function criarCard(item) {
  const card = document.createElement("article");
  card.className = `card ${item.vazia ? "card-vazia" : ""}`;

  const floor = document.createElement("span");
  floor.className = "floor";
  floor.textContent = `${item.andar}º Andar - Sala ${item.sala}`;
  card.appendChild(floor);

  const titulo = document.createElement("h3");
  titulo.textContent = item.vazia ? "SALA DISPONÍVEL" : item.nome;
  card.appendChild(titulo);

  const desc = document.createElement("p");
  desc.textContent = item.vazia ? "Excelente oportunidade para o seu negócio. Entre em contato com a administração!" : item.desc;
  card.appendChild(desc);

  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = item.vazia ? "Vazia" : item.cat;
  card.appendChild(badge);

  return card;
}

// --- FUNÇÃO DE FILTROS COM CACHE E SEARCH ---
function aplicarFiltros() {
  let lista = estabelecimentos;

  if (estado.termo) lista = lista.filter(e => e._search.includes(estado.termo));
  if (estado.categoria !== "todos") lista = lista.filter(e => !e.vazia && e.cat.toLowerCase() === estado.categoria.toLowerCase());
  if (estado.apenasVazias) lista = lista.filter(e => e.vazia);

  // Atualiza virtual scroll
  atualizarVirtualScroll(lista);
}

// --- DEBOUNCE PARA BUSCA ---
let debounceTimeout;
function onBuscarInput(valor) {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    estado.termo = normalizar(valor);
    aplicarFiltros();
  }, 300);
}

// --- FILTROS POR CATEGORIA ---
function filterCategoria(categoria, btn) {
  ativarBotao(btn);
  estado.categoria = categoria;
  estado.apenasVazias = false;
  aplicarFiltros();
}

function filterVazias(btn) {
  ativarBotao(btn);
  estado.apenasVazias = true;
  estado.categoria = "todos";
  aplicarFiltros();
}

function ativarBotao(btn) {
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

// --- TEMA ---
function configurarTema() {
  const btn = document.getElementById("theme-toggle");
  const aplicar = t => {
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("theme", t);
  };
  aplicar(localStorage.getItem("theme") || "light");
  btn.addEventListener("click", () => {
    const atual = document.documentElement.getAttribute("data-theme");
    aplicar(atual === "dark" ? "light" : "dark");
  });
}

// --- SKELETONS ---
function exibirSkeletons() {
  const container = document.getElementById("directory");
  container.innerHTML = "";
  const fragment = document.createDocumentFragment();
  Array(8).fill(null).forEach(() => {
    const skel = document.createElement("div");
    skel.className = "card-skeleton";
    fragment.appendChild(skel);
  });
  container.appendChild(fragment);
}

// --- VIRTUAL SCROLL ---
const container = document.getElementById("directory");
let listaVirtual = [];
let alturaCard = 120; // altura aproximada do card
let qtdVisiveis = 0;

function atualizarVirtualScroll(lista) {
  listaVirtual = lista.sort((a,b) => b.andar - a.andar);
  container.innerHTML = "";
  container.style.height = `${listaVirtual.length * alturaCard}px`;
  qtdVisiveis = Math.ceil(container.offsetHeight / alturaCard) + 5; // buffer extra
  window.requestAnimationFrame(() => renderizarViewport());
}

function renderizarViewport() {
  const scrollTop = container.scrollTop;
  const primeiro = Math.floor(scrollTop / alturaCard);
  const fragment = document.createDocumentFragment();
  const fim = Math.min(primeiro + qtdVisiveis, listaVirtual.length);

  for (let i = primeiro; i < fim; i++) {
    const card = criarCard(listaVirtual[i]);
    card.style.position = "absolute";
    card.style.top = `${i * alturaCard}px`;
    fragment.appendChild(card);
  }

  container.innerHTML = "";
  container.appendChild(fragment);
}

// Atualiza enquanto o usuário rola
container.addEventListener("scroll", renderizarViewport);

// --- INICIALIZAÇÃO ---
window.onload = () => {
  configurarTema();
  exibirSkeletons();
  setTimeout(() => atualizarVirtualScroll(estabelecimentos), 500);
};
 
