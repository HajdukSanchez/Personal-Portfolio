import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { SwiperModule } from "swiper/angular";
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SwiperModule
  ]
})
export class HomeModule { }
