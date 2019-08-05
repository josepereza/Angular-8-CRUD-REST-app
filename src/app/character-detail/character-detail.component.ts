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

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
