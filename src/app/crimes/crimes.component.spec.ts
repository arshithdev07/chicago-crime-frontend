import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimesComponent } from './crimes.component';

describe('CrimesComponent', () => {
  let component: CrimesComponent;
  let fixture: ComponentFixture<CrimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
