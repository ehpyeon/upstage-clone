# Upstage AI Homepage Clone

A pixel-perfect clone of the Upstage AI homepage (https://www.upstage.ai) built with HTML, CSS, and vanilla JavaScript.

## Features

- ✨ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Clean, professional design with smooth animations
- 🔄 **Interactive Elements** - Rotating hero text, testimonial carousel, and smooth scrolling
- 🎯 **Accessibility** - Semantic HTML and ARIA labels for better accessibility
- 🚀 **Performance** - Optimized with lazy loading and smooth animations
- 🍪 **Cookie Notice** - GDPR-compliant cookie consent banner

## Structure

```
upstage-clone/
├── index.html          # Main HTML structure
├── css/
│   └── styles.css      # All styling and responsive design
├── js/
│   └── main.js         # Interactive features and animations
├── images/             # Image assets (placeholder)
└── README.md           # This file
```

## Key Sections

1. **Navigation** - Fixed header with product/solution menus
2. **Hero Section** - Rotating industry text with CTAs
3. **Products** - Document Parse, Information Extract, Solar LLM
4. **Industries** - Insurance and Healthcare solutions
5. **Testimonials** - Customer testimonial carousel
6. **Deployment** - Flexible deployment options
7. **Excellence** - Awards and achievements
8. **Footer** - Comprehensive links and newsletter signup

## Interactive Features

### Rotating Hero Text
Industries rotate every 3 seconds: Insurance → Finance → Healthcare → Manufacturing

### Testimonial Carousel
- Manual navigation with prev/next buttons
- Auto-rotate every 6 seconds
- Smooth transitions between testimonials

### Cookie Consent
- Stores user preference in localStorage
- Won't show again once user responds
- Decline or Accept options

### Scroll Animations
- Cards fade in and slide up when scrolled into view
- Navbar background changes on scroll
- Parallax effect on hero section

## How to Run

1. **Simple Setup** - Just open `index.html` in a browser
2. **Local Server** (recommended):
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx http-server

   # Using PHP
   php -S localhost:8000
   ```
3. Visit `http://localhost:8000` in your browser

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Grid, Flexbox, animations, transitions
- **JavaScript (ES6+)** - Modern vanilla JS
- **Google Fonts** - Inter font family

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #5b5fff;
    --dark-bg: #1a1a2e;
    --text-light: #ffffff;
    /* ... */
}
```

### Content
All content is in `index.html` - easy to edit and customize.

### Animations
Timing and effects are in `main.js`:
- Rotating text interval: Line 22
- Testimonial auto-rotate: Line 52
- Scroll animations: Lines 57-72

## Performance Optimizations

- ✅ CSS minification ready
- ✅ Lazy loading for images
- ✅ Intersection Observer for scroll animations
- ✅ Debounced scroll events
- ✅ Optimized selectors
- ✅ No external dependencies

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Future Enhancements

- [ ] Add product/solution dropdown menus
- [ ] Implement search functionality
- [ ] Add more page sections (About, Careers, etc.)
- [ ] Backend integration for newsletter
- [ ] Performance monitoring
- [ ] A/B testing capabilities

## Credits

Original design and content: [Upstage AI](https://www.upstage.ai)

This is a educational clone project for demonstration purposes only.

## License

This project is for educational purposes. All rights to the original design and content belong to Upstage AI.

---

Built with ❤️ using HTML, CSS, and JavaScript
