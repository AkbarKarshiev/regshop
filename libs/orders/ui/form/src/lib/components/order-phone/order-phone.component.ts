import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AnyMaskedOptions } from 'imask';

import { FormMaskService } from '@regshop/core/forms/mask';

@Component({
  selector: 'regshop-order-phone',
  templateUrl: './order-phone.component.html',
  styleUrls: ['./order-phone.component.scss']
})
export class OrderPhoneComponent implements OnInit {
  @Input() control!: FormControl;

  mask!: AnyMaskedOptions;

  constructor(private readonly formMaskService: FormMaskService) { }

  ngOnInit(): void {
    this.mask = this.formMaskService.getPhoneMask();
  }
}
