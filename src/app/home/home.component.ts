import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ServiceTicket {
  title: string;
  blurb: string;
  image: string;
  gallery: string[];
}

interface WorkStep {
  number: string;
  title: string;
  blurb: string;
}

interface Testimonial {
  quote: string;
  name: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly services: ServiceTicket[] = [
    
    {
      title: 'Home Services',
      blurb: 'Drywall, fixtures, plumbing, flooring, minor and major repairs.',
      image: '/images/covers/bedroomred.webp',
      gallery: [
        '/images/Gallery/WaterFiltrationSystem.webp',
        '/images/Gallery/bedroompurple.webp',
        '/images/Gallery/closetpurple.webp',
        '/images/Gallery/bedroomred.webp',
        '/images/Gallery/closetred.webp',
        '/images/Gallery/diningroom.webp',
        '/images/Gallery/kitchenlighting2.webp',
      ]
    },
    {
      title: 'Tech Support',
      blurb: 'Wi-Fi, Installations, Computer Repairs, Smart Systems.',
      image: '/images/covers/workstations2.webp',
      gallery: [
        '/images/Gallery/laptoppaste.webp',
        '/images/Gallery/laptoprepair.webp',
        '/images/Gallery/customkeyboard.webp',
        '/images/Gallery/workstations3.webp',
        '/images/Gallery/workstations.webp',
        '/images/Gallery/workstations2.webp',
        '/images/Gallery/damanopenworkstation.webp'
      ]
    }
  ];

  readonly steps: WorkStep[] = [
    {
      number: '01',
      title: 'Call it in',
      blurb: 'Tell us what\u2019s broken, ugly, or slow. We ask the right questions up front.'
    },
    {
      number: '02',
      title: 'We diagnose',
      blurb: 'A real person looks at the real problem before we quote a real price.'
    },
    {
      number: '03',
      title: 'We fix it right',
      blurb: 'One crew, one visit when possible, no upsell script. Just the job, done.'
    }
  ];

  readonly testimonials: Testimonial[] = [
    {
      quote: 'Emile went above and beyond expectations.  He quickly identified my wi-fi problem and was super knowledgeable about how to remedy it.  He resolved the issue easily.  He was so nice and friendly and easy to work with.  I would highly recommend Emile.',
      name: 'Janice L.'
    },
    {
      quote: 'Emile did an outstanding job! My yard has never looked this good. He really went above and beyond what was asked and expected. I have researched a ton of services & none complete the job this thoroughly. Looking forward to working with him again in the near future',
      name: 'Frankie J.'
    },
    {
      quote: 'Emile was punctual, task-oriented and extremely efficient. I absolutely will recommend his services and he has a myriad of skills. Thanks so much again for building a massive bunk bed set and storage tower for my daughter’s room!',
      name: 'Sarah R.'
    },
    {
      quote: 'Emile was really fun and nice. Great personality. And he knows a ton about tech stuff. I was really happy with how well he solved the issues I was having with my smart home technology. Very knowledgable. ',
      name: 'Kelley C.'
    }
  ];

  readonly year = new Date().getFullYear();

   readonly requestFormUrl = 'https://docs.google.com/forms/d/1_kqtSjvhXnY1kUlH4EsRQub0TYARuH47s1Q0SUO-TY8/edit';

  /** Currently open gallery, or null when the modal is closed. */
  selectedService: ServiceTicket | null = null;
  activeIndex = 0;

  openGallery(service: ServiceTicket): void {
    this.selectedService = service;
    this.activeIndex = 0;
  }

  closeGallery(): void {
    this.selectedService = null;
  }

  nextImage(): void {
    if (!this.selectedService) { return; }
    this.activeIndex = (this.activeIndex + 1) % this.selectedService.gallery.length;
  }

  prevImage(): void {
    if (!this.selectedService) { return; }
    const total = this.selectedService.gallery.length;
    this.activeIndex = (this.activeIndex - 1 + total) % total;
  }

  onModalKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Escape':
        this.closeGallery();
        break;
      case 'ArrowRight':
        this.nextImage();
        break;
      case 'ArrowLeft':
        this.prevImage();
        break;
    }
  }
}
