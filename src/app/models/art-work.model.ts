export class ArtWork {

  private id: string;
  private Author: string;
  private Date: dateFns;
  private Description: string;
  private Title: string;
  private Urimage: string;

  constructor(id: string, Author: string, Date: dateFns, Description: string, Title: string, Urimage: string) {
    this.id = id;
    this.Author = Author;
    this.Date = Date;
    this.Description = Description;
    this.Title = Title;
    this.Urimage = Urimage;
  }

}
