export class ArtWork {

  private _id: string;
  private _Author: string;
  private _Date: dateFns;
  private _Description: string;
  private _Title: string;
  private _Urimage: string;

  constructor(id: string, Author: string, Date: dateFns, Description: string, Title: string, Urimage: string) {
    this._id = id;
    this._Author = Author;
    this._Date = Date;
    this._Description = Description;
    this._Title = Title;
    this._Urimage = Urimage;
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get Author(): string {
    return this._Author;
  }

  set Author(value: string) {
    this._Author = value;
  }

  get Date(): dateFns {
    return this._Date;
  }

  set Date(value: dateFns) {
    this._Date = value;
  }

  get Description(): string {
    return this._Description;
  }

  set Description(value: string) {
    this._Description = value;
  }

  get Title(): string {
    return this._Title;
  }

  set Title(value: string) {
    this._Title = value;
  }

  get Urimage(): string {
    return this._Urimage;
  }

  set Urimage(value: string) {
    this._Urimage = value;
  }
}
