import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup.component';
import { Post } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  post: Post | undefined;

  constructor(private dialog: MatDialog) {}

  openPopup(post: any) {
    this.dialog.open(PopupComponent);
    this.post = post;
  }
  closePopup() {
    this.dialog.closeAll();
  }

  getPost() {
    return this.post;
  }
}
