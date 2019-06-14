import { Component, OnInit }        from '@angular/core';
import { MatDialog }                from '@angular/material';
import { contributions }            from '../models/contributions';
import { owners }                   from '../models/owner';
import { OwnerContributionService } from '../services/owner-contribution.service'

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.scss']
})
export class ContributionsComponent implements OnInit {

  contributions: contributions[];
  owners:        owners[];
  
  constructor(public dialog: MatDialog){}

  ngOnInit() {
  }

  openContributionForm() {
    const dialogRef = this.dialog.open(ContributionForm);

    dialogRef.afterClosed()
      .subscribe(result => {
          console.log(`Dialog results after open: ${result}`);
      });
  }
 
  openOwnerForm() {
    const dialogRef = this.dialog.open(OwnerForm);

    dialogRef.afterClosed()
      .subscribe(result => {
          console.log(`Dialog results after open 2: ${result}`);
      });
  }
}

@Component({
  selector: 'contribution-form',
  templateUrl: '../Forms/contribution-form.html',
})

export class ContributionForm {

  contributor = new contributions();

  check(){
    console.log("this is the owner name " + this.contributor.ownerid)
  }

}

@Component({
  selector: 'owner-form',
  templateUrl: '../Forms/owner-form.html',
})

export class OwnerForm {

  owner = new owners();

  constructor(private service:OwnerContributionService){}

  newOwner(){
    console.log("this is the owner name " + this.owner.owner)
    this.service.createOwner(this.owner)
      .subscribe(
        res=> console.log("successfully created an owner"),
        err=> console.log("error creating an owner")
      );
  }

}
