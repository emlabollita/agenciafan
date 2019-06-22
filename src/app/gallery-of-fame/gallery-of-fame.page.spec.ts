import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryOfFamePage } from './gallery-of-fame.page';

describe('GalleryOfFamePage', () => {
  let component: GalleryOfFamePage;
  let fixture: ComponentFixture<GalleryOfFamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryOfFamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryOfFamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
