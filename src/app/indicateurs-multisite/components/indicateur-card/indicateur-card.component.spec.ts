import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicateurCardComponent } from './indicateur-card.component';

describe('IndicateurCardComponent', () => {
  let component: IndicateurCardComponent;
  let fixture: ComponentFixture<IndicateurCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicateurCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicateurCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
