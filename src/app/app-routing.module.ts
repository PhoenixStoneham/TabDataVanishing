import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientOrdersComponent } from './client-orders/client-orders.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  {
    path: 'Client/:id', component: ClientComponent, children: [
      { path: 'Details', component: ClientDetailsComponent },
      { path: 'Order', component: ClientOrdersComponent }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
