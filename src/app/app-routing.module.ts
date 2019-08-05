import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterAddComponent } from './character-add/character-add.component';
import { CharacterEditComponent } from './character-edit/character-edit.component';


const routes: Routes = [
  {
    path: 'characters',
    component: CharactersComponent,
    data: { title: 'List of Characters' }
  },
  {
    path: 'character-details/:id',
    component: CharacterDetailComponent,
    data: { title: 'Character Details' }
  },
  {
    path: 'character-add',
    component: CharacterAddComponent,
    data: { title: 'Add Character' }
  },
  {
    path: 'character-edit/:id',
    component: CharacterEditComponent,
    data: { title: 'Edit Character' }
  },
  {
    path: '',
    redirectTo: '/characters',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
