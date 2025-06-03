import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatListModule
  ],
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent {
  hobbies: string[] = [
    'Estresarme por mis materias..',
    'Jugar videojuegos',
    'Salir de ruta',
    'Ver pelicular',
    'Ser su menso.'
  ];
}