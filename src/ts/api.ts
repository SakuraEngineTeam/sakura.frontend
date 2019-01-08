import { ThreadPreviewInterface, ThreadPreview } from "./thread-preview";
import { PostInterface, Post } from "./post";

export class Api {
  public static async createThread(message: string): Promise<string> {
    return fetch(`/api/threads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
      }),
    })
      .then(response => response.json())
      .then(data => data.id);
  }

  public static async createPost(threadId: string, message: string): Promise<string> {
    return fetch(`/api/threads/${threadId}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        threadId,
        message,
      }),
    })
      .then(response => response.json())
      .then(data => data.id);
  }

  public static getThreadPreviews(): Promise<ThreadPreviewInterface[]> {
    return fetch('/api/thread-previews')
      .then(response => response.json())
      .then(data => data.map((item: ThreadPreviewInterface) => ThreadPreview.create(item)));
  }

  public static async getThreadPosts(id: string): Promise<Post[]> {
    return fetch(`/api/threads/${id}/posts`)
      .then(response => response.json())
      .then(data => data.map((item: PostInterface) => Post.create(item)));
  }
}
