import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-likes',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent {
  categories = [
    {
      name: 'Comida',
      icon: 'restaurant',
      items: [
        { name: 'Pizza', icon: 'local_pizza' },
        { name: 'Sushi', icon: 'set_meal' },
        { name: 'Helado', icon: 'icecream' }
      ]
    },
    {
      name: 'Música',
      icon: 'music_note',
      items: [
        { name: 'Rock', icon: 'graphic_eq' },
        { name: 'Electrónica', icon: 'volume_up' },
        { name: 'Banda', icon: 'guittar' }
      ]
    },
    {
      name: 'Películas',
      icon: 'movie',
      items: [
        { name: 'El Padrino', icon: 'theaters' },
        { name: 'Interestelar', icon: 'star' },
        { name: 'Parásitos', icon: 'emoji_events' }
      ]
    }
  ];
}