import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  displayStyle = 'none';

  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.addTag({ name: 'description', content: 'This is an article about Angular Meta service' });
  }

  openPopup() {
    this.displayStyle = 'block';
    console.log('hi');
  }
  closePopup() {
    this.displayStyle = 'none';
    console.log('bye');
  }
}
