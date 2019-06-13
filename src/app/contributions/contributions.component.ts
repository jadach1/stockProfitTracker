import { Component, OnInit } from '@angular/core';
import { MatDialog }         from '@angular/material';
import { contributions }     from '../models/contributions';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.scss']
})
export class ContributionsComponent implements OnInit {

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
