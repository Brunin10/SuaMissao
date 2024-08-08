const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A disseminação de fake news pode ter graves consequências para a sociedade,  propagação de boatos, aumento da polarização política e o enfraquecimento da confiança nas instituições e na mídia. Você tem ciência dessas consequências ao compartilhar informações?",
        alternativas [
            {
                texto: "Não me preocupo com isso";
                afirmacao: "Acredito na liberdade de expressão, todos têm o direito de expor ideias: sejam verdadeiras ou não".
            },
            {
                texto:  "Sim, com toda certeza!",
                afirmacao: "Além de todas as consequências que a propagação de desinformação podem causar, há também a questão jurídica, pois dependendo da informação disseminada pode caber processo",
            }
        ]
    },
    {
        enunciado: "Como a desigualdade social afeta o acesso  a educação de qualidade?",
        alternativas [
            {
                texto: "Faz com que pessoas com maior poder aquisitivo tenha uma educação de maior qualidade.
                afirmacao: "Pois, é um problema socioeconômico, no qual quem tem mais recursos tem acesso a tempo, cultura, e materiais de qualidade."
            },
            {
                texto: "Ela não afeta a educação,  pois todos têm acesso aos mesmos recursos."
                afirmacao: "Independente da condição social, com esforço (hardwork) todos podem alcançar seus objetivos."
            }
        ]
    },
    {
                texto: "Distribuição de renda e baixa qualificação profissional. A educação pode ser a ferramenta para conscientizar a sociedade."
                afirmacao: "O problema é  político, social e econômico com foco na  má distribuição de renda, consequentemente inoportunidades na  formação de qualificação, tanto profissional quanto pessoal."
            }
            "Faz com que pessoas com maior poder aquisitivo tenha uma educação de maior qualidade.";
            "Ela não afeta a educação, pois todos têm acesso aos mesmos recursos."
        ]
    },
    {
        enunciado: "Quais as causas das desigualdades sociais? A educação pode conscientizar sobre Fake News e Desigualdade Social?",
        alternativas [
            "Distribuição de renda e baixa qualificação profissional. A educação pode ser a ferramenta para conscientizar a sociedade.";
            "Falta de acessibilidade e utilização adequada da tecnologia para a qualificação profissional.
A educação não interfere na conscientização da sociedade.
"    ]
    }
];

let pergAtual = 0;
let pergAtual ;

function mostraPergunta(){
    perguntaAtual = perguntas[pergAtual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "" ;
    mostraAlternativas () ;
};

mostraPergunta () ;

    function mostraAlternativas(){
        for (const alternativa of pergAtual,alternativas){
            const botaoAlternativas = document.createElement("button") ;
            botaoAlternativas.textContent = alternativa ;
            caixaAlternativas.appendChild(botaoAlternativas) ;
    }
} ;