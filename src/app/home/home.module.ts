import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { SwiperModule } from "swiper/angular";
import { BannerComponent } from './components/banner/banner.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectModule } from '../project/project.module';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SwiperModule,
    RouterModule,
    FontAwesomeModule,
    ProjectModule
  ]
})
export class HomeModule { }
