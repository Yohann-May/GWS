import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LacrosseComponent } from './lacrosse.component';

describe('LacrosseComponent', () => {
  let component: LacrosseComponent;
  let fixture: ComponentFixture<LacrosseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LacrosseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LacrosseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
