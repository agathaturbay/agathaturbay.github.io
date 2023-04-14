import { Component, OnInit, ViewChild } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  @ViewChild(IonSlides)
  slides!: IonSlides;
  slidePrev() {
    this.slides.slidePrev();
  }
  slideNext() {
    this.slides.slideNext();
  }

  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.addTag({ name: 'description', content: 'This is an article about Angular Meta service' });
  }

  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    // autoplay:true,
  };
}
