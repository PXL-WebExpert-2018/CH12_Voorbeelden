import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Boek } from 'src/app/models/boek.model';
import { BoekService } from 'src/app/services/boek.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input() bookList$: Observable<Boek[]>;
  @Output() listChanged: EventEmitter<Boek> = new EventEmitter();
  @Output() newEdit: EventEmitter<Boek> = new EventEmitter();

  constructor(private bs: BoekService) { }

  ngOnInit() {
  }

  delete(boek: Boek){
    this.bs.removeBoek(boek).subscribe(_ => {
      this.listChanged.emit(boek);
    });
  }

  edit(boek: Boek){
    this.newEdit.emit(boek);
  }

}
