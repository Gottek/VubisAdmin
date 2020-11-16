export class ArtWork {

  id: string;
  Author: string;
  Date: dateFns;
  Description: string;
  Title: string;
  Urimage: string;

  constructor(id: string, Author: string, Date: dateFns, Description: string, Title: string, Urimage: string) {
    this.id = id;
    this.Author = Author;
    this.Date = Date;
    this.Description = Description;
    this.Title = Title;
    this.Urimage = Urimage;
  }

}
