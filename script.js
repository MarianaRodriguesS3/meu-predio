/**
 * BASE DE DADOS COMPLETA - EDIFÍCIO STELLA CENTRAL
 */
const estabelecimentos = [
  // --- ANDAR INTERMEDIÁRIO / TÉRREO ---
  {
    andar: "Interm.",
    sala: "Geral",
    nome: "CITO Laboratório",
    desc: "Análises Clínicas e Exames",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: "Interm.",
    sala: "Geral",
    nome: "GASTRO CENTER",
    desc: "Aparelho Digestivo e Endoscopia",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: "Interm.",
    sala: "Geral",
    nome: "Centro Médico Stella Central",
    desc: "Recepção e Informações",
    cat: "Saúde",
    vazia: false,
  },

  // --- 1º ANDAR ---
  {
    andar: 1,
    sala: "101",
    nome: "GIRE - Gestão Imobiliária",
    desc: "Serviços Imobiliários",
    cat: "Outros",
    vazia: false,
  },
  { andar: 1, sala: "102", nome: "", desc: "", cat: "", vazia: true },
  {
    andar: 1,
    sala: "103",
    nome: "Dra. Susana Maurício",
    desc: "Dermatologista",
    cat: "Saúde",
    vazia: false,
  },
  { andar: 1, sala: "104", nome: "", desc: "", cat: "", vazia: true },
  { andar: 1, sala: "105", nome: "", desc: "", cat: "", vazia: true },
  {
    andar: 1,
    sala: "106",
    nome: "Dr. Luiz Antônio Avelar",
    desc: "Cardiologista",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 1,
    sala: "107",
    nome: "Dra. Patrícia Moreira Costa",
    desc: "Dermatologia",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 1,
    sala: "108",
    nome: "VITTASOUL Clínica",
    desc: "Saúde e Bem-estar",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 1,
    sala: "109",
    nome: "FREIRE Advogados",
    desc: "Advocacia Especializada",
    cat: "Direito",
    vazia: false,
  },
  {
    andar: 1,
    sala: "110",
    nome: "Suelen Alvim",
    desc: "Escritório de Advocacia",
    cat: "Direito",
    vazia: false,
  },
  {
    andar: 1,
    sala: "111",
    nome: "Dr. Paulo Cesar Ferreira Lopes",
    desc: "Urologia",
    cat: "Saúde",
    vazia: false,
  },
  { andar: 1, sala: "112-115", nome: "", desc: "", cat: "", vazia: true },

  // --- 2º ANDAR ---
  { andar: 2, sala: "201", nome: "", desc: "", cat: "", vazia: true },
  {
    andar: 2,
    sala: "203-205",
    nome: "Dr. Roberto Werneck",
    desc: "Implantes Odontológicos",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 2,
    sala: "206",
    nome: "Medina Marinho Construtora",
    desc: "Engenharia e Construção",
    cat: "Outros",
    vazia: false,
  },
  {
    andar: 2,
    sala: "208",
    nome: "Laboratório Imunolab",
    desc: "Exames Laboratoriais",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 2,
    sala: "210",
    nome: "Dr. Venerando F. Scoralick",
    desc: "Pediatria",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 2,
    sala: "214",
    nome: "PREVDENT",
    desc: "Dr. Raphael Nogueira / Dr. Leandro Toledo",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 2,
    sala: "215",
    nome: "Drª Anita de Freitas Siqueira",
    desc: "Psicóloga",
    cat: "Saúde",
    vazia: false,
  },

  // --- 3º ANDAR ---
  {
    andar: 3,
    sala: "302",
    nome: "Dr. José Roberto Machado / Dra. Helena Pedrosa",
    desc: "Cardiologia",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 3,
    sala: "303",
    nome: "Renata Mansur / Lilliam Andriola / Natália Cunha",
    desc: "Nutrição e Psicologia",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 3,
    sala: "305-306",
    nome: "Clínica Hallack",
    desc: "Oftalmo / Orto / Psicologia",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 3,
    sala: "307",
    nome: "Dr. Geraldo Casali",
    desc: "Cardiologia",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 3,
    sala: "309",
    nome: "Nicoly Chrispim / Alcione Kirchmaier",
    desc: "Psicanálise",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 3,
    sala: "311",
    nome: "JF IMÓVEL",
    desc: "Negócios Imobiliários",
    cat: "Outros",
    vazia: false,
  },
  {
    andar: 3,
    sala: "312",
    nome: "Dra. Rosângela M. Almeida",
    desc: "Endocrinologia",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 3,
    sala: "313",
    nome: "Rafael Trifilio",
    desc: "Psicólogo Clínico",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 3,
    sala: "314",
    nome: "Dr. Glaucio Franco",
    desc: "Neurologia",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 3,
    sala: "315",
    nome: "Dr. Paulo Costa / Dra. Lena Valle",
    desc: "Infectologia",
    cat: "Saúde",
    vazia: false,
  },

  // --- 4º ANDAR ---
  {
    andar: 4,
    sala: "401",
    nome: "Nathália Fernandes Costa",
    desc: "Movimento e Saúde",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 4,
    sala: "403",
    nome: "Graciele Candian",
    desc: "Odontologia",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 4,
    sala: "405-406",
    nome: "Helmar Mendes / Rodrigo Mendes",
    desc: "Consultório",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 4,
    sala: "407-408",
    nome: "Dr. José Elias / CORUM LTDA",
    desc: "Cardiologia",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 4,
    sala: "409",
    nome: "Sarah de Rezende Maurício",
    desc: "Implantodontia",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 4,
    sala: "411",
    nome: "Rodrigues Dias Simões & Araújo",
    desc: "Advocacia",
    cat: "Direito",
    vazia: false,
  },
  {
    andar: 4,
    sala: "414",
    nome: "Equipe Médica Multi",
    desc: "Dr. Junqueira / Dra. Luzia / Dr. Borsato",
    cat: "Saúde",
    vazia: false,
  },

  // --- 5º ANDAR ---
  {
    andar: 5,
    sala: "501-502",
    nome: "POISSON ANÁLISE ESTRUTURAL",
    desc: "Engenharia Estrutural",
    cat: "Outros",
    vazia: false,
  },
  {
    andar: 5,
    sala: "505",
    nome: "Marcelo Fazza",
    desc: "Psicólogo Clínico",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 5,
    sala: "506",
    nome: "Rita de Cássia F. Reis",
    desc: "Cirurgiã Dentista",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 5,
    sala: "507",
    nome: "Priscilla Novaes da Silva",
    desc: "Implantes Odontológicos",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 5,
    sala: "508",
    nome: "Alexandre Lanna / Cláudio Lanna",
    desc: "Advocacia",
    cat: "Direito",
    vazia: false,
  },
  {
    andar: 5,
    sala: "509",
    nome: "VOLPI",
    desc: "Soluções Municipais",
    cat: "Outros",
    vazia: false,
  },
  {
    andar: 5,
    sala: "512",
    nome: "Gastromotilidade / Citoprev",
    desc: "Dr. Tarcísio / Dra. Lívia",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 5,
    sala: "513",
    nome: "Clínica de Olhos Beatriz Hollanda",
    desc: "Oftalmologia",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 5,
    sala: "514-515",
    nome: "Dra. Michelle Sabbagh / Dra. Renata Hollanda",
    desc: "Consultório Médicos",
    cat: "Saúde",
    vazia: false,
  },

  // --- 6º ANDAR ---
  {
    andar: 6,
    sala: "603",
    nome: "Antônio Oliveira",
    desc: "Advocacia",
    cat: "Direito",
    vazia: false,
  },
  {
    andar: 6,
    sala: "604",
    nome: "RB Contabilidade",
    desc: "Paulo Sergio Bousanto",
    cat: "Direito",
    vazia: false,
  },
  {
    andar: 6,
    sala: "605",
    nome: "Dr. Aécio Flávio Meirelles de Souza",
    desc: "Hepatologia",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 6,
    sala: "607-608",
    nome: "ESTHETICCENTER",
    desc: "Estética Avançada",
    cat: "Estética",
    vazia: false,
  },
  {
    andar: 6,
    sala: "609",
    nome: "WMP Propaganda",
    desc: "Publicidade e Marketing",
    cat: "Outros",
    vazia: false,
  },
  {
    andar: 6,
    sala: "611",
    nome: "Afonso Nunes Jr / Christiano Nunes",
    desc: "Odontologia",
    cat: "Saúde",
    vazia: false,
  },

  // --- 7º ANDAR ---
  {
    andar: 7,
    sala: "701",
    nome: "Wellerson Motta de Castro",
    desc: "Advogado / Contador / Perito",
    cat: "Direito",
    vazia: false,
  },
  {
    andar: 7,
    sala: "702",
    nome: "Tânia Alvarenga Tiago",
    desc: "Pediatria",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 7,
    sala: "703",
    nome: "Dra. Camila Oliveira / Dra. Michelly Rocha",
    desc: "Médicas",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 7,
    sala: "704",
    nome: "Dra. Rosangela Vizani",
    desc: "Cirurgiã-Dentista",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 7,
    sala: "705-708",
    nome: "J. Franklin & Rossi",
    desc: "Advogados Associados",
    cat: "Direito",
    vazia: false,
  },
  {
    andar: 7,
    sala: "710",
    nome: "Bernardo e Silva",
    desc: "Advogados",
    cat: "Direito",
    vazia: false,
  },
  {
    andar: 7,
    sala: "711",
    nome: "COLISEU",
    desc: "Assessoria Contábil",
    cat: "Direito",
    vazia: false,
  },
  {
    andar: 7,
    sala: "712",
    nome: "Maria Alice Oliveira / Cristina Vasconcelos",
    desc: "Psicólogas",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 7,
    sala: "713",
    nome: "Dr. Ivander Vieira / Dra. Vânia Vieira",
    desc: "Dentistas",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 7,
    sala: "715",
    nome: "J. Franklin & Rossi",
    desc: "Setor Trabalhista",
    cat: "Direito",
    vazia: false,
  },

  // --- 8º ANDAR ---
  {
    andar: 8,
    sala: "801",
    nome: "Dra. Janaina Souza / Dra. Lélia Oliveira",
    desc: "Odontologia",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 8,
    sala: "802",
    nome: "Mariana Costa",
    desc: "Estética e Relaxamento",
    cat: "Estética",
    vazia: false,
  },
  {
    andar: 8,
    sala: "803",
    nome: "Dr. Emanuel Viana do Carmo",
    desc: "Advogado",
    cat: "Direito",
    vazia: false,
  },
  {
    andar: 8,
    sala: "806",
    nome: "Priscila Mascarenhas",
    desc: "Fonoaudióloga",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 8,
    sala: "807",
    nome: "Aline Calvete",
    desc: "Fisioterapia e Pilates",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 8,
    sala: "809",
    nome: "Letícia Malta",
    desc: "Odontologia / Terapias",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 8,
    sala: "810",
    nome: "Prof. Alival Barros de Moraes",
    desc: "Ajuda e Orientação Pessoal",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 8,
    sala: "811",
    nome: "Dra. Arlene Tenorio / Dr. Pilar Tenorio",
    desc: "Ginecologia e Neuro",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 8,
    sala: "812",
    nome: "Ateliê Sabrina Pastorini / Espaço Dekor",
    desc: "Design e Estética",
    cat: "Estética",
    vazia: false,
  },
  {
    andar: 8,
    sala: "813",
    nome: "COOPERMATA",
    desc: "Cooperativa",
    cat: "Outros",
    vazia: false,
  },
  {
    andar: 8,
    sala: "814",
    nome: "Dra. Rachel Volpi",
    desc: "Harmonização Facial",
    cat: "Estética",
    vazia: false,
  },

  // --- 9º ANDAR ---
  {
    andar: 9,
    sala: "901",
    nome: "Leonardo Sant'Ana",
    desc: "Advogado",
    cat: "Direito",
    vazia: false,
  },
  {
    andar: 9,
    sala: "902",
    nome: "BYTE Class",
    desc: "Escola de Tecnologia",
    cat: "Educação",
    vazia: false,
  },
  {
    andar: 9,
    sala: "903",
    nome: "Israel Rachid / Laira Domith",
    desc: "Advogados",
    cat: "Direito",
    vazia: false,
  },
  {
    andar: 9,
    sala: "909",
    nome: "Maria Elvira Navarro / Cláudia Deotti",
    desc: "Psicanálise",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 9,
    sala: "910",
    nome: "Consultório Médico",
    desc: "Pneumo / Neuro / Uro",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 9,
    sala: "911",
    nome: "Eliana M. Balena",
    desc: "Psicóloga",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 9,
    sala: "913",
    nome: "Daniel Brilhante de Castro",
    desc: "Advogado",
    cat: "Direito",
    vazia: false,
  },
  {
    andar: 9,
    sala: "914",
    nome: "Robson Rangel Gusmão",
    desc: "Cirurgião Dentista",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 9,
    sala: "915",
    nome: "Dra. Tatiana Van Gasse",
    desc: "Dentista",
    cat: "Saúde",
    vazia: false,
  },

  // --- 10º ANDAR ---
  {
    andar: 10,
    sala: "1001",
    nome: "Orlando Batalha Santos",
    desc: "Advogado",
    cat: "Direito",
    vazia: false,
  },
  {
    andar: 10,
    sala: "1002",
    nome: "Única",
    desc: "Saúde Integrativa",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 10,
    sala: "1005",
    nome: "Manoel Júnior",
    desc: "Previdenciário",
    cat: "Direito",
    vazia: false,
  },
  {
    andar: 10,
    sala: "1007",
    nome: "Magali Maciel / Sônia Emerich",
    desc: "Odontologia",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 10,
    sala: "1009",
    nome: "Equipe de Psicólogos",
    desc: "Robson / Thais / Marco",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 10,
    sala: "1010",
    nome: "Moraes e Guedes Advogados",
    desc: "Direito",
    cat: "Direito",
    vazia: false,
  },
  {
    andar: 10,
    sala: "1013",
    nome: "Dra. Lara Gouvêa Martins",
    desc: "Cirurgiã-Dentista",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 10,
    sala: "1015",
    nome: "Dr. André Silva / Dra. Rosangela Silva",
    desc: "Uro / Ginecologia",
    cat: "Saúde",
    vazia: false,
  },

  // --- 11º ANDAR ---
  {
    andar: 11,
    sala: "1103",
    nome: "Sandra Fonseca / Ana Lúcia Oliveira",
    desc: "Fono / Psicologia",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 11,
    sala: "1104",
    nome: "Dra. Renata Tolêdo / Dra. Raphaella Barcellos",
    desc: "Odontopediatria",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 11,
    sala: "1105",
    nome: "Dra. Maíra Souza / Dra. Ana Maria Muniz",
    desc: "Psiquiatria / Médica",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 11,
    sala: "1106",
    nome: "Dr. Lúcia Helena L. M. Silva",
    desc: "Clínica Médica",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 11,
    sala: "1108",
    nome: "Diego B. Zanotti Ongaro",
    desc: "Psicólogo Clínico",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 11,
    sala: "1109",
    nome: "Dr. Luiz Flávio de Azevedo",
    desc: "Advogado",
    cat: "Direito",
    vazia: false,
  },
  {
    andar: 11,
    sala: "1110",
    nome: "Maria Célia Cruz / Dr. Clei Cruz",
    desc: "Consultório",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 11,
    sala: "1111",
    nome: "Drª Ana Maria Coimbra Chaves",
    desc: "Dermatologista",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 11,
    sala: "1112",
    nome: "Dr. Vicente Vidal / Flávia Vidal Lima",
    desc: "Ginecologia / Psicanálise",
    cat: "Saúde",
    vazia: false,
  },

  // --- 12º ANDAR ---
  {
    andar: 12,
    sala: "1202-1203",
    nome: "APA Advocacia",
    desc: "Dr. Paulo Sergio Avezani",
    cat: "Direito",
    vazia: false,
  },
  {
    andar: 12,
    sala: "1205",
    nome: "Drª Dayse Ayupe Lopardi",
    desc: "Cirurgiã Dentista",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 12,
    sala: "1206",
    nome: "Vinicius Navarro / Gabriela Ramos",
    desc: "Psicanálise",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 12,
    sala: "1207-1208",
    nome: "SOIP",
    desc: "Clínica Odontológica",
    cat: "Saúde",
    vazia: false,
  },
  {
    andar: 12,
    sala: "1211",
    nome: "Nuance",
    desc: "Espaço de Estética",
    cat: "Estética",
    vazia: false,
  },
  {
    andar: 12,
    sala: "1212",
    nome: "Dra. Daniella Saraiva / Florescer",
    desc: "Psicologia",
    cat: "Saúde",
    vazia: false,
  },

  // --- EXEMPLO DE SALAS VAZIAS MESTRES (Para marketing) ---
  { andar: 12, sala: "1213-1215", nome: "", desc: "", cat: "", vazia: true },
  { andar: 6, sala: "612-615", nome: "", desc: "", cat: "", vazia: true },
  { andar: 1, sala: "112-115", nome: "", desc: "", cat: "", vazia: true },
];

/**
 * LÓGICA DO DIRETÓRIO
 */
window.onload = () => {
  configurarTema();
  exibirSkeletons();
  setTimeout(() => renderizarCards(estabelecimentos), 1000);
};

function renderizarCards(lista) {
  const container = document.getElementById("directory");

  // Ordenar por Andar (Maior para Menor)
  const listaOrdenada = [...lista].sort((a, b) => {
    if (a.andar === "Interm.") return 1;
    if (b.andar === "Interm.") return -1;
    return b.andar - a.andar;
  });

  if (listaOrdenada.length === 0) {
    container.innerHTML = `<p class="empty-msg">Nenhum resultado para esta busca.</p>`;
    return;
  }

  container.innerHTML = listaOrdenada
    .map((item, index) => {
      const nomeFinal = item.vazia ? "SALA DISPONÍVEL" : item.nome;
      const descFinal = item.vazia
        ? "Excelente oportunidade para o seu negócio. Entre em contato com a administração!"
        : item.desc;
      const seloFinal = item.vazia ? "Vazia" : item.cat;
      const classeExtra = item.vazia ? "card-vazia" : "";
      const labelAndar =
        typeof item.andar === "number" ? `${item.andar}º Andar` : item.andar;

      return `
            <article class="card ${classeExtra}" style="animation-delay: ${index * 0.02}s">
                <span class="floor">${labelAndar} - Sala ${item.sala}</span>
                <h3>${nomeFinal}</h3>
                <p>${descFinal}</p>
                <span class="badge">${seloFinal}</span>
            </article>
        `;
    })
    .join("");
}

function buscar() {
  const termo = normalizar(document.getElementById("searchInput").value);
  const resultados = estabelecimentos.filter((e) => {
    const conteudo = normalizar(
      `${e.nome} ${e.desc} ${e.sala} ${e.cat} ${e.andar}`,
    );
    return conteudo.includes(termo);
  });
  renderizarCards(resultados);
}

function filter(categoria, btn) {
  ativarBotao(btn);
  if (categoria === "todos") {
    renderizarCards(estabelecimentos);
  } else {
    const filtrados = estabelecimentos.filter(
      (e) => !e.vazia && e.cat.toLowerCase() === categoria.toLowerCase(),
    );
    renderizarCards(filtrados);
  }
}

function filterVazias(btn) {
  ativarBotao(btn);
  const vazias = estabelecimentos.filter((e) => e.vazia);
  renderizarCards(vazias);
}

function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function ativarBotao(btn) {
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
}

function configurarTema() {
  const btn = document.getElementById("theme-toggle");
  const aplicar = (t) => {
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("theme", t);
  };
  const salvo = localStorage.getItem("theme") || "light";
  aplicar(salvo);
  btn.addEventListener("click", () => {
    const atual = document.documentElement.getAttribute("data-theme");
    aplicar(atual === "dark" ? "light" : "dark");
  });
}

function exibirSkeletons() {
  const container = document.getElementById("directory");
  container.innerHTML = Array(8)
    .fill('<div class="card-skeleton"></div>')
    .join("");
}
