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
        }
    }
})