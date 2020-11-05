import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from './app.material.module';

import { IdGeneratorService } from './id-generator.service';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FieldsetComponent } from './fieldset/fieldset.component';
import { FileInputComponent } from './file-input/file-input.component';
import { FilterInputComponent } from './filter-input/filter-input.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, AppMaterialModule ],
  declarations: [ AppComponent, HelloComponent, FieldsetComponent, FileInputComponent,FilterInputComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ IdGeneratorService ],
})
export class AppModule { }
