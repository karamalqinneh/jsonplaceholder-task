import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Post } from 'src/app/Post';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  posts: Post[] = [];
  originalPosts: Post[] = [];
  postId: string = '';
  @Input() searchQuery: string = '';
  constructor(private postService: PostsService, private router: Router) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.originalPosts = posts;
    });
  }

  ngOnChanges(): void {
    this.posts = this.originalPosts;
    this.posts = this.posts.filter((post) =>
      post.title.includes(this.searchQuery)
    );
  }

  handleClick(id: number): void {
    this.router.navigate(['post/' + `${id}`]);
  }
}
