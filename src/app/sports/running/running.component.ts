import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-running',
  templateUrl: './running.component.html',
  styleUrl: './../sports-style.scss'
})
export class RunningComponent {
  currentSlideIndex = 0;
  images = [];
  autoplayInterval: any;
  autoplaySpeed = 5000; // 5 seconds

  ngOnInit() {
    this.startAutoplay();
  }

  // Autoplay function to move to the next slide automatically
  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, this.autoplaySpeed);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % (this.images.length); // Include iframe as an extra slide
    this.stopAutoplay();
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + (this.images.length)) % (this.images.length);
    this.stopAutoplay();
  }
}
