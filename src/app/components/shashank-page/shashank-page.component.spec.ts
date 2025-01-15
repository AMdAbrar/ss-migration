import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShashankPageComponent } from './shashank-page.component';

describe('ShashankPageComponent', () => {
  let component: ShashankPageComponent;
  let fixture: ComponentFixture<ShashankPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShashankPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShashankPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
