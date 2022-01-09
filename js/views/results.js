let resultsPage = new Vue({
    el: '#app',
    data() {
        return {
            results: []
        }                           
    },
    methods: {
        getResults: function() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = () => {
                if (xhttp.readyState === XMLHttpRequest.DONE) {
                    this.results = JSON.parse(xhttp.response);
                }
            };
            xhttp.open("GET", "https://www.comparaja.pt/api/mortgage/v2/mortgages?journeyId=355596f2-3e29-4ecf-af4d-d96c31a32a12&comingFromFunnel=0&wantToBorrow=180000&wantToBorrowTime=30&propertyValue=200000&borrowingPercentage=90&sortBy=monthlyRepayment%2B&sortBy=totalRepayment%2B&sortBy=taeg%2B&newCheckout=true&page=1", true);
            xhttp.send();
        }
    },
    components: {
        'result-list': resultList
    },
    mounted() {
        this.getResults()
    }
});