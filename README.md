# Art Portfolio Website

A professional art portfolio website built with Next.js, TypeScript, and Tailwind CSS, inspired by the design of [Art by Wu](https://www.artbywu.com/).

## Features

- **Responsive Design**: Optimized for all devices
- **Image Gallery**: Interactive image galleries with modal view
- **Navigation**: Clean, professional navigation
- **Performance**: Optimized with Next.js Image component
- **SEO Ready**: Built-in SEO optimization
- **TypeScript**: Type-safe development

## Pages

- **Story**: Main page with story beats and storyboards
- **Vis Dev & Illustration**: Visual development and illustration work
- **WORK (Story)**: Professional story work
- **WORK (VISDEV)**: Visual development projects
- **Sketches & Photo**: Personal sketches and photography
- **About**: Artist information and contact

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd art-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home/Story page
│   ├── vis-dev/           # Vis Dev page
│   ├── work-story/        # Work Story page
│   ├── work-visdev/       # Work VisDev page
│   ├── sketches/          # Sketches page
│   └── about/             # About page
├── components/            # React components
│   ├── Navigation.tsx     # Navigation component
│   └── ImageGallery.tsx   # Image gallery component
public/
└── images/               # Image assets
```

## Customization

### Adding Images

1. Place your images in the `public/images/` directory
2. Update the image arrays in the page components
3. Use the following format:
```typescript
const images = [
  { src: '/images/your-image.jpg', alt: 'Description', title: 'Optional title' }
];
```

### Styling

The website uses Tailwind CSS for styling. Custom styles can be added in:
- `src/app/globals.css` for global styles
- Component-specific styles in the component files

### Content

Update the content in each page component to match your portfolio:
- Project descriptions
- Image galleries
- About information
- Navigation labels

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Performance

- Images are optimized with Next.js Image component
- Lazy loading for better performance
- Responsive images for different screen sizes
- SEO optimized with proper meta tags

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Support

For questions or support, please open an issue in the repository.

https://www.artbywu.com/