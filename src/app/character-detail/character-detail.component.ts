import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Character } from '../character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})

export class CharacterDetailComponent implements OnInit {

  character: Character = { _id: null, character_name: '', character_description: '', character_level: null, updated_at: null };
  isLoadingResults = true;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCharacterDetails(this.route.snapshot.params['id']);
  }

  getCharacterDetails(id) {
    this.api.getCharacter(id)
      .subscribe(data => {
        this.character = data;
        console.log(this.character);
        this.isLoadingResults = false;
      });
  }

  deleteCharacter(id) {
    this.isLoadingResults = true;
    this.api.deleteCharacter(id)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/characters']);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
