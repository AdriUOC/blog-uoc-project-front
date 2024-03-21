import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { PostService } from 'src/app/Services/post.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent {
  constructor(
    private postService: PostService,
    private router: Router,
    private localStorageService: LocalStorageService,
    private sharedService: SharedService
  ) {}
  // TODO 12
}
