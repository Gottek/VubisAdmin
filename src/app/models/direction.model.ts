export class Direction {
  private _id:string;
  private _direction:string[];
  private _distance:number[];
  private _idArtWork:string;


  constructor(id: string, direction: string[], distance: number[], idArtWork: string) {
    this._id = id;
    this._direction = direction;
    this._distance = distance;
    this._idArtWork = idArtWork;
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get direction(): string[] {
    return this._direction;
  }

  set direction(value: string[]) {
    this._direction = value;
  }

  get distance(): number[] {
    return this._distance;
  }

  set distance(value: number[]) {
    this._distance = value;
  }

  get idArtWork(): string {
    return this._idArtWork;
  }

  set idArtWork(value: string) {
    this._idArtWork = value;
  }
}
