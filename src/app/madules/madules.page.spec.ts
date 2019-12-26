import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MadulesPage } from './madules.page';

describe('MadulesPage', () => {
  let component: MadulesPage;
  let fixture: ComponentFixture<MadulesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadulesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MadulesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
