import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'mobiles',
    loadChildren: () => import('./mobiles/mobiles.module').then( m => m.MobilesPageModule)
  },
  {
    path: 'laptop',
    loadChildren: () => import('./laptop/laptop.module').then( m => m.LaptopPageModule)
  },
  {
    path: 'laptop',
    loadChildren: () => import('./laptop/laptop.module').then( m => m.LaptopPageModule)
  },
  {
    path: 'laptop',
    loadChildren: () => import('./laptop/laptop.module').then( m => m.LaptopPageModule)
  },
  {
    path: 'cart-modal',
    loadChildren: () => import('./pages/cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
