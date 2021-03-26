import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RascunhoAngularComponent } from './rascunho-angular.component';

describe('RascunhoAngularComponent', () => {
  let component: RascunhoAngularComponent;
  let fixture: ComponentFixture<RascunhoAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RascunhoAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RascunhoAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
