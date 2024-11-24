import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';


const moduleArr=[
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule
]

@NgModule({
    declarations:[],
    imports:[
        ...moduleArr
    ],
    exports:[
        ...moduleArr
    ]

})
export class MaterialModule{

}