import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('elsaStudioRoot', { static: true }) elsaStudioRootRef!: ElementRef;
  
  title = 'ElsaWorkflowDashboard-Angularv12';

  url="https://localhost:11000";

  ngAfterViewInit(): void {
    //Try remove the [serverUrl]="url" to use this initialization Method
    this.elsaStudioRootRef.nativeElement.setAttribute('server-url', this.url);
  }

}
