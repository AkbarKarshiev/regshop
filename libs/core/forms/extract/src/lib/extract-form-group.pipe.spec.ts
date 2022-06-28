import { FormControl, FormGroup } from '@angular/forms';

import { RegshopExtractFormGroupPipe } from './extract-form-group.pipe';

describe('ExtractFormGroupPipe', () => {
  let pipe: RegshopExtractFormGroupPipe;

  beforeEach(() => {
    pipe = new RegshopExtractFormGroupPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return field by name', function() {
    const form = new FormGroup({
      field: new FormGroup({
        subfield: new FormControl()
      })
    });

    expect(Object.keys(pipe.transform(form, 'field').controls).length).toBe(1);
  });

  it('should return empty field', function() {
    console.error =jest.fn();

    const form = new FormGroup({
      field: new FormGroup({
        subfield: new FormControl()
      })
    });

    expect(Object.keys(pipe.transform(form, 'field2').controls).length).toBe(0);
    expect(console.error).toHaveBeenCalled();
  });
});
