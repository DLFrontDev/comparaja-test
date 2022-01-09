let calculator = {
    props: ['calculator'],
    template: `
        <div class='calculator'>
            <h3 class='calculator-title'>{{calculator.title}}</h3>
            <p class='calculator-description'>{{calculator.description}}</p>
            <form action="results.html" method="post">
                <div class='calculator-range'>
                    <div class='range-label'>
                        <span>Montante</span>
                        <span class='range-value'>{{calculator.targetAmount}} €</span>
                    </div>
                    <input type='range' v-model="calculator.targetAmount" value='{{calculator.targetAmount}}' v-bind:min='calculator.minAmount' v-bind:max='calculator.maxAmount' step='500'>
                </div>
                <div class='calculator-range'>
                    <div class='range-label'>
                        <span>Prazo</span>
                        <span class='range-value'>{{calculator.targetDuration}} meses</span>
                    </div>
                    <input type='range' v-model="calculator.targetDuration" value='{{calculator.targetDuration}}' v-bind:min='calculator.minDuration' v-bind:max='calculator.maxDuration' step='6'>
                </div>
                <div class='calculator-result'>
                    <span>Prestação mensal</span>
                    <span class='result-value'>{{Math.round((calculator.targetAmount / calculator.targetDuration * (1 + 0.01)) * 100) / 100}} €</span>
                </div>
                <div class='calculator-button-container'>
                    <button class='btn btn-primary-blue' type='submit'>Seguir</button>
                </div>
            </form>
        </div>
    `
};

Vue.component('hero-image', {
    props: ['heroImage', 'calculator'],
    template: `
        <div class='hero-image'>
            <div class='image-container'>
                <picture>
                    <source media='(max-width:768px)' v-bind:srcset='heroImage.img.srcM'>
                    <source media='(min-width:769px)' v-bind:srcset='heroImage.img.srcD'>
                    <img v-bind:src='heroImage.img.srcD' v-bind:alt='heroImage.img.alt'>
                </picture>
            </div>
            <div class='text-container'>
                <div class='text-wrapper'>
                    <h1 class='hero-tag'>{{heroImage.tag}}</h1>
                    <h2 class='hero-title'>{{heroImage.title}}</h2>
                    <div class='hero-description' v-html='heroImage.description'></div>
                </div>
                <calculator v-if='calculator' v-bind:calculator='calculator'></calculator>
            </div>
        </div>
    `,
    components: {
        'calculator': calculator
    }
});