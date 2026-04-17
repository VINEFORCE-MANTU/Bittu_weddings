import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { EventComponent } from '../event/event';
import { Couple } from '../couple/couple';
import { Family } from '../family/family';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,EventComponent,Couple,Family],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {

  // ⏳ Countdown
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  intervalId: any;

  // 💎 Invitation Toggle
  isInviteOpen = false;

  // 👇 Scroll button control
  showScrollButton = true;

  constructor(private cdr: ChangeDetectorRef) {}

  // 🔥 Scroll Handler (PRO WAY)
  handleScroll = () => {
    const scrollY = window.scrollY;
    const screenHeight = window.innerHeight;

    this.showScrollButton = scrollY < screenHeight - 100;
  };

  ngOnInit() {
    // Countdown
    this.updateCountdown();

    this.intervalId = setInterval(() => {
      this.updateCountdown();
      this.cdr.detectChanges();
    }, 1000);

    // 👇 Add scroll listener
    window.addEventListener('scroll', this.handleScroll);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);

    // 👇 Remove scroll listener (important)
    window.removeEventListener('scroll', this.handleScroll);
  }

  // 🔽 Scroll button click
  scrollToSection() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }

  // 💎 Invitation Modal
  toggleInvite() {
    this.isInviteOpen = !this.isInviteOpen;

    if (this.isInviteOpen) {
      setTimeout(() => {
        const elements = document.querySelectorAll(
          '.zoom-in, .fade-up, .fade-left, .fade-right-text'
        );
        elements.forEach(el => el.classList.add('show'));
      }, 100);
    }
  }

  // ⏳ Countdown logic
  updateCountdown() {
    const weddingDate = new Date('2026-05-01T00:00:00+05:30').getTime();
    const now = new Date().getTime();

    const diff = weddingDate - now;

    if (diff <= 0) {
      this.days = this.hours = this.minutes = this.seconds = 0;
      clearInterval(this.intervalId);
      return;
    }

    this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    this.minutes = Math.floor((diff / (1000 * 60)) % 60);
    this.seconds = Math.floor((diff / 1000) % 60);
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