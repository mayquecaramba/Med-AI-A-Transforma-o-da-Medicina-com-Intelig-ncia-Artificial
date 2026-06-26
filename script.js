// Banco de dados simulado com as informações de cada pilar
const informacoes = {
    diagnostico: {
        titulo: "🖼️ Diagnóstico por Imagem Avançado",
        texto: "Algoritmos de visão computacional analisam exames de imagem (como tomografias e ressonâncias) com altíssima precisão. Eles auxiliam os radiologistas ao apontar precocemente microestruturas imperceptíveis ao olho humano, reduzindo o tempo de diagnóstico de semanas para minutos."
    },
    dados: {
        titulo: "📊 Análise de Dados Clínicos & Triagem",
        texto: "Ao processar históricos médicos e dados em tempo real de UTIs, a IA consegue prever quadros de sepse ou paradas cardiorrespiratórias horas antes de acontecerem. Isso permite uma intervenção médica preventiva, salvando vidas criticamente em risco."
    },
    medicamentos: {
        titulo: "🧪 Aceleração na Descoberta de Medicamentos",
        texto: "O desenvolvimento de um novo remédio costuma levar mais de 10 anos. Com ferramentas de IA estruturando combinações químicas e prevendo reações moleculares em simulações digitais, os cientistas conseguem reduzir o tempo de descoberta e testes pré-clínicos de forma drástica."
    },
    precisao: {
        titulo: "🧬 Medicina de Precisão e Genômica",
        texto: "Cada corpo responde de forma diferente a um tratamento. A IA analisa o sequenciamento genético do paciente cruzando com bilhões de dados de estudos globais para sugerir quimioterapias e tratamentos específicos que terão maior eficácia e menos efeitos colaterais para aquela pessoa."
    }
};

// Função para exibir o conteúdo dinamicamente ao clicar nos cards
function mostrarDetalhes(pilar) {
    const painel = document.getElementById('painel-detalhes');
    const titulo = document.getElementById('detalhe-titulo');
    const texto = document.getElementById('detalhe-texto');

    // Atualiza os textos com base no objeto de informações
    titulo.innerText = informacoes[pilar].titulo;
    texto.innerText = informacoes[pilar].texto;

    // Remove a classe 'escondido' para exibir o painel com efeitos
    painel.classList.remove('escondido');
    
    // Rola a tela suavemente até o painel de detalhes
    painel.scrollIntoView({ behavior: 'smooth' });
}
