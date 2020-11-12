import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearDescriptionInputComponent } from './clear-description-input.component';

describe('ClearDescriptionInputComponent', () => {
  let component: ClearDescriptionInputComponent;
  let fixture: ComponentFixture<ClearDescriptionInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearDescriptionInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearDescriptionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
