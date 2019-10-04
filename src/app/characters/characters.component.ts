import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import { Character } from '../character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  displayedColumns: string[] = ['character_name', 'character_description', 'updated_at'];
  data: Character[] = [];
  isLoadingResults = true;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getCharacters()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      },
        err => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
