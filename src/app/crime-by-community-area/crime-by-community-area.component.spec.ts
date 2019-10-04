import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeByCommunityAreaComponent } from './crime-by-community-area.component';

describe('CrimeByCommunityAreaComponent', () => {
  let component: CrimeByCommunityAreaComponent;
  let fixture: ComponentFixture<CrimeByCommunityAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrimeByCommunityAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimeByCommunityAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
