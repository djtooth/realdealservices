import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

interface ServiceTicket {
  //code: string;
  title: string;
  blurb: string;
  image: string;
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
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly services: ServiceTicket[] = [
    {      
      title: 'Home Renovations',
      blurb: 'Kitchens, bathrooms, painting, and additions.',
      image: '/images/diningroom.jpg'
    },
    {      
      title: 'Handyman Services',
      blurb: 'Drywall, fixtures, plumbing, flooring, minor and major repairs.',
      image: '/images/WaterFiltrationSystem.jpg'
    },
    {      
      title: 'Yardwork',
      blurb: 'Mowing, cleanup, landscaping, seasonal jobs.',
      image: '/images/zeroscape.jpg'
    },
    
    {      
      title: 'Tech Support',
      blurb: 'Wi-Fi, Installations, Computer Repairs, Smart Systems.',
      image: '/images/laptoprepair.jpg'
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
}
