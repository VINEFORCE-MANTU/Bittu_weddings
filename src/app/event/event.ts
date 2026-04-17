import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  standalone: true, // ✅ important if using Angular standalone
  imports: [CommonModule], // ✅ ADD THIS
  templateUrl: './event.html',
})
export class EventComponent {

  // ✅ Event Data (Dynamic)
  events = [
  {
    name: 'शुभ तिलक (Shubh Tilak)',
    date: '27 अप्रैल 2026 (Monday)',
    time: '—',
    venue: "वर का निवास (Groom's Residence)",
    image: 'assets/tilak.jpg'
  },
  {
    name: 'शुभ मटकोर (Shubh Matkor)',
    date: '30 अप्रैल 2026 (Thursday)',
    time: '—',
    venue: "गृह समारोह (Home Ceremony)",
    image: 'assets/matikod.png'
  },
  {
    name: 'शुभ विवाह (Shubh Vivah)',
    date: '01 मई 2026 (Friday)',
    time: 'शाम 4:00 बजे (Baraat Departure)',
    venue: 'वधु पक्ष (Bride’s Place)',
    image: 'assets/wedding.jpg'
  },
  {
    name: 'Reception',
    date: '2 May 2026',
    time: '8:00 PM',
    venue: 'Grand Ballroom',
    image: 'assets/Reception.jpg'
  }];
}