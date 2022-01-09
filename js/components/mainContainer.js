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
    template: `
    <footer class='footer-container'>
        <ul>
            <li>
                <a href='#'>Footer link</a>
            </li>
        </ul>
    </footer>
    `
};

Vue.component('main-container', {
    template: `
        <div class='content-container'>
            <header-component></header-component>
            <div class='content-wrapper'>
                <slot></slot>
            </div>
            <footer-component></footer-component>
        </div>
    `,
    components: {
        'header-component': headerComp,
        'footer-component': footerComp,
    }
});