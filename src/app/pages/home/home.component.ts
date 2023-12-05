import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  posts!: any[];
  constructor(private router: Router) {}

  redirectToPost(postId: number) {
    this.router.navigate(['/posts', postId]);
  }
}




