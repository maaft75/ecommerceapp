import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Interfaces/Product';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchResults : Array<Product>;
  constructor(private searchService : SearchService) { }

  ngOnInit(): void {
    console.log(this.searchService.sharedData);
    this.searchResults = this.searchService.sharedData;
  }
}
