import {Post, PostInterface} from "./post";

export class Api {
  public static async createPost(message: string): Promise<string> {
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
      .then(data => data.map((item: PostInterface) => Post.create(item)));
  }

  public static async getPost(id: string): Promise<Post> {
    return fetch(`/api/post/${id}`)
      .then(response => response.json())
      .then((item: PostInterface) => Post.create(item));
  }
}
