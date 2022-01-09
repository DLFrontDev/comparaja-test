let resultsPage = new Vue({
    el: '#app',
    data: {
        results: [],
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