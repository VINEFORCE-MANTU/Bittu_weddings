import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { RouterModule } from '@angular/router'; // 🔥 MUST


@Component({
  selector: 'app-navbar',
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.html',
})
export class Navbar {
  isMenuOpen = false;

constructor(private cdr: ChangeDetectorRef) {}

ngAfterViewInit() {
  window.addEventListener('scroll', () => {
    this.isScrolled = window.scrollY > 10;
    this.cdr.detectChanges(); // 🔥 fixes error properly
  });
}
toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}
isScrolled = false;

ngOnInit() {
  window.addEventListener('scroll', () => {
    this.isScrolled = window.scrollY > 20;
  });
}
}
