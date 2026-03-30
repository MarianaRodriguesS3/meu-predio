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

Seu código está bem organizado e funcional — especialmente pela normalização de texto e separação das funções. Mas dá pra melhorar bastante em performance, UX e uso de memória, principalmente se essa lista crescer.

Vou te mostrar problemas atuais + soluções mais eficientes 👇

🔍 Problemas atuais
1. Busca linear (O(n))

Toda vez que o usuário digita, você percorre toda a lista (filter):

const resultados = estabelecimentos.filter(...)

👉 Isso funciona bem com poucos itens, mas escala mal.

2. Normalização repetida (custo alto)

Você roda normalizar() toda vez que busca, inclusive concatenando strings:

const conteudo = normalizar(`${e.nome} ${e.desc} ${e.sala} ${e.cat} ${e.andar}`);

👉 Isso é caro e repetitivo.

3. Busca “crua” (sem inteligência)
Não prioriza resultados mais relevantes
Não tolera erros de digitação
Não sugere nada ao usuário
4. Renderização completa sempre

Você recria todo o HTML mesmo para pequenas mudanças.

🚀 Melhorias recomendadas
✅ 1. Pré-indexação (GRANDE ganho de performance)

Pré-processar os dados uma única vez:

const estabelecimentosIndexados = estabelecimentos.map((e) => ({
  ...e,
  searchKey: normalizar(`${e.nome} ${e.desc} ${e.sala} ${e.cat} ${e.andar}`)
}));
Nova busca:
function buscar() {
  const termo = normalizar(document.getElementById("searchInput").value);

  const resultados = estabelecimentosIndexados.filter((e) =>
    e.searchKey.includes(termo)
  );

  renderizarCards(resultados);
}

✅ Vantagens:

Muito mais rápido
Evita recomputar strings
Melhor uso de CPU
⚡ 2. Debounce (melhora absurda de UX + performance)

Evita rodar busca a cada tecla:

let timeout;

function buscarComDebounce() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    buscar();
  }, 300);
}

👉 Use no input:

<input oninput="buscarComDebounce()" />

✅ Resultado:

Menos travamentos
Busca mais suave
🧠 3. Busca com relevância (ranking simples)

Hoje tudo tem o mesmo peso.

Você pode priorizar:

function buscar() {
  const termo = normalizar(document.getElementById("searchInput").value);

  const resultados = estabelecimentosIndexados
    .map((e) => {
      let score = 0;

      if (e.searchKey.includes(termo)) score += 1;
      if (normalizar(e.nome).includes(termo)) score += 3;
      if (normalizar(e.sala).includes(termo)) score += 5;

      return { ...e, score };
    })
    .filter((e) => e.score > 0)
    .sort((a, b) => b.score - a.score);

  renderizarCards(resultados);
}

✅ Melhor:

Sala exata aparece primeiro
Nome tem prioridade
UX muito mais inteligente
🔎 4. Índice por categoria (busca instantânea)

Evita filter sempre:

const indiceCategoria = {};

estabelecimentos.forEach((e) => {
  if (!indiceCategoria[e.cat]) {
    indiceCategoria[e.cat] = [];
  }
  indiceCategoria[e.cat].push(e);
});
Uso:
function filter(categoria) {
  if (categoria === "todos") {
    renderizarCards(estabelecimentos);
  } else {
    renderizarCards(indiceCategoria[categoria] || []);
  }
}

✅ Vantagem:

O(1) acesso
Muito rápido
🧩 5. Virtualização (se tiver MUITOS dados)

Se crescer para centenas/milhares:

👉 Renderize só o que aparece na tela

Ex:

usar IntersectionObserver
ou libs como:
virtual-scroller
💾 6. Redução de memória

Hoje você guarda várias strings repetidas.

Melhoria:

Opção A — IDs + dicionário
const categorias = {
  saude: "Saúde",
  direito: "Direito"
};
Opção B — minimizar duplicação
evitar concatenar strings gigantes
usar campos separados no índice
✨ 7. Melhor UX de busca
Sugestões:
Mostrar resultados enquanto digita
Destacar termo buscado
Mostrar contador:
<p>${resultados.length} resultados encontrados</p>
🧠 8. Busca fuzzy (nível profissional)

Use biblioteca leve tipo:

Fuse.js

Exemplo:

const fuse = new Fuse(estabelecimentos, {
  keys: ["nome", "desc", "sala"],
  threshold: 0.3
});

function buscar() {
  const termo = document.getElementById("searchInput").value;
  const resultados = fuse.search(termo).map(r => r.item);
  renderizarCards(resultados);
}

✅ Permite:

"psiclogia" → encontra "psicologia"
Muito melhor UX
📊 Comparação geral
Técnica	Performance	Memória	UX
Atual	❌	✅	⚠️
Pré-indexação	✅	⚠️	✅
Debounce	✅	✅	✅
Ranking	⚠️	⚠️	⭐
Índice por categoria	⭐	✅	✅
Fuse.js	⚠️	⚠️	⭐⭐⭐
🏆 Melhor combinação (recomendada)

Se quiser o melhor equilíbrio:

👉 Use:

✅ Pré-indexação
✅ Debounce
✅ Ranking simples
(Opcional) Fuse.js
💡 Resumo direto

Se fosse otimizar seu código HOJE:

Criar searchKey (maior ganho)
Adicionar debounce
Melhorar ranking
(Opcional) usar Fuse.js

fazer um arquivo readme com exatamente essas informações, não deixar nada de fora do markdown


 
