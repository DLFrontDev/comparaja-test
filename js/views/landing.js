var landingPage = new Vue({
    el: '#app',
    data: {
        landingPageHero: {
            tag: 'Crédito Pessoal',
            title: 'Encontre um crédito à sua medida.',
            description: '<ul><li>Lorem</li><li>Ipsum</li></ul>',
            img: {
                srcD: './img/pl_hero-desktop.webp',
                srcM: './img/pl_hero-mobile.webp',
                alt: 'Image alt',
            }
        },
        calculator: {
            title: 'Simulador Crédito Pessoal',
            description: 'Compare todo o mercado e adira de forma 100% gratuita',
            targetAmount: '5000',
            minAmount: '1000',
            maxAmount: '75000',
            targetDuration: '36',
            minDuration: '24',
            maxDuration: '84'
        },
        providers: [
            {
                src:'./img/providers/santander.svg'
            },
            {
                src:'./img/providers/millenium.svg'
            },
            {
                src:'./img/providers/bankinter.png'
            },
            {
                src:'./img/providers/bpi.svg'
            },
            {
                src:'./img/providers/eurobic.png'
            },
            {
                src:'./img/providers/cgd.jpg'
            },
            {
                src:'./img/providers/montepio.svg'
            },
            {
                src:'./img/providers/novobanco.png'
            },
            {
                src:'./img/providers/ctt.png'
            },
        ],
        faqs: {
            title: 'Crédito Habitação',
            faqList: [
                {
                    subtitle: 'Crédito Habitação',
                    faqs: [
                        {
                            title: 'O que é um crédito habitação?',
                            content: `
                                Começando pelo básico, importa definir o que é um crédito habitação. Tecnicamente, este produto define-se como um contrato de empréstimo por parte de uma instituição de crédito a um consumidor, por um prazo estabelecido previamente, utilizado para a aquisição, construção e realização de obras em habitação própria permanente, secundária ou para arrendamento, bem como para aquisição de terrenos para construção de habitação própria.
                                <br>
                                <br>
                                Trata-se, portanto, de um produto financeiro disponibilizado pelos bancos aos seus clientes com o intuito de financiar a compra de casa. Dado o elevado montante que implica, constitui-se geralmente como o maior encargo financeiro na vida de uma família.
                                <br>
                                <br>
                                No que toca às modalidades de reembolso, o empréstimo para <a rel="noopener" href="https://www.comparaja.pt/credito-habitacao/comprar-casa">comprar casa</a> pode ser realizado com:
                                <ul>
                                    <li>Prestações constantes: neste caso, a prestação mensal terá sempre um valor que pouco se alterará ao longo do prazo do empréstimo;</li>
                                    <li>Carência de capital: período durante o qual só se pagam os juros do empréstimo habitação e a prestação fica mais reduzida;</li>
                                    <li>Diferimento de capital: permite adiar o reembolso de uma parte do capital em dívida para o final do crédito.</li>
                                </ul>
                                <br>
                                Desmistificado o conceito, avancemos agora para a explicação das finalidades a que esta solução se aplica.
                            `
                        },
                        {
                            title: 'Simulador crédito pessoal: como pedir crédito?',
                            content: `
                                Através da plataforma do ComparaJá.pt pode, de forma rápida e simples, simular empréstimo e solicitar um financiamento na instituição que deseja, através da comparação de todas as soluções disponíveis no mercado. Ao utilizar o nosso simulador de crédito pessoal, apenas necessita de selecionar qual o montante e o prazo de financiamento pretendidos, bem como a finalidade para a qual requer o valor solicitado. Irá encontrar uma diversificada oferta, consoante o seu perfil, e não terá necessidade de se deslocar a um balcão da entidade bancária.
                                <br>
                                <br>
                                Após escolher a instituição financeira, deverá enviar toda a documentação necessária para que o seu processo seja analisado da melhor forma: documentação relativa à sua capacidade financeira e às suas responsabilidades de crédito. O banco procede, de seguida, à análise do risco e será determinado se o seu processo é, ou não, aprovado. Em caso de aprovação, a entidade bancária deverá disponibilizar uma proposta com todas as condições financeiras do empréstimo.
                                <br>
                                <br>
                                Por fim, e caso ambas as partes cheguem a acordo relativamente às condições financeiras, o crédito pessoal é aprovado e poderá desfrutar do montante que solicitou. Mas, primeiro, faça sempre a simulação de crédito para perceber qual é a oferta que existe no mercado.
                            `
                        },
                        {
                            title: 'Quais os requisitos para solicitar um crédito pessoal?',
                            content: `
                                Os requisitos para requerer um empréstimo pessoal com prestação mensal podem variar consoante o banco ou instituição de crédito, mas geralmente as condições mínimas são: ter, pelo menos, 18 anos de idade e ser residente em Portugal. Porém, note-se que algumas entidades bancárias podem requerer ainda recibos de vencimento ou comprovativos de morada. Há que salientar ainda que o historial de crédito (que consta do Mapa de Responsabilidades do Banco de Portugal) também será analisado pela instituição financeira.
                            `
                        },
                        {
                            title: 'Como garantir que escolhe o crédito pessoal mais barato do mercado?',
                            content: `
                                Para obter um crédito pessoal mais barato deverá ter em consideração diversos aspetos enquanto compara as várias soluções disponibilizadas pelas instituições financeiras. Em primeiro lugar, é preciso olhar para a TAEG (Taxa Anual Efetiva Global) e utilizá-la para comparar as várias ofertas. A TAEG representa o custo total do crédito pessoal, pois engloba não só os juros a pagar, como as despesas de processo, comissões e ainda o valor dos seguros associados ao empréstimo.<br><br>Para além da TAEG, o cliente deverá ainda olhar para o Montante Total Imputado ao Consumidor (MTIC), que lhe diz exatamente quanto irá pagar pelo financiamento que pretende obter. A prestação mensal também o ajuda a perceber qual o crédito pessoal mais barato. Faça uma simulação de crédito no ComparaJá.pt e perceba quanto pode ficar a pagar por mês.
                            `
                        },
                        {
                            title: 'Qual a vantagem da simulação de crédito pessoal?',
                            content: `
                                Ao fazer uma simulação de empréstimo pessoal online poderá ter uma ideia das instituições financeiras que comercializam este produto em Portugal e, sobretudo, as TAEG que podem praticar para o seu caso em particular. Fazer uma simulação de empréstimo poderá ajudá-lo a encontrar o crédito pessoal mais barato do mercado para o seu caso em particular. Contudo, a ajuda prestada pelo ComparaJá.pt vai além do seu simulador de empréstimo pessoal. Também temos uma equipa especializada que o ajudará na escolha do melhor crédito pessoal para si, de forma totalmente gratuita.
                                <br>
                                <br>
                                <br>
                                <strong><span style="color: #076B9C;">Fontes e Documentos:</span></strong>
                                <div style="width: 100%; height: auto;">
                                    <ul style="font-size: 14px; color: #979290; list-style-type: square; padding: 5px; margin-left: 15px; margin-top: 0.7em; margin-bottom: 3em;">
                                        <li style="padding: 5px; margin: 0;"><em><a href="https://dre.pt/pesquisa/-/search/494264/details/maximized"><cite>Decreto-Lei n.º 133/2009</cite></a> – Decreto que transpõe para a ordem jurídica interna a <a href="https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX%3A32008L0048"><cite>Directiva n.º 2008/48/CE</cite></a> do Parlamento e do Conselho, de 23 de Abril, relativa a contratos de crédito aos consumidores.</em></li>
                                        <li style="padding: 5px; margin: 0;"><em><a href="https://dre.pt/pesquisa/-/search/301011/details/maximized"><cite>Decreto-Lei n.º 359/91</cite></a> – Estabelece normas relativas ao crédito ao consumo. Transpõe para a ordem jurídica interna a <a href="https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX%3A31987L0102"><cite>Directiva n.º 87/102/CEE</cite></a>, de 22 de Dezembro de 1986, e a <a href="https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX%3A31990L0088"><cite>Directiva n.º 90/88/CEE</cite></a>, de 22 de Fevereiro de 1990.</em></li>
                                        <li style="padding: 5px; margin: 0;"><em><a href="https://clientebancario.bportugal.pt/pt-pt/o-que-e-e-tipos-de-credito">Portal do Cliente Bancário</a> – Definição de crédito pessoal e suas características.</em></li>
                                        <li style="padding: 5px; margin: 0;"><em><a href="https://www.bportugal.pt/comunicado/banco-de-portugal-aplica-medida-macroprudencial-aos-novos-creditos-habitacao-e-ao-consumo">Banco de Portugal</a> – Aplicação de medidas macroprudenciais aos novos créditos à habitação e ao consumo.</em></li>
                                    </ul>
                                </div>
                            `
                        }
                    ]
                }
            ],
            author: {
                src: './img/faqs-jose-figueiredo.jpg',
                name: 'José Figueiredo',
                role: 'Diretor Geral do ComparaJá.pt',
                description: 'Especialista em Crédito Habitação e Crédito Pessoal certificado pelo instituto de Formação Bancária e intermediário de crédito credenciado pelo Banco de Portugal'
            }
        },
        footer: {
            lists: [
                [
                    {
                        type: 'title',
                        text: 'Footer list title 1'
                    },
                    {
                        type: 'link',
                        text: 'Footer link 1'
                    },
                    {
                        type: 'link',
                        text: 'Footer link 2'
                    },
                    {
                        type: 'link',
                        text: 'Footer link 3'
                    },
                    {
                        type: 'link',
                        text: 'Footer link 4'
                    },
                    {
                        type: 'title',
                        text: 'Footer list title 2'
                    },
                    {
                        type: 'link',
                        text: 'Footer link 1'
                    },
                    {
                        type: 'link',
                        text: 'Footer link 2'
                    }
                ],
                [
                    {
                        type: 'title',
                        text: 'Footer list title 1'
                    },
                    {
                        type: 'link',
                        text: 'Footer link 1'
                    },
                    {
                        type: 'link',
                        text: 'Footer link 2'
                    },
                    {
                        type: 'link',
                        text: 'Footer link 3'
                    }
                ]
            ]
        }
    }
})