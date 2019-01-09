import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentAssetsComponent } from './current-assets.component';

describe('CurrentAssetsComponent', () => {
  let component: CurrentAssetsComponent;
  let fixture: ComponentFixture<CurrentAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
