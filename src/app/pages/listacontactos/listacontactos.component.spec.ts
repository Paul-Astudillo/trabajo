import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacontactosComponent } from './listacontactos.component';

describe('ListacontactosComponent', () => {
  let component: ListacontactosComponent;
  let fixture: ComponentFixture<ListacontactosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListacontactosComponent]
    });
    fixture = TestBed.createComponent(ListacontactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
