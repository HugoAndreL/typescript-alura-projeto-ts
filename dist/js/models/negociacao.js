export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this._valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return this._data;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this.quantidade * this._valor;
    }
    static CriaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}
