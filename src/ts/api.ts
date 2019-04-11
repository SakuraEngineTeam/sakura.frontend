import { ThreadPreviewInterface, ThreadPreview } from "./thread-preview";
import { PostInterface, Post } from "./post";

let base_api_url = "http://127.0.0.1:8000";

export class Api {
  public static async createThread(message: string): Promise<string> {
    return fetch(base_api_url + `/api/threads`, {
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
    return fetch(base_api_url + `/api/threads/${threadId}/posts`, {
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
    return fetch(base_api_url + '/api/thread-previews')
      .then(response => response.json())
      .then(data => data.map((item: ThreadPreviewInterface) => ThreadPreview.create(item)));
  }

  public static async getThreadPosts(id: string): Promise<Post[]> {
    return fetch(base_api_url + `/api/threads/${id}/posts`)
      .then(response => response.json())
      .then(data => data.map((item: PostInterface) => Post.create(item)));
  }
}
