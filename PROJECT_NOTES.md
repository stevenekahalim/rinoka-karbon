# PT Rinoka Karbon Indonesia - Project Notes

## Project Overview
Website for coconut charcoal manufacturing company
Created: October 31, 2024

## Design Decisions

### Theme
- **Style**: Modern, sleek black theme
- **Colors**:
  - Background: Black (#0a0a0a)
  - Accent: Neon green (#00ff88)
  - Cards: Dark gray (#1a1a1a)
- **Vibe**: Modern tech feel with professional business approach

### Features Implemented

1. ✅ **Logo in Navigation** - Circular logo with green border
2. ✅ **Language Toggle** - EN/ID switch (English/Indonesian)
3. ✅ **WhatsApp Button** - Floating button bottom-right (UPDATE NUMBER!)
4. ✅ **Image Lightbox** - Click images to view full-screen
5. ✅ **Testimonials** - 3 customer reviews with stars
6. ✅ **Certifications** - ISO badges on About page
7. ✅ **Export Destinations** - Global reach map with 6 regions
8. ✅ **Video Section** - Placeholder for production video
9. ✅ **PDF Catalog** - Downloadable product catalog
10. ✅ **FAQ Section** - 6 questions with accordion
11. ✅ **Loading Animations** - Smooth page load and scroll effects
12. ✅ **Scroll-to-Top** - Floating button appears on scroll

## Structure
```
rinoka-karbon-website/
├── index.html          - Homepage with all features
├── products.html       - 6 product types with images
├── about.html          - Company info, mission, values
├── contact.html        - Contact form and info
├── css/
│   └── style.css       - All styles, modern black theme
├── js/
│   └── script.js       - All interactive features
├── images/             - Product photos, logo, factory
└── downloads/
    └── product-catalog.pdf - Downloadable catalog
```

## To-Do / Customization Needed

- [ ] Replace WhatsApp number in index.html (search: 62XXXXXXXXXX)
- [ ] Add real company logo to images/logo.png
- [ ] Replace placeholder images with actual product photos
- [ ] Update testimonials with real customer reviews
- [ ] Add YouTube video embed code in video section
- [ ] Upload actual product catalog PDF
- [ ] Update contact information (phone, email, address)
- [ ] Add Google Maps embed in contact.html
- [ ] Get actual certification badges

## Technical Notes

### Image Lightbox
- Click any `.product-image img` or `.about-image img` to open
- Close with X, clicking outside, or ESC key

### Language Toggle
- Uses `data-en` and `data-id` attributes
- Add to any element: `data-en="English text" data-id="Indonesian text"`

### FAQ Accordion
- Auto-closes other FAQs when opening new one
- Smooth animations with max-height transition

### WhatsApp Integration
Format: `https://wa.me/62XXXXXXXXXX`
- 62 = Indonesia country code
- No spaces or special characters
- Example: https://wa.me/628123456789

## Future Enhancement Ideas
- Add blog section for industry news
- Customer portal/login area
- Online ordering system
- Live chat integration
- Multi-product image gallery (carousel)
- Company timeline/history
- Team member profiles
- Case studies/success stories

## Browser Support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile responsive
- Touch-friendly for tablets/phones

## Deployment Options Considered
1. Simple web hosting (upload via FTP)
2. GitHub Pages (free)
3. Netlify/Vercel (free tier)

---

**Last Updated**: October 31, 2024
**Status**: Ready for customization and deployment
