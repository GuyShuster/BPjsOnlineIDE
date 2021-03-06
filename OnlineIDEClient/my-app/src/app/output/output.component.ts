import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {SharedService} from "../data.service";
import {MatTabGroup} from "@angular/material/tabs";

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements AfterViewInit {

  constructor(private sharedService: SharedService) {
  }

  get staticDebugger() {
    return this.sharedService.sharedDebuggerMode;
  }

  get output() {
    let textarea = document.getElementById('run_textarea');
    textarea.scrollTop = textarea.scrollHeight;
    return this.staticDebugger ? this.sharedService.sharedProgram.debugger.stdout :
      this.sharedService.sharedProgram.runner.stdout;
  }

  get bthreads() {
    return this.sharedService.sharedProgram.debugger.getLastStep().bThreads;
  }

  get globalVariables() {
    return this.sharedService.sharedProgram.debugger.getLastStep().globalVariablesString;
  }

  get bthreadList() {
    return this.sharedService.BtrheadsList;
  }

  ngAfterViewInit() {
  }

}
