import { inject, Injectable } from '@angular/core';
import { SnackBarService } from './snack-bar.service';
import { Istd } from '../model/std';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
private _snackBarService = inject(SnackBarService)
stdArr : Array<Istd>=[
  {
    fname:"James",
    lname:"Doe",
    email: "james@gmail.com",
    contact:6789567890,
    id: '123'
  },
  {
    fname:"Jhon",
    lname:"Doe",
    email: "jhon@gmail.com",
    contact:9876567890,
    id: '124'
  },
  {
    fname:"Jen",
    lname:"Doe",
    email: "jen@gmail.com",
    contact:8076567890,
    id: '125'
  }
]
  constructor() { }

  fetchAllStdData(){
    return this.stdArr
  }

  addNewStd(std:Istd){
    this.stdArr.push(std)
    this._snackBarService.openSnackBar(`The New Student ${std.fname} is added successfully`)
  }

  removeStd(id:string){
    let getIndex = this.stdArr.findIndex(std=> std.id === id);
    let removedStd = this.stdArr[getIndex];
    this.stdArr.splice(getIndex, 1);
    this._snackBarService.openSnackBar(`The Student ${removedStd.fname} ${removedStd.lname} is removed successfully`)
  }
}
