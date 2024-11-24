import { Component, OnInit, ViewChild } from '@angular/core';
import { Istd } from '../../model/std';
import { NgForm } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
 stdArr ! : Array<Istd>
 stdFirstNameMaxFlag: boolean=false
 @ViewChild('stdForm') stdForm! :NgForm;
  constructor(
    private _stdService : StudentService,
    private _uuidService : UuidService
  ) { }

  ngOnInit(): void {
    setTimeout(()=>{
      console.log(this.stdForm?.controls['fname, lname'])
      this.stdForm?.controls['fname, lname'].valueChanges
      .subscribe(data=>{
        console.log(data)
        if(data.length >= 12){
          this.stdFirstNameMaxFlag = true
        }else{
          this.stdFirstNameMaxFlag = false
        }
      })
    }, 500);

    this.stdArr = this._stdService.fetchAllStdData()
  }
  onStdAdd(){
    if(this.stdForm.valid){
      let stdObj :Istd ={...this.stdForm.value, id: this._uuidService.generateUuid()};
      console.log(stdObj);
      this._stdService.addNewStd(stdObj);
      this.stdForm.reset()
    }
  }

}
