let resultList = {
    props: ['results'],
    template: `
        <div class='result-list'>
            <div class='result-list-title-container'>
                <h2>Resultados</h2>
            </div>
            <div class='result-card-container'>
                <div class='result-card-wrapper'>
                    <ul v-if="results.products">
                        <li v-for='result in results.products'>
                            <h4>{{result.provider.name}}</h4>
                            <hr>
                            <p class='card-tax'>
                                <span>TAN</span>
                                <span>{{result.attributes.annualRate}}%</span>
                            </p>
                            <p class='card-tax'>
                                <span>TAEG</span>
                                <span>{{result.attributes.apr}}%</span>
                            </p>
                            <p class='card-total'>
                                <span>MTIC</span>
                                <span>{{Math.round((result.attributes.totalRepayment) * 100) / 100}} €</span>
                            </p>
                            <p class='card-month'>
                                <span>Prestação Mensal</span>
                                <span>{{Math.round((result.attributes.monthlyRepayment) * 100) / 100}} €</span>
                            </p>
                        </li>
                    </ul>
                    <div v-else class='loading-container'></div>
                </div>
            </div>
        </div>
    `
}