import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  title="eventbooking"
  email: string = "";
  subscribeSuccess: string | null = null;
  subscribeError: string | null = null;
 
  // Language
  selectedLanguage: string = 'en';
 
  // Events data
  events: Event[] = [];
 
  // Testimonials
  testimonials: any = [];
  testimonialsLoading: boolean = false;
  testimonialsError: string | null = null;
 
  ngOnInit() {
    // In a real app, you would fetch this data from a service
    this.loadMockData();
  }
 
  // constructor(public authService: AuthService) {}
 
  // logout() {
  //   this.authService.logout();
  // }
 
  loadMockData() {
    // Mock events
    this.events = [
      {
        id: 1,
        title: 'Music Concert',
        description: 'Join us for an unforgettable live performance in Metro Arena.',
        imageUrl: '/assets/images/inventory.jpg'
      },
      {
        id: 2,
        title: 'Tech Expo',
        description: 'Discover the latest innovations at Phoenix Plaza.',
        imageUrl: '/assets/images/inventory.jpg'
      }
    ];
   
    // Mock testimonials
    this.testimonials = [
      {
        id: 1,
        name: 'Emily R.',
        rating: 5,
        comment: 'EventEase made planning my wedding a breeze. Highly recommended for anyone planning events!',
        avatarUrl: '/assets/images/review.avif'
      },
      {
        id: 2,
        name: 'James T.',
        rating: 5,
        comment: 'The most user-friendly event platform I\'ve ever used! Everything was so straightforward.',
        avatarUrl: '/assets/images/review.avif'
      },
      {
        id: 3,
        name: 'Sophia L.',
        rating: 5,
        comment: 'Organized a corporate retreat with a tight deadline. Brilliant service and support!',
        avatarUrl: '/assets/images/review.avif'
      }
    ];
  }
 
  subscribeToNewsletter() {
    if (!this.email) return;
   
    // In a real app, you would call a service to handle this
    console.log('Subscribing email:', this.email);
   
    // Simulate API call
    setTimeout(() => {
      this.subscribeSuccess = 'Thanks for subscribing to our newsletter!';
      this.email = '';
     
      // Clear success message after 3 seconds
      setTimeout(() => {
        this.subscribeSuccess = null;
      }, 3000);
    }, 1000);
  }
 
  changeLanguage() {
    console.log('Language changed to:', this.selectedLanguage);
    // In a real app, you would handle language change here
  }
 
  prevTestimonial() {
    console.log('Show previous testimonial');
    // In a real app, you would implement testimonial navigation
  }
 
  nextTestimonial() {
    console.log('Show next testimonial');
    // In a real app, you would implement testimonial navigation
  }

}

interface Event {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}
 
interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  avatarUrl: string;
}
