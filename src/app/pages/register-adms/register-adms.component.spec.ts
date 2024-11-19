import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAdmsComponent } from './register-adms.component';

describe('RegisterAdmsComponent', () => {
  let component: RegisterAdmsComponent;
  let fixture: ComponentFixture<RegisterAdmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterAdmsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterAdmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
