class MensagemView extends View<string>{

    template(modelo : string){
        return `<p class="alert alert-info">${modelo}</p>`;
    }

}