import {SharedService} from "../data.service";
import {TestBed, ComponentFixture, async} from "@angular/core/testing";
import {SideComponent} from "./Side.component";
import {FormsModule} from "@angular/forms";
import {ClarityModule} from "@clr/angular";
import {MatDialogModule} from "@angular/material/dialog";
import {By} from "@angular/platform-browser";
import {CodeEditorComponent} from "../code-editor/code-editor.component";

describe('side component - integration tests', () => {

  let sideComponent: SideComponent;
  let sideFixture: ComponentFixture<SideComponent>;
  let codeEditorFixture: ComponentFixture<CodeEditorComponent>;
  let sharedService: SharedService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideComponent, CodeEditorComponent],
      providers: [SharedService],
      imports: [
        FormsModule,
        ClarityModule,
        MatDialogModule
      ]
    });

    // load header
    sideFixture = TestBed.createComponent(SideComponent);
    sideComponent = sideFixture.componentInstance;
    sideFixture.detectChanges(); // call the ngAfterInit

    /* Load the code editor (the header is tightly dependant on the code editor,
     * which is why we decided to test them as a single unit).
     * We load the component locally just in order to fully initialize the shared service for the tests */
    codeEditorFixture = TestBed.createComponent(CodeEditorComponent);
    codeEditorFixture.detectChanges(); // call the ngAfterInit so the editor and the shared service are fully initialized

    sharedService = TestBed.get(SharedService);
  });

  afterEach(()=>{
    sideFixture.debugElement.nativeElement.remove();
    sideFixture.destroy();
  });

  it('should load the component successfully',  () => {
    expect(sideFixture.debugElement.query(By.css('section.sidenav-content')).nativeElement).toBeTruthy(); // shows up on view
    expect(sideComponent).toBeDefined();
  });
});




describe('side component - integration tests', () => {

  let sideComponent: SideComponent;
  let sideFixture: ComponentFixture<SideComponent>;
  let codeEditorFixture: ComponentFixture<CodeEditorComponent>;
  let sharedService: SharedService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideComponent, CodeEditorComponent],
      providers: [SharedService],
      imports: [
        FormsModule,
        ClarityModule,
        MatDialogModule
      ]
    });

    // load side
    sideFixture = TestBed.createComponent(SideComponent);
    sideComponent = sideFixture.componentInstance;
    sideFixture.detectChanges(); // call the ngAfterInit

    /* Load the code editor (the header is tightly dependant on the code editor,
     * which is why we decided to test them as a single unit).
     * We load the component locally just in order to fully initialize the shared service for the tests */
    codeEditorFixture = TestBed.createComponent(CodeEditorComponent);
    codeEditorFixture.detectChanges(); // call the ngAfterInit so the editor and the shared service are fully initialized

    sharedService = TestBed.get(SharedService);
  });

  afterEach(()=>{
    sideFixture.debugElement.nativeElement.remove();
    sideFixture.destroy();
  });

  it('ADD button should call to addExternalEvent() function', async(() => {
    spyOn(sideComponent, 'addExternalEvent');
    let buttons = sideFixture.debugElement.queryAll(By.css('.addExEvButton'));
    let AddButton;
    for(let button of buttons){
      if(button.nativeElement.innerText === 'ADD')
        AddButton = button;
    }
    if(!AddButton)
      fail();

    AddButton.nativeElement.click();
    sideFixture.whenStable().then(() => {
      expect(sideComponent.addExternalEvent).toHaveBeenCalled();
    });
  }));

  it('bp.registerBThread button should call to addSentence(n) function', async(() => {
    spyOn(sideComponent, 'addSentence');
    let buttons = sideFixture.nativeElement.querySelectorAll('td');
    let SentenceButton;

    for(let button of buttons){
      if(button.innerText === 'bp.registerBThread')
        SentenceButton = button;
    }

    if(!SentenceButton)
      fail();

    SentenceButton.click();
    sideFixture.whenStable().then(() => {
      expect(sideComponent.addSentence).toHaveBeenCalled();
    });
  }));

  it('bp.sync - waitFor button should call to addSentence(n) function', async(() => {
    spyOn(sideComponent, 'addSentence');
    let buttons = sideFixture.nativeElement.querySelectorAll('td');
    let SentenceButton;

    for(let button of buttons){
      if(button.innerText === 'bp.sync - waitFor')
        SentenceButton = button;
    }

    if(!SentenceButton)
      fail();

    SentenceButton.click();
    sideFixture.whenStable().then(() => {
      expect(sideComponent.addSentence).toHaveBeenCalled();
    });
  }));

  it('bp.sync - request button should call to addSentence(n) function', async(() => {
    spyOn(sideComponent, 'addSentence');
    let buttons = sideFixture.nativeElement.querySelectorAll('td');
    let SentenceButton;

    for(let button of buttons){
      if(button.innerText === 'bp.sync - request')
        SentenceButton = button;
    }

    if(!SentenceButton)
      fail();

    SentenceButton.click();
    sideFixture.whenStable().then(() => {
      expect(sideComponent.addSentence).toHaveBeenCalled();
    });
  }));

  it('bp.sync - request + block button should call to addSentence(n) function', async(() => {
    spyOn(sideComponent, 'addSentence');
    let buttons = sideFixture.nativeElement.querySelectorAll('td');
    let SentenceButton;

    for(let button of buttons){
      if(button.innerText === 'bp.sync - request + block')
        SentenceButton = button;
    }

    if(!SentenceButton)
      fail();

    SentenceButton.click();
    sideFixture.whenStable().then(() => {
      expect(sideComponent.addSentence).toHaveBeenCalled();
    });
  }));

  //**** To test this button we must run a program that will create a trace ***
  // it('click on line from Trace should call to clickOnTrace(n) function', async(() => {
    // spyOn(sideComponent, 'clickOnTrace');
    // let buttons = sideFixture.nativeElement.querySelectorAll('td');
    // let TraceButton;
    //
    // for(let button of buttons){
    //   if(button.innerText.indexOf(':') != -1)
    //     TraceButton = button;
    // }
    //
    // if(!TraceButton)
    //   fail();
    //
    // TraceButton.click();
    // sideFixture.whenStable().then(() => {
    //   expect(sideComponent.clickOnTrace).toHaveBeenCalled();
    // });
  // }));

});

