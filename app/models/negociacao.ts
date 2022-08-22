export class Negociacao {
  // private _data: Date;
  // private _quantidade: number;
  private _valor: number;

  constructor (private _data: Date, public readonly quantidade: number, valor: number) {
    // this._data = data;
    // this._quantidade = quantidade;
    this._valor = valor;
  }

  get data (): Date {
    const data = new Date(this._data.getTime());
    return this._data;
  }

  get valor (): number {
    return this._valor;
  }

  get volume (): number {
    return this.quantidade * this._valor;
  }

  public static CriaDe (dataString: string, quantidadeString: string, valorString: string): Negociacao {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ','));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(date, quantidade, valor);
  }
}