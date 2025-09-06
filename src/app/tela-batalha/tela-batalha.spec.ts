import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaBatalha } from './tela-batalha';

describe('TelaBatalha', () => {
  let component: TelaBatalha;
  let fixture: ComponentFixture<TelaBatalha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaBatalha]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaBatalha);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
