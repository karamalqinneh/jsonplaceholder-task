import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchInput!: string;
  @Output() searchParam = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleSearch() {
    this.searchParam.emit(this.searchInput);
  }
}
