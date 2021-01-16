import { Component, OnInit, Output } from '@angular/core';
import { BusinessService } from '../services/business.service';
import { Business } from './business';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
  providers:[BusinessService]
})
export class BusinessComponent implements OnInit {

  constructor(private businessService:BusinessService) { }

  businesses : Business[];                  //Apiden çekilecek olan veri.
  businessJSON:string;                      //Child componentten gelen Json formatındaki değişken.
  businessForEdit: Business;                //Güncelleme işleminde kullanılması için business nesnesi.

  ngOnInit(): void {
    this.getData();
  }

  //Child component ile veri transferi.
  receiveValue($event: string){
    this.businessJSON=$event;
    this.updateData()
  }

  //Child componentten gelen json değerinin nesneye dönüştürülüp güncelleme işleminin yapılması.
  updateData(){
    this.businessForEdit = JSON.parse(this.businessJSON);
    for(let business of this.businesses){
      if(business.businessId==this.businessForEdit.businessId){
        business.courseDescription=this.businessForEdit.courseDescription;
        business.subscriberCount=this.businessForEdit.subscriberCount;
        business.isActive = this.businessForEdit.isActive;
      }
    }
  }


  //Apideki verilerin Business Servisi ile çekilmesi.
  getData(){
    this.businessService.getBusinesses().subscribe(data=>{
      this.businesses = data;
    })
  }
}
