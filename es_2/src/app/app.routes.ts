import { Hero } from './models/hero.model';
import { Routes } from '@angular/router';
import { HeroListComponent } from './components/hero-list-component/hero-list-component';
import { HeroEdit } from './components/hero-edit/hero-edit';

export const routes: Routes = [
    {
        path: '', component: HeroListComponent
    },
    {
        path: 'edit', component: HeroEdit
    },
    {
        path: 'edit/:id', component: HeroEdit
    },
    {
        path:'**', redirectTo: ''
    }
];
