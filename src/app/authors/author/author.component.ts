import { NgIf } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthorService } from '../service/author.service';
import { Author } from '../model/author';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [NgIf],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css',
})
export class AuthorComponent implements OnInit, OnDestroy {
  selectedAuthor!: Author | null;
  private subscription!: Subscription;
  private route: ActivatedRoute = inject(ActivatedRoute);
  private authorService: AuthorService = inject(AuthorService);

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.subscription = this.authorService.getAuthor(id).subscribe({
        next: (data: Author) => {
          console.log('Author found.');
          this.selectedAuthor = data;
        },
        error: (_: any) => {
          console.log('Author not found.');
          this.selectedAuthor = null;
        },
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
