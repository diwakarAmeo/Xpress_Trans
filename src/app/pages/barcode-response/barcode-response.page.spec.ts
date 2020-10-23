import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BarcodeResponsePage } from './barcode-response.page';

describe('BarcodeResponsePage', () => {
  let component: BarcodeResponsePage;
  let fixture: ComponentFixture<BarcodeResponsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarcodeResponsePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BarcodeResponsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
