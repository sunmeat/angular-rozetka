import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: []
})

export class HeaderComponent implements OnInit, OnDestroy {
  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

  searchText: string = '';

  onSearchInput(event: Event) {
    this.searchText = (event.target as HTMLInputElement).value;
  }

  search() {
    alert('Пошук ' + this.searchText + " почався...");
  }
}