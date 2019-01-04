import {Post, PostInterface} from "./post";

export class Api {
  public static async createPost(message: string): Promise<number> {
    return fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({message}),
    })
      .then(response => response.json())
      .then(data => data.id);
  }

  public static async getPosts(): Promise<Post[]> {
    return fetch('/api/posts')
      .then(response => response.json())
      .then(data => data.map((item: PostInterface) => new Post(item.id, item.message, item.createdAt)));
  }

  public static async getPost(id: number): Promise<Post> {
    return fetch(`/api/post/${id}`)
      .then(response => response.json())
      .then((item: PostInterface) => new Post(item.id, item.message, item.createdAt));
  }
}
