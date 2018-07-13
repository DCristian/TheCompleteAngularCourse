import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/bad-input-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(
    private postService: PostService
  ) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService
      .get()
      .subscribe(
        (response) => {
          this.posts = response;
        });
  }

  createPost(input: HTMLInputElement) {
    let post = {
      title: input.value
    };
    input.value = '';

    this.postService
      .create(post)
      .subscribe(
        (response: any) => {
            post['id'] = response.id;
            this.posts.splice(0, 0, post);
          }, (error: AppError) => {
            if (error instanceof BadInputError) {
              // this.form.setErrors(error.originalError);
            }

            throw error;
          });
  }

  updatePost(post) {
    this.postService
      .update(post.id, {isRead: true})
      .subscribe(
        (response) => {
          console.log(response);
        });
  }

  deletePost(post) {
    this.postService
      // .delete(post.id)
      .delete(345)
      .subscribe(
        () => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        }, (error: AppError) => {
          if (error instanceof NotFoundError) {
            return console.log('This post has already been deleted', error);
          }

          throw error;
        });
  }
}
