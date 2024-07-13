import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../interfaces';
import { PopupService } from '../../posts/popup/popup.service';

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

  posts: Post[] = [];

  constructor(
    private route: ActivatedRoute,
    private popUpService: PopupService
  ) {}

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
  openPopup(post: Post) {
    this.popUpService.openPopup(post);
  }
}
