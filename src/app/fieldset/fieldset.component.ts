import { Component, OnInit, Input } from '@angular/core';

import { IdGeneratorService } from '../id-generator.service';

@Component({
  selector: 'app-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.scss']
})
export class FieldsetComponent implements OnInit {
  @Input('legend') legend: string;
  @Input('legendId') legendId: string;
  @Input('helperText') helperText: string;
  @Input('disabled') disabled: null;
  @Input('form') form: string;
  @Input('name') name: string;

  constructor(public idGeneratorService: IdGeneratorService) {}

  ngOnInit() {
    this.legendId = 
      this.legendId ? 
      this.legendId : 
      this.idGeneratorService.generate();
  }
}