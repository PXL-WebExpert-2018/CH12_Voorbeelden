import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Boek } from 'src/app/models/boek.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BoekService } from 'src/app/services/boek.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  @Input() editBoek?: Boek;
  @Output() editFinished: EventEmitter<any> = new EventEmitter();
  editBoekForm: FormGroup

  constructor(private formBuilder: FormBuilder, private bs: BoekService) { }

  ngOnInit() {
    this.editBoekForm = this.formBuilder.group({
      titel: [this.editBoek.titel],
      auteur: [this.editBoek.auteur],
      isbn: [this.editBoek.isbn],
      date: [formatDate(this.editBoek.date,'yyyy-MM-dd','en-us')],
    });
  }

  onSubmit(): void{
    let changedBoek: Boek = <Boek>this.editBoekForm.value;
    changedBoek._id = this.editBoek._id;
    this.bs.editBoek(changedBoek).subscribe(_ => {
      this.editFinished.emit();
    });
  }

}
