import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinansePage } from './finanse.page';

describe('FinansePage', () => {
  let component: FinansePage;
  let fixture: ComponentFixture<FinansePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinansePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinansePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
