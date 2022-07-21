import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css'],
})
export class PostPageComponent implements OnInit {
  postId!: string;
  postData!: any;
  postComments!: any;
  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) {
    this.route.params.subscribe((params) => {
      this.postId = params['id'];
    });
    this.postService.getSinglePost(this.postId).subscribe((data) => {
      this.postData = data;
    });
    this.postService.getPostComment(this.postId).subscribe((data) => {
      this.postComments = data;
      console.log(data);
    });
  }

  ngOnInit(): void {}
}
