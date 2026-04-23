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

  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['/']); // go to home
  }
  images = [
    { src: 'assets/GH.png', category: 'haldi', title: 'Ceremony Moments' },
    { src: 'assets/GH1.png', category: 'haldi', title: 'Ceremony Moments' },
    { src: 'assets/GH2.png', category: 'haldi', title: 'Ceremony Moments' },
    { src: 'assets/Haldi.jpg', category: 'haldi', title: 'Ceremony Moments' },
    { src: 'assets/BH.png', category: 'haldi', title: 'Ceremony Moments' },
    { src: 'assets/BH1.png', category: 'haldi', title: 'Ceremony Moments' },
    { src: 'assets/BH3.png', category: 'haldi', title: 'Ceremony Moments' },
    { src: 'assets/GM.png', category: 'mehendi', title: 'Beautiful Hands' },
    { src: 'assets/GM1.png', category: 'mehendi', title: 'Beautiful Hands' },
    { src: 'assets/mehandi.jpg', category: 'mehendi', title: 'Beautiful Hands' },
    { src: 'assets/GM2.png', category: 'mehendi', title: 'Beautiful Hands' },
    { src: 'assets/BM.png', category: 'mehendi', title: 'Beautiful Hands' },
    { src: 'assets/BM2.png', category: 'mehendi', title: 'Beautiful Hands' },
    { src: 'assets/W1.png', category: 'wedding', title: 'Sacred Rituals' },
    { src: 'assets/W2.png', category: 'wedding', title: 'Sacred Rituals' },
    { src: 'assets/W8.png', category: 'wedding', title: 'Sacred Rituals' },
    { src: 'assets/W3.png', category: 'wedding', title: 'Sacred Rituals' },
    { src: 'assets/W7.jpg', category: 'wedding', title: 'Sacred Rituals' },
    { src: 'assets/W4.png', category: 'wedding', title: 'Sacred Rituals' },
    { src: 'assets/W5.png', category: 'wedding', title: 'Sacred Rituals' },
    { src: 'assets/W6.png', category: 'wedding', title: 'Sacred Rituals' },
    { src: 'assets/Family.jpeg', category: 'family', title: 'Family Love' },
    { src: 'assets/GroomaBrotherDaughter.png', category: 'family', title: 'Family Love' },
    { src: 'assets/Mom and dad.jpeg', category: 'family', title: 'Family Love' },
    { src: 'assets/gromms brother1.png', category: 'family', title: 'Family Love' },
    { src: 'assets/GBhabhi.png', category: 'family', title: 'Family Love' },
    { src: 'assets/GroomSister.jpeg', category: 'family', title: 'Family Love' },
  ];

  get filteredImages() {
    if (this.filter === 'all') return this.images;
    return this.images.filter(img => img.category === this.filter);
  }

  activeClass = 'bg-[#c8a2a2] text-white shadow-md px-6 py-2 border rounded-full text-sm tracking-wide transition';
  normalClass = 'text-[#8c8c8c] px-6 py-2 border rounded-full text-sm tracking-wide transition';
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