import { Pipe, PipeTransform } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Pipe({
  name: 'regshopExtractFormControl'
})
export class RegshopExtractFormControlPipe implements PipeTransform {
  transform(formGroup: FormGroup, controlName: string): FormControl {
    const control = formGroup.get(controlName) as FormControl | null;

    if (!control) {
      console.error('Form control is not found');
    }

    return control ?? new FormControl();
  }
}
