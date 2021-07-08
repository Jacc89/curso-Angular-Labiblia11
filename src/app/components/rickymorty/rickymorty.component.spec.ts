import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RickymortyComponent } from './rickymorty.component';

describe('RickymortyComponent', () => {
  let component: RickymortyComponent;
  let fixture: ComponentFixture<RickymortyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RickymortyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RickymortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
