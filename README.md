# PT Rinoka Karbon Indonesia - Website

Professional website for PT Rinoka Karbon Indonesia, a premium coconut charcoal manufacturer.

## Features

- **Multi-page Layout**: Home, Products, About Us, and Contact pages
- **Responsive Design**: Mobile-friendly and works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Contact Form**: Interactive contact form with validation
- **Product Showcase**: Detailed product information and specifications
- **SEO Ready**: Proper meta tags and semantic HTML

## Pages

1. **Home (index.html)**
   - Hero section with call-to-action buttons
   - Company features and benefits
   - About preview section
   - Call-to-action section

2. **Products (products.html)**
   - Detailed product cards with specifications
   - Various coconut charcoal products
   - Custom order information

3. **About Us (about.html)**
   - Company overview
   - Mission and vision
   - Core values
   - Why choose us section
   - Certifications

4. **Contact (contact.html)**
   - Contact information
   - Interactive contact form
   - Map placeholder for location

## Customization Guide

### Update Company Information

1. **Contact Details**: Update phone, email, and address in all HTML files
   - Search for `+62 XXX XXXX XXXX` and replace with your phone number
   - Search for `info@rinokakarbon.com` and replace with your email
   - Update the address in `contact.html`

2. **Business Hours**: Update in `contact.html` under the Business Hours section

### Add Images

Replace the placeholder images with your actual photos:

1. Add images to the `images/` folder
2. Update the placeholder divs in HTML:
   ```html
   <!-- Replace this: -->
   <div class="placeholder-image">
       <span>Your Factory Image</span>
   </div>

   <!-- With this: -->
   <img src="images/your-image.jpg" alt="Description">
   ```

### Add Google Maps

In `contact.html`, replace the map placeholder with Google Maps embed:

```html
<div class="map-placeholder">
    <iframe
        src="YOUR_GOOGLE_MAPS_EMBED_URL"
        width="100%"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy">
    </iframe>
</div>
```

### Customize Colors

Edit `css/style.css` to change the color scheme:

```css
:root {
    --primary-color: #2c5f2d;    /* Main green color */
    --secondary-color: #97c05c;  /* Light green */
    --accent-color: #ff6b35;     /* Orange for buttons */
    /* Modify these to match your brand */
}
```

### Connect Contact Form

The contact form currently displays a success message. To connect it to a backend:

1. Set up a server endpoint (PHP, Node.js, etc.)
2. Update `js/script.js` to send data to your endpoint
3. Uncomment and modify the fetch code in the script

Example with PHP:
```javascript
fetch('contact.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})
```

## Deployment

### Option 1: Simple Web Hosting

1. Upload all files to your web hosting via FTP
2. Ensure the folder structure is maintained
3. Access via your domain

### Option 2: GitHub Pages

1. Create a GitHub repository
2. Push all files
3. Enable GitHub Pages in repository settings
4. Access via `https://yourusername.github.io/repository-name`

### Option 3: Netlify/Vercel

1. Connect your repository or drag and drop the folder
2. Deploy automatically
3. Get a free SSL certificate

## File Structure

```
rinoka-karbon-website/
├── index.html
├── products.html
├── about.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── (add your images here)
└── README.md
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Next Steps

1. Add your actual photos and images
2. Update contact information
3. Customize colors to match your brand
4. Add Google Maps integration
5. Connect contact form to email service
6. Add social media links
7. Optimize images for web
8. Set up analytics (Google Analytics)
9. Test on multiple devices
10. Deploy to web hosting

## Support

For questions about the website code, you can refer to standard HTML/CSS/JavaScript documentation.

---

**PT Rinoka Karbon Indonesia**
Premium Coconut Charcoal Manufacturer
