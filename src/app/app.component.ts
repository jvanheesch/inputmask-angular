import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import Inputmask from "inputmask";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    @ViewChild('someInput') someInput: ElementRef;
    someModelValue: string;

    ngAfterViewInit(): void {
        Inputmask().mask(this.someInput.nativeElement)
    }
}
