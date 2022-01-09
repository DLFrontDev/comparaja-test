Vue.component('faq-list', {
    props: ['faqs', 'activeModal'],
    template: `
        <div class='faq-list'>
            <h2 class='faq-list-title'>{{faqs.title}}</h2>
            <div class='faq-list-container' v-for='(faq, i) in faqs.faqList'>
                <h3 class='faq-list-subtitle' v-if='faqs.subtitle'>{{faq.subtitle}}</h3>
                <ul>
                    <li v-for='(faq, o) in faq.faqs'>
                        <span>{{faq.title}}</span>
                        <button class='btn btn-secondary-green' v-on:click='activeModal=faq'>Saiba mais</button>
                    </li>
                </ul>
            </div>
            <div class='author-container'>
                <div class='author-image'>
                    <img v-bind:src='faqs.author.src' v-bind:alt='faqs.author.name'>
                </div>
                <div class='author-info'>
                    <p class='author-info-title'>Conteúdo revisto por <span>{{faqs.author.name}}</span></p>
                    <p class='author-info-role'>{{faqs.author.role}}</p>
                    <p class='author-info-description'>{{faqs.author.description}}</p>
                </div>
            </div>
            <transition name='fade'>
                <div class='faq-modal-container' v-if='activeModal' v-on:click.self='activeModal=false'>
                    <div class='faq-modal-wrapper'>
                        <button class='btn-close' type='button' v-on:click='activeModal=false'></button>
                        <div class='faq-modal-title-wrapper'>
                            <h2>{{activeModal.title}}</h2>
                            <hr>
                        </div>
                        <div class='faq-modal-content-wrapper' v-html='activeModal.content'></div>
                    </div>
                </div>
            </transition>
        </div>
    `,
    data: {
        activeModal: ''
    },
    methods: {
        toggleModal: function() {
            if (this.activeModal) {
                document.body.classList.add('scroll-lock');
                const modalWrapper = document.querySelector('.faq-modal-wrapper');
                const contentWrapper = document.querySelector('.faq-modal-content-wrapper');
                let computedStyle = getComputedStyle(modalWrapper);
                let wrapperHeight = modalWrapper.clientHeight - parseFloat(computedStyle.paddingTop) - parseFloat(computedStyle.paddingBottom) - document.querySelector('.faq-modal-title-wrapper').clientHeight;

                if (contentWrapper.clientHeight > wrapperHeight) {
                    contentWrapper.classList.add('has-scroll');
                    contentWrapper.style.maxHeight = wrapperHeight + 'px';
                }
            } else {
                document.body.classList.remove('scroll-lock');
            }
        }
    },
    updated: function () {
        this.$nextTick(function () {
            this.toggleModal();
        })
    }
})