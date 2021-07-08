import { Component, OnInit } from '@angular/core';
import { BlogPostService } from 'src/app/service/blog-post.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
})
export class BlogPostComponent implements OnInit {
  blogPosts: any;
  constructor(private blogPostService: BlogPostService) {}

  ngOnInit(): void {
    this.getBlogPostData();
  }

  getBlogPostData() {
    this.blogPostService.getData().subscribe((res) => {
      console.log(res);
      this.blogPosts = res;
    });
  }
}
