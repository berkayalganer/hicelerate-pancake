import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Business } from '../business';

@Component({
  selector: 'app-business-update',
  templateUrl: './business-update.component.html',
  styleUrls: ['./business-update.component.css']
})
export class BusinessUpdateComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  @Input() business: Business;
  @Output() objEvent = new EventEmitter<string>();

  businessForEdit: Business = new Business();  //Json formatına döndürülecek olan nesne.
  businessEditForm: FormGroup;      
  businessForTransfer:string;      //Parent componente gönderilecek olan json değeri. 
  isVisible = false;      //Modalın görünürlük değeri.

  ngOnInit(): void {
    this.business.isActive=true;
    this.createBusinessEditForm();
    if(this.business.courseDescription){
      this.businessEditForm.controls.description.setValue(this.business.courseDescription)
    }
  }

  //Form için ayarlar burada yapılır.
  createBusinessEditForm(){
    this.businessEditForm = this.formBuilder.group({
      subscriberCount: ['', Validators.required],
      courseDescription: ['', Validators.required],
      isActive: [this.business.isActive, Validators.required]
    });
  }

  //Form'un geçerli olması halinde parent componente yollanılacak olan nesnenin değerlerinin atamaları burada yapılır.
  update(){
    if(this.businessEditForm.valid){
      this.businessForEdit = Object.assign({},this.businessEditForm.value);
      this.businessForEdit.businessId = this.business.businessId;
      this.isVisible = false;
      this.emitChild();
    }
  }

  //Parent componente yollanacak olan nesne json formatına burada çevirilir.
  emitChild(){
    this.objEvent.emit(JSON.stringify(this.businessForEdit));
  }

  //Modalı açar.
  showModal(): void {
    this.isVisible = true;
  }

  //Modalı kapatır ve formu temizler.
  handleCancel(): void {
    this.isVisible = false;
    this.businessEditForm.reset();
  }

}
