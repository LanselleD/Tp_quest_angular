import { Component } from '@angular/core';
import { Matiere } from '../model';
import { MatiereService } from './matiere.service';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.scss']
})
export class MatiereComponent {
  formMatiere: Matiere = null;

  constructor(private matiereService: MatiereService) {
  }

  list(): Array<Matiere> {
    return this.matiereService.findAll();
  }

  add(): void {
    this.formMatiere = new Matiere();
  }

  edit(id: number): void {
    this.formMatiere = {...this.matiereService.findById(id)};
  }

  save(): void {
    if(this.formMatiere.id) { // UPDATE
      this.matiereService.update(this.formMatiere);
    } else { // CREATE
      this.matiereService.create(this.formMatiere);
    }

    this.cancel();
  }

  remove(id: number): void {
    this.matiereService.remove(id);
  }

  cancel(): void {
    this.formMatiere = null;
  }
}
