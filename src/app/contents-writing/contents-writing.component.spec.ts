import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsWritingComponent } from './contents-writing.component';

describe('ContentsWritingComponent', () => {
  let component: ContentsWritingComponent;
  let fixture: ComponentFixture<ContentsWritingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentsWritingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentsWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
