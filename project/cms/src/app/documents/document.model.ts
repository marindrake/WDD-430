export class Document {
  public _id: string;
  public id: string;

  constructor(
    public name: string,
    public genre: string,
    public rating: string,
    public url: string,
    public children?: Document[]
  ) {}
}
