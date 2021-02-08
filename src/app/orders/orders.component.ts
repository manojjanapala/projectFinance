import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';
import { Subscription } from 'rxjs';
import { Purchase } from '../purchase';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  userName: any= localStorage.getItem("localVariableUserName");
  private subscription: Subscription;
  purchase:Purchase[];

  constructor(private _orderService: OrderService, private router: Router) {  }


  ngOnInit(): void {
    this.subscription=this._orderService.getOrders(this.userName)
    .subscribe((data : Purchase[])=>{
       this.purchase = data;
      console.log(this.purchase);
    }, (err : any) =>{
      console.log(err);
    });
  }



}
