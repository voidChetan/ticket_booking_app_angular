import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent {

  newTickObj: any = {
    "ticketId": 0,
    "customerName": "",
    "mobileNo": "",
    "email": "",
    "city": "",
    "state": "",
    "pincode": "",
    "reference": "",
    "adultCount": null,
    "childCount": null,
    "adultRate": null,
    "childRate": null,
    "totalAmount": 0,
    "discountInPercent": null,
    "finalAmount": 0,
    "ticketDate": new Date(),
    "ticketNo": ""
  };

  otherRef: string = '';

  isOtherSelected: boolean = false;

  constructor(private http: HttpClient) {}

  onRefChange() {
    if(this.newTickObj.reference == "Other") {
        this.isOtherSelected =  true;
    } else {
      this.isOtherSelected =  false;
    }
  }

  calculateTicketAmount() {
    const totalAmt = (Number(this.newTickObj.adultRate)  * Number(this.newTickObj.adultCount)) + ( Number(this.newTickObj.childRate) *  Number(this.newTickObj.childCount));
    this.newTickObj.totalAmount = totalAmt;

    const discountAmount = totalAmt *  Number(this.newTickObj.discountInPercent) / 100;

   
    this.newTickObj.finalAmount = this.newTickObj.totalAmount - discountAmount ;
  }
  createNewTicket() {
    debugger;
    if(this.isOtherSelected) {
      this.newTickObj.reference = this.otherRef;
    }
    this.http.post("https://freeapi.miniprojectideas.com/api/youtube/AddNewTicket",this.newTickObj).subscribe((res:any)=>{
      if(res.result) {
        alert('Ticket Created Succefully');
      } else {
        alert(res.message);
      }
    })
  }
}
