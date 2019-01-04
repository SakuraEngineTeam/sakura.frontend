export interface PostInterface {
  id: number;
  message: string;
  createdAt: string;
}

export class Post implements PostInterface {
  public constructor(
    public readonly id: number,
    public readonly message: string,
    public readonly createdAt: string) {
  }
}
