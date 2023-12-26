import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent  implements OnInit{

  dashboardData: any;
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getDashboarData();
  }
  getDashboarData() {
    this.http.get('https://freeapi.miniprojectideas.com/api/youtube/GetTicketsDashboard').subscribe((res:any)=>{
      this.dashboardData = res.data[0];
    })
  }
 
}
