import { Component, inject, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { User } from '../../interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  public httpClient = inject(HttpClient);
  private router = inject(Router);
  users: User[] = [];

  ngOnInit(): void {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data: any) => {
          this.users = data;
        },
      });
  }

  userPosts(userId: number): void {
    this.router.navigate(['/users/posts', userId]);
  }
}
