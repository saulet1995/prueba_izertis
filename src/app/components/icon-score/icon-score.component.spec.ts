import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconScoreComponent } from './icon-score.component';

describe('IconScoreComponent', () => {
  let component: IconScoreComponent;
  let fixture: ComponentFixture<IconScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconScoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
