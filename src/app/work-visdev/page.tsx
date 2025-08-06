import Navigation from '@/components/Navigation';
import ImageGallery from '@/components/ImageGallery';

export default function WorkVisDevPage() {
  const workVisDevImages = [
    { src: '/images/work-visdev-1.jpg', alt: 'Visual development work 1' },
    { src: '/images/work-visdev-2.jpg', alt: 'Visual development work 2' },
    { src: '/images/work-visdev-3.jpg', alt: 'Visual development work 3' },
    { src: '/images/work-visdev-4.jpg', alt: 'Visual development work 4' },
    { src: '/images/work-visdev-5.jpg', alt: 'Visual development work 5' },
    { src: '/images/work-visdev-6.jpg', alt: 'Visual development work 6' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-title">WORK (VISDEV)</h1>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">VISUAL DEVELOPMENT WORK</h2>
            <p className="text-gray-600 mb-8">Professional visual development and concept art.</p>
            <ImageGallery images={workVisDevImages} />
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">CHARACTER DESIGN</h2>
            <p className="text-gray-600 mb-8">Character designs and development.</p>
            <ImageGallery images={workVisDevImages} />
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">ENVIRONMENT DESIGN</h2>
            <p className="text-gray-600 mb-8">Environment concepts and world building.</p>
            <ImageGallery images={workVisDevImages} />
          </section>
        </div>
      </main>
    </div>
  );
} 