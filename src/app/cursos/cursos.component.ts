import { Component } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  nomePortal: string;
  cursos: string[];

  
  constructor(private cursoService: CursosService) {
    this.nomePortal = 'https://loiane.training/';

    // for (let i = 0; i < this.cursos.length; i++) {
    //   let curso = this.cursos[i];
    // }

    //var service = new CursosService();
    this.cursos = this.cursoService.getCursos();
  }
}
