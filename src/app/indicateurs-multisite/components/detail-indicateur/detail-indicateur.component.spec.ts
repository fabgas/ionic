import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailIndicateurComponent } from './detail-indicateur.component';

describe('DetailIndicateurComponent', () => {
  let component: DetailIndicateurComponent;
  let fixture: ComponentFixture<DetailIndicateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailIndicateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailIndicateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
