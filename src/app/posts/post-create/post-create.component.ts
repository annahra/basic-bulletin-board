import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  // Output is turns postCreated into an event that we can listen to from the outside
  // @Output() postCreated = new EventEmitter<Post>();
  postCreated = new EventEmitter<Post>();

  constructor(public postsService: PostsService) { }

  ngOnInit(): void {
  }

  onAddPost(form: NgForm) {
    if(form.invalid) {
      return;
    }

    // const post:Post = {
    //   // form.value.[name attribute on html side]
    //   title: form.value.title,
    //   content: form.value.content
    // };
    // this.postCreated.emit(post);
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }

}
