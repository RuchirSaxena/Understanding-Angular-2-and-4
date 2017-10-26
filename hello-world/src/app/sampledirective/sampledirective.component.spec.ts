import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampledirectiveComponent } from './sampledirective.component';

describe('SampledirectiveComponent', () => {
  let component: SampledirectiveComponent;
  let fixture: ComponentFixture<SampledirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampledirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampledirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
