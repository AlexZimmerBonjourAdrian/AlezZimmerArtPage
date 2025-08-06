import Navigation from '@/components/Navigation';
import ImageGallery from '@/components/ImageGallery';

export default function SketchesPage() {
  const sketchesImages = [
    { src: '/images/sketch-1.jpg', alt: 'Sketch 1' },
    { src: '/images/sketch-2.jpg', alt: 'Sketch 2' },
    { src: '/images/sketch-3.jpg', alt: 'Sketch 3' },
    { src: '/images/sketch-4.jpg', alt: 'Sketch 4' },
    { src: '/images/sketch-5.jpg', alt: 'Sketch 5' },
    { src: '/images/sketch-6.jpg', alt: 'Sketch 6' },
  ];

  const photoImages = [
    { src: '/images/photo-1.jpg', alt: 'Photo 1' },
    { src: '/images/photo-2.jpg', alt: 'Photo 2' },
    { src: '/images/photo-3.jpg', alt: 'Photo 3' },
    { src: '/images/photo-4.jpg', alt: 'Photo 4' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-title">Sketches & Photo</h1>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">SKETCHES</h2>
            <p className="text-gray-600 mb-8">Personal sketches and studies.</p>
            <ImageGallery images={sketchesImages} />
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">PHOTOGRAPHY</h2>
            <p className="text-gray-600 mb-8">Photography work and reference material.</p>
            <ImageGallery images={photoImages} />
          </section>
        </div>
      </main>
    </div>
  );
} 