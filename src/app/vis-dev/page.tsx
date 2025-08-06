import Navigation from '@/components/Navigation';
import ImageGallery from '@/components/ImageGallery';

export default function VisDevPage() {
  const visDevImages = [
    { src: '/images/vis-dev-1.jpg', alt: 'Visual development 1' },
    { src: '/images/vis-dev-2.jpg', alt: 'Visual development 2' },
    { src: '/images/vis-dev-3.jpg', alt: 'Visual development 3' },
    { src: '/images/vis-dev-4.jpg', alt: 'Visual development 4' },
    { src: '/images/vis-dev-5.jpg', alt: 'Visual development 5' },
    { src: '/images/vis-dev-6.jpg', alt: 'Visual development 6' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-title">Vis Dev & Illustration</h1>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">VISUAL DEVELOPMENT</h2>
            <p className="text-gray-600 mb-8">Character designs, environment concepts, and visual storytelling.</p>
            <ImageGallery images={visDevImages} />
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">ILLUSTRATION</h2>
            <p className="text-gray-600 mb-8">Personal and commercial illustration work.</p>
            <ImageGallery images={visDevImages} />
          </section>
        </div>
      </main>
    </div>
  );
} 