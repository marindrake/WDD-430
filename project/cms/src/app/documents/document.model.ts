export class Document {
  public _id: string;
  public id: string;

  constructor(
    public name: string,
    public genre: string,
    public released: string,
    public rating: string,
    public path: string,
    public children?: Document[]
  ) {}
}
