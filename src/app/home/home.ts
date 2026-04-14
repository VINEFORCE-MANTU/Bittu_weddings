import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './home.html',
})
export class Home implements OnInit, OnDestroy {

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  intervalId: any;

  // ✅ Invitation Toggle
  isInviteOpen = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.updateCountdown();

    this.intervalId = setInterval(() => {
      this.updateCountdown();
      this.cdr.detectChanges();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  toggleInvite() {
    this.isInviteOpen = !this.isInviteOpen;
  }

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
}