import { Routes } from '@angular/router';
import { HeroListComponent } from './components/hero-list-component/hero-list-component';

export const routes: Routes = [
    {
        path: '', component: HeroListComponent
    },
    {
        path:'**', redirectTo: ''
    }
];
