import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent implements OnInit {
  public httpClient = inject(HttpClient);

  posts: any[] = [];

  ngOnInit(): void {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe({
        next: (posts: any) => {
          this.posts = posts;
        },
      });
  }
}
