import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery implements AfterViewInit {
filter: string = 'all';

constructor(private router: Router) {}

goBack() {
  this.router.navigate(['/']); // go to home
}
  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.15 });

    const elements = document.querySelectorAll(
      '.fade-up, .fade-right, .fade-left, .zoom-in'
    );

    elements.forEach(el => observer.observe(el));
  }

}