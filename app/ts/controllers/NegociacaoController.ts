import { Negociacao, Negociacoes, NegociacaoParcial } from '../models/index'
import { MensagemView, NegociacoesView } from '../views/index'
import { logarTempoDeExecucao, throttle, domInject } from '../helpers/decorators/index'
import { NegociacaoService } from '../services/index'
import { imprime } from '../helpers/index';

export class NegociacaoController{
   
    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView("#negociacoesView");
    private _mensagemView = new MensagemView('#mensagemView');

    private _negociacaoService = new NegociacaoService();

    constructor(){
        this._negociacoesView.update(this._negociacoes);
    }

    @throttle()
    @logarTempoDeExecucao()
    adiciona(){
        let data = new Date(this._inputData.val().replace(/-/g, ','));
        if(!this._ehDiaUtil(data)) {
            this._mensagemView.update('Somente negociações em dias úteis, por favor!');
            return 
        }
        const negociacao = new Negociacao(
                new Date(this._inputData.val().replace(/-/g, ',')), 
                parseInt(this._inputQuantidade.val()), 
                parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada.');

        imprime(negociacao, this._negociacoes);
    }

    private _ehDiaUtil(data: Date): boolean {
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }

    @throttle()
    importarDados() {
        function isOK(res: Response) {
            if(res.ok) {
                return res;
            } else {
                throw new Error(res.statusText);
            }
        }

        this._negociacaoService.obterNegociacoes(res => {
                if(res.ok) return res;
                throw new Error(res.statusText);
            })
            .then(negociacoes => {
                negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao));
                this._negociacoesView.update(this._negociacoes);
            })
            .catch((err: Error) => {
                this._mensagemView.update('Não foi possível importar os dados.');
                console.log(err.message);
            });
    }

}

enum DiaDaSemana{
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}