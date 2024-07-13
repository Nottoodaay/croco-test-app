import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-post',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './users-post.component.html',
  styleUrl: './users-post.component.css',
})
export class UsersPostComponent {
  public httpClient = inject(HttpClient);
  userId!: number;

  posts: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = Number(params['userId']);
    });
    if (this.userId >= 1) {
      this.httpClient
        .get(`https://jsonplaceholder.typicode.com/posts?userId=${this.userId}`)
        .subscribe({
          next: (posts: any) => {
            this.posts = posts;
          },
        });
    }
  }
}
