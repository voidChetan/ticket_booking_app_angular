import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { NewTicketComponent } from './pages/new-ticket/new-ticket.component';
import { TicketListComponent } from './pages/ticket-list/ticket-list.component';
 
const routes: Routes = [
  {
    path:'',
    redirectTo:'newTicket',
    pathMatch:'full'
  },
  {
    path:'newTicket',
    component: NewTicketComponent
  },
  {
    path:'ticketList',
    component: TicketListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
