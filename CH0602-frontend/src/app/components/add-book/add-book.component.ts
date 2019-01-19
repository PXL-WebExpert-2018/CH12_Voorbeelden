import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Boek } from 'src/app/models/boek.model';
import { BoekService } from 'src/app/services/boek.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @Output() createBoek: EventEmitter<Boek> = new EventEmitter();
  addBoekForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private bs: BoekService) { }

  ngOnInit(): void {
    this.addBoekForm = this.formBuilder.group({
      titel: [''],
      auteur: [''],
      isbn: [''],
      date: [''],
    });
  }

  onSubmit(): void{
    let boek: Boek = <Boek>this.addBoekForm.value;
    this.bs.addBoek(boek).subscribe(_ => {
      this.createBoek.emit(boek);
    });
    
  }

}
