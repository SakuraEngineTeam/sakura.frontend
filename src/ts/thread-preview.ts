import { PostInterface, Post } from "./post";

export interface ThreadPreviewInterface {
  threadId: string;
  id: string;
  viewId: number;
  message: string;
  createdAt: string;
  bumpedAt: string;
  posts: PostInterface[];
}

export class ThreadPreview implements ThreadPreviewInterface {
  public constructor(
    public readonly threadId: string,
    public readonly id: string,
    public readonly viewId: number,
    public readonly message: string,
    public readonly createdAt: string,
    public readonly bumpedAt: string,
    public readonly posts: PostInterface[]) {
  }

  /**
   * Creates an instance of thread from a thread-like object.
   */
  public static create(thread: ThreadPreviewInterface): ThreadPreview {
    return new ThreadPreview(
      thread.threadId,
      thread.id,
      thread.viewId,
      thread.message,
      thread.createdAt,
      thread.bumpedAt,
      thread.posts.map(p => Post.create(p))
    );
  }
}
