import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { CreateOrderService } from '../create-order/create-order.service';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
	selector: 'app-opening-hours',
	templateUrl: './opening-hours.component.html',
	styleUrls: ['./opening-hours.component.scss']
})
export class OpeningHoursComponent implements OnInit {

	merchantCode: String;
	SettingStoreOpenHours: any;

	constructor(
		public dialogRef: MatDialogRef<OpeningHoursComponent>,
		private cookieService: CookieService,
		private service: CreateOrderService,
		private sessionStorageService: SessionStorageService
	) { }

	ngOnInit(): void {
		let merchant = this.sessionStorageService.retrieve('merchant');
		this.merchantCode = merchant.domain;
		this.fetchStoreOpenHour(this.merchantCode);
	}

	fetchStoreOpenHour(merchantCode){
		this.service.readSettingStoreHour(merchantCode).subscribe((res)=>{
		this.SettingStoreOpenHours=res;
		console.log(res)}
		) 
	}

	onClose() {
		this.dialogRef.close();
	}
}
