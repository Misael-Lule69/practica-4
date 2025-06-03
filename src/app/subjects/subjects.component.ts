import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent {
  subjects: any[] = [
    { name: 'Base de datos', reason: 'Me gusta estresarme en crear tablas' },
    { name: 'Materias de relleno', reason: 'Ni estan chidas esas materias' },
    { name: 'Desarollo WEB Integral', reason: 'Aprendo a usar Angular' }
  ];
}