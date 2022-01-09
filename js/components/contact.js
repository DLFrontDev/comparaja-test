Vue.component('contact', {
    props: ['enabled'],
    template: `
        <div class='contact-container'>
            <button class='btn-contact' v-on:click='enabled=!enabled'>Quero ser contactado</button>
            <div v-if='enabled' class='contact-form-container'>
                <form>
                    <label for='costumer-name'>
                        <span>Nome</span>
                        <input type='text' name='customer-name' placeholder='Nome' required></input>
                    </label>
                    <label for='costumer-phone'>
                        <span>Telefone</span>
                        <input type='tel' name='customer-phone' placeholder='Nº Telefone' minlength='9' maxlength='9' required></input>
                    </label>
                    <label for='costumer-email'>
                        <span>Email</span>
                        <input type='email' name='customer-email' placeholder='Email' required></input>
                    </label>
                    <button class='btn btn-primary-green' type='submit'>Enviar</button>
                </form>
            </div>
        </div>
    `,
    data: {
        enabled: false
    }
});