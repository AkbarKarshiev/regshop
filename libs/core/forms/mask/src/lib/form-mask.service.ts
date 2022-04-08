import { Injectable } from '@angular/core';
import { AnyMaskedOptions } from 'imask'

@Injectable({
  providedIn: 'root'
})
export class FormMaskService {
  getPhoneMask(): AnyMaskedOptions {
    return { mask: '+998 00 000 00 00' };
  }

  getNumberMask(options?: Partial<{ min: number; max: number; thousandsSeparator: string }>): AnyMaskedOptions {
    return {
      mask: Number,
      min: options?.min ?? undefined,
      max: options?.max ?? undefined,
      thousandsSeparator: options?.thousandsSeparator ?? ','
    };
  }
}
