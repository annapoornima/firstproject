import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddstudentdataPage } from './addstudentdata.page';

describe('AddstudentdataPage', () => {
  let component: AddstudentdataPage;
  let fixture: ComponentFixture<AddstudentdataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstudentdataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddstudentdataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
