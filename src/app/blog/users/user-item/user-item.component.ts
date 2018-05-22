import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  @Input('userName') public userName;
  @Input('userEmail') public userEmail;
  @Input('userPhone') public userPhone;
  @Input('userWebsite') public userWebsite;
  @Input('userId') public userId;

  public userPhoneProcessed: string;

  constructor() { }

  ngOnInit() {
    this.userPhoneProcessed = this.processPhone(this.userPhone);
  }

  processPhone(rawPhoneNumber) {
    let index = rawPhoneNumber.indexOf(" x");
    let processedPhoneNumber = rawPhoneNumber.slice(0, index).replace(/\D/g,'');
    return processedPhoneNumber;
  }

}
