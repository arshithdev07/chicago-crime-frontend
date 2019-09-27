import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeByLocationComponent } from './crime-by-location.component';

describe('CrimeByLocationComponent', () => {
  let component: CrimeByLocationComponent;
  let fixture: ComponentFixture<CrimeByLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrimeByLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimeByLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
