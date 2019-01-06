export interface PostInterface {
  id: string;
  viewId: number;
  message: string;
  createdAt: string;
}

export class Post implements PostInterface {
  public constructor(
    public readonly id: string,
    public readonly viewId: number,
    public readonly message: string,
    public readonly createdAt: string) {
  }

  /**
   * Creates an instance of post from a post-like object.
   */
  public static create(post: PostInterface): Post {
    return new Post(post.id, post.viewId, post.message, post.createdAt);
  }
}
