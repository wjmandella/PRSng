export class PurchaseRequest {
	Id: number;
	UserID: number;
	Description: string;
	Justification: string;
	DateNeeded: Date;
	DeliveryMode: string;
	StatusID: number;
	Total: number;
	SubmittedDate: Date;

static sortableKeys = ['Id', 'UserID', 'SubmittedDate', 'DateNeeded', 'StatusID'];
	
	constructor(
		Id: number = 0,
		UserID: number = 0,
		Description: string = '',
		Justification: string = '',
		DateNeeded: Date = null, 
		DeliveryMode: string = '', 
		StatusID: number = 0,
		Total: number = 0,				
		SubmittedDate: Date = null, 	
	) {
		this.Id = Id;
		this.UserID = UserID;
		this.Description = Description;
		this.Justification = Justification;
		this.DateNeeded = DateNeeded;
		this.DeliveryMode = DeliveryMode;
		this.StatusID = StatusID;
		this.Total = Total;
		this.SubmittedDate = SubmittedDate;
	}
}
