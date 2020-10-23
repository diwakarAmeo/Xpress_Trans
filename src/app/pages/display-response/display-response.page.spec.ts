import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayResponsePage } from './display-response.page';

describe('DisplayResponsePage', () => {
  let component: DisplayResponsePage;
  let fixture: ComponentFixture<DisplayResponsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayResponsePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayResponsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
