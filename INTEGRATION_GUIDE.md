# Integration Guide - Adding New Features to Existing Pages

This guide shows you how to integrate all the new professional components into your existing website pages.

---

## 🎯 Step-by-Step Integration

### Step 1: Update Your Home Page (index.js)

Add the new components to your existing home page:

```jsx
// At the top of pages/index.js, add these imports:
import SEOHead from '../components/SEOHead';
import AIVoiceReceptionistCalculator from '../components/AIVoiceReceptionistCalculator';
import AIAutomationCalculator from '../components/AIAutomationCalculator';
import CalendlyBooking from '../components/CalendlyBooking';
import { UNSPLASH_IMAGES } from '../config/images';

// Replace your existing Head component with SEOHead:
<SEOHead
  title="DeVinci Codes - AI & Automation Solutions"
  description="Professional AI and automation solutions to revolutionize your business operations. Save time, reduce costs, and increase revenue."
  keywords="AI automation, artificial intelligence, business automation, AI voice receptionist"
/>

// Add the ROI Calculators section after your existing sections:
<section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
  <div className="container-custom">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Calculate Your Potential Savings
      </h2>
      <p className="text-xl text-gray-600">
        See how much money you could save with our AI solutions
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
      <div className="animate-on-scroll">
        <AIVoiceReceptionistCalculator />
      </div>
      <div className="animate-on-scroll">
        <AIAutomationCalculator />
      </div>
    </div>
  </div>
</section>

// Add the Calendly booking section before the footer:
<CalendlyBooking />
```

---

### Step 2: Update Your Contact Page

Create or update your contact page to include Calendly:

```jsx
// pages/contact.js
import SEOHead from '../components/SEOHead';
import CalendlyBooking from '../components/CalendlyBooking';

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact Us - DeVinci Codes"
        description="Get in touch with DeVinci Codes for AI and automation solutions. Schedule a free consultation today."
      />

      <div className="min-h-screen bg-light">
        <CalendlyBooking />
      </div>
    </>
  );
}
```

---

### Step 3: Update Your Services Page

Add the ROI calculators to showcase your services:

```jsx
// pages/services.js or wherever you list services
import SEOHead from '../components/SEOHead';
import AIVoiceReceptionistCalculator from '../components/AIVoiceReceptionistCalculator';
import AIAutomationCalculator from '../components/AIAutomationCalculator';

export default function ServicesPage() {
  return (
    <>
      <SEOHead
        title="Our Services - AI & Automation"
        description="Explore our AI and automation services. Calculate your ROI and see how we can transform your business."
      />

      <div className="min-h-screen bg-light">
        {/* Your existing services content */}

        {/* Add calculators section */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12">
              Calculate Your ROI
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              <AIVoiceReceptionistCalculator />
              <AIAutomationCalculator />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
```

---

### Step 4: Update Your Portfolio/About Page

Add the optimized PDF viewer:

```jsx
// pages/portfolio.js or pages/about.js
import SEOHead from '../components/SEOHead';
import OptimizedPDFViewer from '../components/OptimizedPDFViewer';

export default function PortfolioPage() {
  return (
    <>
      <SEOHead
        title="Portfolio - DeVinci Codes"
        description="View our portfolio of successful AI and automation projects. See how we've helped businesses transform."
      />

      <div className="min-h-screen bg-light section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600">
              Explore our work and achievements
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <OptimizedPDFViewer file="/portfolio.pdf" height="800px" />
          </div>
        </div>
      </div>
    </>
  );
}
```

---

### Step 5: Update Your App Wrapper (_app.js)

Add the professional loader and smooth animations:

```jsx
// pages/_app.js
import { useState, useEffect } from 'react';
import ProfessionalLoader from '../components/ProfessionalLoader';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Page load animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    // Observe all elements with animate-on-scroll class
    setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  if (loading) {
    return <ProfessionalLoader />;
  }

  return <Component {...pageProps} />;
}
```

---

### Step 6: Update Images with Unsplash

Replace your existing images:

```jsx
// Before (old image):
<img src="/images/old-image.jpg" alt="Old Image" />

// After (new Unsplash image):
import { UNSPLASH_IMAGES } from '../config/images';

<img
  src={UNSPLASH_IMAGES.hero.main}
  alt={UNSPLASH_IMAGES.hero.alt}
  loading="lazy"
  className="w-full h-96 object-cover"
/>

// Or use Next.js Image component for better performance:
import Image from 'next/image';
import { UNSPLASH_IMAGES } from '../config/images';

<Image
  src={UNSPLASH_IMAGES.hero.main}
  alt={UNSPLASH_IMAGES.hero.alt}
  width={1920}
  height={1080}
  priority
  className="w-full h-96 object-cover"
/>
```

---

### Step 7: Add Animation Classes

Add animation classes to your existing components:

```jsx
// Before:
<section>
  <h2>My Section</h2>
  <p>Content here</p>
</section>

// After:
<section className="section-padding">
  <div className="container-custom">
    <h2 className="animate-on-scroll fade-up">My Section</h2>
    <p className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
      Content here
    </p>
  </div>
</section>
```

---

## 🎨 Styling Updates

### Update Your Existing Buttons

Replace your old button styles with the new professional styles:

```jsx
// Before:
<button className="bg-cyber-cyan text-pure-black px-6 py-3">
  Click Me
</button>

// After:
<button className="btn-primary">
  Click Me
</button>

// Or secondary style:
<button className="btn-secondary">
  Click Me
</button>
```

### Update Your Cards/Sections

```jsx
// Before:
<div className="bg-glass-black border border-cyber-cyan p-6">
  Content
</div>

// After:
<div className="professional-card p-6">
  Content
</div>
```

### Update Text Colors

```jsx
// Before:
<h1 className="text-cyber-cyan">Title</h1>
<p className="text-cyber-white">Text</p>

// After:
<h1 className="text-gradient">Title</h1>
<p className="text-gray-600">Text</p>
```

---

## 📄 Component Placement Recommendations

### Home Page Structure
```
1. Hero Section (with Unsplash background)
2. About/Introduction
3. Services Overview
4. ROI Calculators ← NEW
5. Portfolio/Projects
6. Testimonials
7. Calendly Booking ← NEW
8. Footer
```

### Services Page Structure
```
1. Header
2. Service Cards
3. ROI Calculators ← NEW
4. Benefits Section
5. Calendly Booking ← NEW
6. Footer
```

### Portfolio Page Structure
```
1. Header
2. PDF Viewer ← NEW
3. Project Grid
4. Calendly Booking ← NEW
5. Footer
```

---

## 🔄 Migration Checklist

Use this checklist to ensure complete migration:

- [ ] Updated `_app.js` with ProfessionalLoader
- [ ] Added SEOHead to all pages
- [ ] Replaced old images with Unsplash images
- [ ] Added ROI calculators to home page
- [ ] Added Calendly to contact page
- [ ] Added PDF viewer to portfolio page
- [ ] Updated button styles to use btn-primary/secondary
- [ ] Updated card styles to use professional-card
- [ ] Added animate-on-scroll classes
- [ ] Updated text colors from dark theme
- [ ] Tested on mobile devices
- [ ] Tested all calculators
- [ ] Verified PDF viewer works
- [ ] Verified Calendly loads correctly

---

## 🧪 Testing After Integration

After integrating, test these features:

1. **Page Load**
   - Professional loader appears
   - Smooth transition to content

2. **Animations**
   - Sections animate on scroll
   - Smooth transitions

3. **Calculators**
   - Both calculators work
   - All currencies function
   - Calculations are accurate

4. **PDF Viewer**
   - PDF loads with progress
   - Zoom controls work
   - Navigation works
   - Download button works

5. **Calendly**
   - Widget loads correctly
   - Can select times
   - Form submits

6. **Images**
   - All Unsplash images load
   - Lazy loading works
   - Proper sizes on mobile

7. **SEO**
   - Meta tags present
   - Social preview works
   - Schema.org data valid

---

## 🚨 Common Issues & Solutions

### Issue: Calculators not displaying correctly
**Solution:** Make sure you've imported the components correctly and the grid layout has proper classes.

### Issue: PDF viewer showing errors
**Solution:** Verify the PDF file exists at `/public/portfolio.pdf` and the path is correct.

### Issue: Calendly not loading
**Solution:** Check that the Calendly script is loading. Inspect the browser console for errors.

### Issue: Animations not triggering
**Solution:** Ensure you've added the Intersection Observer code in `_app.js` or the page component.

### Issue: Images not loading
**Solution:** Verify Unsplash domain is in `next.config.js` images configuration.

---

## 📞 Need Help?

If you encounter issues during integration:

1. Check the demo page (`/demo`) to see working examples
2. Review the component source code for usage examples
3. Check browser console for errors
4. Verify all imports are correct
5. Email: devincicodes.official@gmail.com

---

## 🎉 You're Done!

Once you've completed all the steps, your website will have:

✅ Professional white theme
✅ ROI calculators
✅ Optimized PDF viewer
✅ Calendly integration
✅ Professional images
✅ Smooth animations
✅ Enhanced SEO

Run your development server and enjoy your transformed website!

```bash
npm run dev
```

---

Made with ❤️ by DeVinci Codes
