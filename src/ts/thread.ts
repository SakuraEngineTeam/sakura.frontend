export interface ThreadInterface {
  threadId: string;
  bumpedAt: string;
}

export class Thread implements ThreadInterface {
  public constructor(
    public readonly threadId: string,
    public readonly bumpedAt: string) {
  }

  /**
   * Creates an instance of thread from a thread-like object.
   */
  public static create(thread: ThreadInterface): Thread {
    return new Thread(
      thread.threadId,
      thread.bumpedAt
    );
  }
}
