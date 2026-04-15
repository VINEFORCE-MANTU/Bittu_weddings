import { Component, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { Couple } from './couple/couple';
import { EventComponent } from './event/event';
import { Family } from './family/family';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar,Home,Couple,EventComponent,Family,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Bittu');
}
