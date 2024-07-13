import { Component, OnInit } from '@angular/core';
import { PopupService } from './popup.service';
import { Post } from '../../interfaces';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
})
export class PopupComponent implements OnInit {
  constructor(private popupService: PopupService) {}

  post: Post | undefined;

  closePopup() {
    this.popupService.closePopup();
  }
  ngOnInit(): void {
    this.post = this.popupService.getPost();
  }
}
