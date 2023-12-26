import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  ticketList: any [] = [];
  isTileView: boolean = true;
  isAllData: boolean = true;
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getAllTickets();
  }

  onToggle() {
    this.isAllData = !this.isAllData;
    if( this.isAllData) {
      this.getAllTickets();
    } else {
        this.getTodaysTickets();
    }
  }
  getAllTickets() {
    this.http.get("https://freeapi.miniprojectideas.com/api/youtube/GetAllTickets").subscribe((Res:any)=>{
      this.ticketList =  Res.data;
    })
  }
  getTodaysTickets() {
    this.http.get("https://freeapi.miniprojectideas.com/api/youtube/GetTodaysTickets").subscribe((Res:any)=>{
      this.ticketList =  Res.data;
    })
  }
}
