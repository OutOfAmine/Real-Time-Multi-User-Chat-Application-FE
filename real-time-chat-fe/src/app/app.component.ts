import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatBubbleComponent } from './chat-bubble/chat-bubble.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatBubbleComponent, PageLayoutComponent],
  template: '<app-page-layout></app-page-layout>',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'real-time-chat-fe';
}
