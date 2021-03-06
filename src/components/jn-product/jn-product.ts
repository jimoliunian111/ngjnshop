import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { FlyCarComponent } from '../fly-car/fly-car'
//import { ProductPage } from '../../pages/product/product';

@Component({
  selector: 'jn-product',
  templateUrl: 'jn-product.html'
})
export class JnProductComponent {
  @Input() item: any;
  @ViewChild('goodImg') goodImg: ElementRef
  @ViewChild('fly') fly;
  @ViewChild(FlyCarComponent) flyCar: FlyCarComponent;
  startObj: any
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public api: ApiProvider,
              public el: ElementRef) {}
  goProduct (item) {
    this.navCtrl.push('ProductPage', {id: item.goods_id})
  }
  showNum (item, $event) {
    console.log('ssgoodImg', this.goodImg)
//  this.flyCar.emitClick()
//  let params = {
//    itemId: item.item_id ? item.item_id : item.goods_id,
//    quantity: 1
//  }
//  this.api.GetAddCart(params).subscribe(res => {
//    console.log('666666666666666', res)
//    this.api.GetAddInfo({}).subscribe(res => {
//      console.log('购物车数量', res)
//    })
//  })
  }
}
