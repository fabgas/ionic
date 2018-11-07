import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailprocessPage } from './detailprocess.page';

describe('DetailprocessPage', () => {
  let component: DetailprocessPage;
  let fixture: ComponentFixture<DetailprocessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailprocessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailprocessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
