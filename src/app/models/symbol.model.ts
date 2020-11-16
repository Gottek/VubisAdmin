export class Symbol {

  private _id:string;
  private _symbol:string;
  private _idArtwork:string;
  private _url:string;


  constructor(id: string, symbol: string, idArtwork: string, url: string) {
    this._id = id;
    this._symbol = symbol;
    this._idArtwork = idArtwork;
    this._url = url;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get symbol(): string {
    return this._symbol;
  }

  set symbol(value: string) {
    this._symbol = value;
  }

  get idArtwork(): string {
    return this._idArtwork;
  }

  set idArtwork(value: string) {
    this._idArtwork = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
