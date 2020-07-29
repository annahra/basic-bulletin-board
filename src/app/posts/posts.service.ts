import { Post } from './post.model';
import { Injectable } from '@angular/core';

//create only one instance of this service. so only one instance of the posts array
@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];

  getPosts() {
    // 3 dots related to dereferencing the posts array
    return [...this.posts];
  }

  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content};
    this.posts.push(post);
  }
}
