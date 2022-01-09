let headerComp = {
    template: `
        <header class='header-container'>
            <a class='header-logo-wrapper' href='index.html'>
                <img src='./img/comparaja.svg'>
            </a>
        </header>
    `
};

let footerComp = {
    props: ['footer'],
    template: `
    <footer class='footer-container'>
        <div class='footer-wrapper'>
            <div class='logo-container'>
                <img src='./img/logo-white.png'>
            </div>
            <ul>
                <li v-for='list in footer.lists'>
                    <ul>
                        <li v-for='item in list'>
                            <p v-if='item.type=="title"'>{{item.text}}</p>
                            <a v-if='item.type=="link"' href='#'>{{item.text}}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </footer>
    `
};

Vue.component('main-container', {
    props: ['footer'],
    template: `
        <div class='content-container'>
            <header-component></header-component>
            <div class='content-wrapper'>
                <slot></slot>
            </div>
            <footer-component v-bind:footer='footer'></footer-component>
        </div>
    `,
    components: {
        'header-component': headerComp,
        'footer-component': footerComp,
    }
});