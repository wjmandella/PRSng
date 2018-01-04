export class Vendor {

	Id: number;
	Code: string;
	Name: string;
	Address: string;
	City: string;
	State: string;
	Zip: string;
	Phone: string;
	Email: string;
	PreApproved: boolean;
	
static sortableKeys = ['Id', 'Code', 'Name', 'City', 'State', 'Zip'];

	public Vendor(
		Id: number = 0,
		Code = "",
		Name = "",
		Address = "",
		City = "",
		State = "",
		Zip = "",
		Phone = "",
		Email = "",
		PreApproved = false
	){	
		this.Id = Id;
		this.Code = Code;
		this.Name = Name;
		this.Address = Address;
		this.City = City;
		this.State = State;
		this.Zip = Zip;
		this.Phone = Phone;
		this.Email = Email;
		this.PreApproved = PreApproved;
	}
}	
