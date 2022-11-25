import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakesignupComponent } from './makesignup.component';

describe('MakesignupComponent', () => {
  let component: MakesignupComponent;
  let fixture: ComponentFixture<MakesignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakesignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakesignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
