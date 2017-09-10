import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { FatherComponent } from './father/father.component';
import { Child111Component } from './Father/child111/child111.component';
import { Child222Component } from './life-cycle/child222/child222.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { Child333Component } from './ng-content/child333/child333.component';
import { ParentComponent } from './view-hook/parent/parent.component';
import { Child11Component } from './view-hook/parent/child11/child11.component';
import { Child22Component } from './view-hook/parent/child22/child22.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    FatherComponent,
    Child111Component,
    Child222Component,
    NgContentComponent,
    Child333Component,
    ParentComponent,
    Child11Component,
    Child22Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
