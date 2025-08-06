import Navigation from '@/components/Navigation';
import ImageGallery from '@/components/ImageGallery';

export default function WorkStoryPage() {
  const workStoryImages = [
    { src: '/images/work-story-1.jpg', alt: 'Story work 1' },
    { src: '/images/work-story-2.jpg', alt: 'Story work 2' },
    { src: '/images/work-story-3.jpg', alt: 'Story work 3' },
    { src: '/images/work-story-4.jpg', alt: 'Story work 4' },
    { src: '/images/work-story-5.jpg', alt: 'Story work 5' },
    { src: '/images/work-story-6.jpg', alt: 'Story work 6' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-title">WORK (Story)</h1>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">STORY PROJECTS</h2>
            <p className="text-gray-600 mb-8">Professional story work and collaborations.</p>
            <ImageGallery images={workStoryImages} />
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">STORYBOARD SEQUENCES</h2>
            <p className="text-gray-600 mb-8">Complete storyboard sequences and narrative development.</p>
            <ImageGallery images={workStoryImages} />
          </section>
        </div>
      </main>
    </div>
  );
} 