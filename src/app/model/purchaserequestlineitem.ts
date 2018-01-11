export class PurchaseRequestLineItem {
		Id: number;
		PurchaseRequestID: number;
		ProductID: number;
		Quantity: number;	

	constructor(
		Id: number = 0,
		PurchaseRequestID: number = 0,
		ProductID: number = 0,
		Quantity: number = 1	
	) {
		this.Id = Id;
		this.PurchaseRequestID = PurchaseRequestID;
		this.ProductID = ProductID;
		this.Quantity = Quantity;
	}
}	