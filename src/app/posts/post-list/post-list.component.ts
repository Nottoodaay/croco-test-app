import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { PopupService } from '../popup/popup.service';
import { MatDialogModule } from '@angular/material/dialog';
import { Post } from '../../interfaces';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [HttpClientModule, MatDialogModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent implements OnInit {
  constructor(private popupService: PopupService) {}

  public httpClient = inject(HttpClient);

  posts: Post[] = [];

  ngOnInit(): void {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe({
        next: (data: any) => {
          this.posts = data;
        },
      });
  }
  openPopup(post: Post) {
    this.popupService.openPopup(post);
  }
}
