import { Component, signal, AfterViewInit } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { Couple } from './couple/couple';
import { EventComponent } from './event/event';
import { Family } from './family/family';
import { Footer } from './footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
   imports: [RouterModule, Navbar, Footer],
  styleUrl: './app.css',
})
export class App implements AfterViewInit {

  protected readonly title = signal('Bittu');

 
  ngAfterViewInit() {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }

      });
    }, {
      threshold: 0.15
    });

    const elements = document.querySelectorAll(
      '.fade-up, .fade-right, .fade-left, .zoom-in'
    );

    elements.forEach(el => observer.observe(el));
  }
}