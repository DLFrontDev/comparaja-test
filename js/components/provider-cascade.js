Vue.component('provider-cascade', {
    props: ['providers', 'maxRender'],
    template: `
        <div class='provider-cascade'>
            <ul v-for='i in maxRender' :key="maxRender">
                <li v-for='provider in providers'>
                    <img v-bind:src='provider.src'>
                </li>
            </ul>
        </div>
    `,
    data: {
        maxRender: 0
    },
    mounted() {
        this.$nextTick(() => {
            this.maxRender = window.innerWidth > 768 ? 3 : window.innerWidth > 480 ? 2 : 1
            window.addEventListener('resize', this.onResize);
        })
    },
    watch: {
        maxRender: function() {
            this.$nextTick(() => {
                this.assignDuration();
            })
        }
    },
    methods: {  
        onResize() {
            this.maxRender = window.innerWidth > 768 ? 3 : window.innerWidth > 480 ? 2 : 1
        },
        assignDuration() {
            if (this.maxRender === 3 && document.querySelector('.provider-cascade ul').children.length > 4 || this.maxRender === 2  && document.querySelector('.provider-cascade ul').children.length > 2 || this.maxRender === 1  && document.querySelector('.provider-cascade ul').children.length > 1) {
                for (let i = 0; i < document.querySelectorAll('.provider-cascade ul').length; i++) {
                    const element = document.querySelectorAll('.provider-cascade ul')[i];
                    element.style.animationDuration = (this.maxRender === 3 ? element.clientHeight : element.clientWidth)  / 60 + 's';
                }
            }
        }
    }
})