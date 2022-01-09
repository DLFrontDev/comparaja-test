Decidi utilizar Vue porque parecia um bom desafio e o desafio pedido parece relativamente simples
Utilizei o script de cdn do Vue.js para simplificar a importação da framework, num projeto a sério não utilizaria esta approach
Declarei os componentes de heroimage e contact como global por haver a possibilidade de reutilizar em várias páginas, enquanto que os componentes de calculator e de resultados são pertencentes a um componente ou de uma página, respetivamente
Tentei preparar o componente hero-image para a eventualidade de não receber uma configuração de uma calculadora
Corrigi a fórmula de cálculo do montante mensal
Utilizei o xhttpRequest por ser uma solução nativa para fazer requests, sendo isto um caso limitado e pequeno de um desafio não quero adicionar mais dependências que o estritamente necessário
Tornei a renderização do form dependente do toggle, poupando tempo na renderização caso o utilizador não clique no botão
Organizei os componentes e as views de cada página em pastas próprias, devido à natureza rudimentar do meu protótipo importo os scripts necessários para cada componente no head de cada página fazendo uso do atributo defer no carregamento dos scripts das views para garantir que são carregados após o carregamento dos scripts dos componentes

Depois de criar os esqueletos de html para os dados dei início à estilização de cada um dos componentes e do look geral do site (Neste ponto ainda só criei os componentes do Minimum Value Product requeridos pelo enunciado)

Corrigi os valores de hexa nas cores providenciadas
Criei breakpoints em variáveis e também criei maps para depois poder iterar sobre eles para criar certas regras de estilo de uma maneira mais estruturada
Categorizei cada scss para melhorar a organização dos ficheiros
Criei o css numa óptica mobile first, de maneira a tornar o código mais mobile friendly
Utilizei tanto quanto possível hierarquias de classes componente>container>wrapper
Criei os tipos de botões com uma estrutura para expandir estilos para outras cores se necessário

Optei por apresentar os faqs com recurso a modals, as cards de ativação com um título e um botão podem ser dispostas em grelha para ter uma apresentação mais compacta e o conteúdo só é renderizado caso seja interagido. Os botões secundários coloridos atraem atenção mas mantém o seu status como interações não cruciais na página. A utilizção de modals permite maiores quantidades de conteúdo num contexto scrollable e que não ocupa espaço no flow da página, ideal para conteúdos informativos secundários.

Optei por criar um carrossel com um twist, tentando recorrer o mínimo a js quanto possível. A ideia é ter uma espécie de cascatas de providers com animções que alternam entre si, a disparidade de movimento atrai ainda mais a atenção do utilizador. No entanto, devido a questões de performance e carregamento de recursos, apenas deve haver uma cascata em mobile, esta sendo um carrossel normal para atender às diferenças entre ratios de resolução de maneira a não ocupar demasiado espaço no ecrã. A mesma ideia aplica-se em viewports de tablet com a excepção do número de cascatas. Os limites das animações são calculados através de combinações de proporções do elemento e do tamanho do viewport de maneira a que funcionem previsivelmente com diferentes números de providers e com fallbacks no caso de se apresentarem números muito pequenos. É feito um cálculo sempre que o número de listas é renderizada para estabilizar a duração da animação, bem como a utilização do atributo especial :key para forçar a re renderização do componente quando o número de listas muda, de maneira a evitar animações entrecortadas