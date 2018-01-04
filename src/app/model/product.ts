export class Product {

	Id: number;
	VendorID: number ;
	PartNumber: string;
	Name: string;
	Price: number;
	Unit: string;
	PhotoPath: string;

static sortableKeys = ['Id', 'VendorID', 'Name', 'PartNumber'];

	constructor(
		Id: number = 0,
		VendorID: number = 0,
		PartNumber: string = '',
		Name: string = '',
		Price: number = 0, 
		Unit: string = '', 
		PhotoPath: string = '',	
	) {
		this.Id = Id;
		this.VendorID = VendorID;
		this.PartNumber = PartNumber;
		this.Name = Name;
		this.Price = Price;
		this.Unit = Unit;
		this.PhotoPath = PhotoPath;
	}
}
	