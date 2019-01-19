import { Component, OnInit } from '@angular/core';
import { BoekService } from './services/boek.service';
import { Observable } from 'rxjs';
import { Boek } from './models/boek.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  bookList$: Observable<Boek[]>;
  editBoek: Boek;
  
  constructor(private bs: BoekService){ }

  ngOnInit(): void{
    this.fetchList();
  }

  fetchList(): void{
    this.bookList$ = this.bs.getBoeken();
  }

  newEdit(boek: Boek): void{
    this.editBoek = boek;
  }

  finishEdit(): void{
    this.editBoek = undefined;
    this.fetchList();
  }

}
