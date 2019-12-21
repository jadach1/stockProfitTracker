import { Component, OnInit , Inject}        from '@angular/core';
import { MatDialog }                from '@angular/material';
import {MAT_DIALOG_DATA}            from '@angular/material';
import { contributions }            from '../models/contributions';
import { owners }                   from '../models/owner';
import { OwnerContributionService } from '../services/owner-contribution.service'
import { MiscService }              from '../services/misc.service'
import { isNumber } from 'util';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.scss']
})
export class ContributionsComponent implements OnInit {

  contribution: contributions[];
  owner:        owners[];
  ownerID:      any;

  
  constructor(public dialog: MatDialog, public service: OwnerContributionService){}

  ngOnInit() {
    this.getOwners()
  }
  
  getOwners(){
    this.service.getOwners()
    .subscribe(
      res => this.owner = res,
      err => console.log("error fetching owners"),
      () => this.getContributions(1)
    )
  }

  // Get all contributions for a specific owner
  getContributions(ownerid: any){
      this.ownerID = ownerid
      this.service.getContributions(ownerid)
        .subscribe(
          res => {console.log("succcessfully fetched contributions for " + ownerid)
                  this.contribution = res
                 },
          err => console.log("error fretching contributions for " + ownerid)
        )
  }

  openContributionForm(transaction: any ) {

    console.log("this console " + this.ownerID + " d " + transaction)
    const dialogRef = this.dialog.open(ContributionForm, {
      data: {
        owner: this.ownerID,
        type: transaction,
        owners: this.owner
      } 
    });

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

/*************************************************************
 *************************************************************
 *************************************************************
 *************************************************************/

 export class ContributionForm {

  contributor = new contributions();
  greeting: any;
  owner: owners[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public service: OwnerContributionService) {}

  ngOnInit() {
     // change the greeting
    if (this.data.type === 1 )
      this.greeting = 'Deposit'
    else if ( this.data.type === 0 )
      this.greeting = 'Withdrawl'

     // set the transaction type
    this.contributor.transaction = this.data.type;
    
    // get list of owners
    this.service.getOwners().subscribe(
      res=> this.owner = res,
      err=> console.log("error fetching ownings in mat dialogue box"),
      () => console.log("done fetching owners in mat dialgue")
    )
  }

  /*
    Make sure the contribution deposit or withdraw amount is a number
  */
  checkIfNumber(){

    if(!isNaN(this.contributor.amount)){
       console.log("checking, " + this.contributor.id + 
                    " : " + this.contributor.amount + 
                    " : " + this.contributor.date + 
                    " : ownerid -> " + this.contributor.ownerid + 
                    " : transaction -> " + this.contributor.transaction)

       this.service.contribute(this.contributor)
       .subscribe(
         res => console.log("successful contribution"),
         err => console.log("unsuccessful contribution"),
         ()  => console.log("finished with creating new contribution")
       )
    } else {
      console.log("not a number");
    }
  }

}

@Component({
  selector: 'owner-form',
  templateUrl: '../Forms/owner-form.html',
})

export class OwnerForm {

  owner = new owners();

  constructor(private service:OwnerContributionService,
              private misc:MiscService )
              {}

  /*Function will first check to see if the owner name is a duplicate,
    if not a new owner will be created unde that name*/
  newOwner(){
    let count: string;
  
    // check to see if owners name exists in databsae
    this.misc.checkSingle('owners','owner',this.owner.owner)
      .subscribe(
        res=> {console.log(res[0].count)  ,
               count = res[0].count      },
        err=> console.log("error checking if owner exists"),
        () => {
                // if it does not exist, create the owner in the database
                if ( count === "0" )
                {
                  console.log("new owner is being added -> " + count)
                  this.service.createOwner(this.owner)
                    .subscribe(
                      res=> console.log("successfully created an owner"),
                      err=> console.log("error creating an owner")
                    )
                }
              }
      )


   }
}
