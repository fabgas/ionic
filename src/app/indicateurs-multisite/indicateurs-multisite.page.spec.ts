import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicateursMultisitePage } from './indicateurs-multisite.page';

describe('IndicateursMultisitePage', () => {
  let component: IndicateursMultisitePage;
  let fixture: ComponentFixture<IndicateursMultisitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicateursMultisitePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicateursMultisitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
