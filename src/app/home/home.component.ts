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
  job: string;
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
      quote: 'They repainted the whole first floor and fixed the laptop I\u2019d given up on, same week. Didn\u2019t know that was one company.',
      name: 'J. Alvarez',
      job: 'Homeowner'
    },
    {
      quote: 'No callbacks, no surprise charges. Told me what it\u2019d cost and that\u2019s what it cost.',
      name: 'D. Whitfield',
      job: 'Homeowner'
    },
    {
      quote: 'Our office router setup and the broken cabinet hinges got handled on the same appointment. That\u2019s the whole pitch, really.',
      name: 'M. Osei',
      job: 'Small business owner'
    }
  ];

  readonly year = new Date().getFullYear();

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
