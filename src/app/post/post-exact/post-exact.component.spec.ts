import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostExactComponent } from './post-exact.component';

describe('PostExactComponent', () => {
  let component: PostExactComponent;
  let fixture: ComponentFixture<PostExactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostExactComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostExactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
