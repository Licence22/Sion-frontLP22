/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OperationUserComponent } from './operationUser.component';

describe('OperationUserComponent', () => {
  let component: OperationUserComponent;
  let fixture: ComponentFixture<OperationUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
