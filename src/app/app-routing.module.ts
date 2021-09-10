import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    loadChildren: () => import('./modules/search-page/search-page.module').then(m => m.SearchPageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./modules/details-page/details-page.module').then(m => m.DetailsPageModule)
  },
  {
    path: '**',
    redirectTo: 'search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, relativeLinkResolution: 'corrected' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
