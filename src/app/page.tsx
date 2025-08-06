import Navigation from '@/components/Navigation';
import ImageGallery from '@/components/ImageGallery';

export default function Home() {
  // Sample data - replace with actual images
  const storyBeatsImages = [
    { src: '/images/story-beats-1.jpg', alt: 'Story beat 1', title: '0915_AC6_Rusty_IG__0000_Layer Comp 1.jpg' },
    { src: '/images/story-beats-2.jpg', alt: 'Story beat 2', title: '0915_AC6_Rusty_IG__0001_Layer Comp 2.jpg' },
    { src: '/images/story-beats-3.jpg', alt: 'Story beat 3', title: '0915_AC6_Rusty_IG__0002_Layer Comp 3.jpg' },
    { src: '/images/story-beats-4.jpg', alt: 'Story beat 4', title: '0915_AC6_Rusty_IG__0003_Layer Comp 4.jpg' },
    { src: '/images/godzilla-1.jpg', alt: 'Godzilla 1', title: '24_0117_Godzilla_01 (XL).jpg' },
    { src: '/images/godzilla-2.jpg', alt: 'Godzilla 2', title: '24_0117_Godzilla_02 (XL).jpg' },
  ];

  const acornCarverImages = [
    { src: '/images/acorn-carver-1.jpg', alt: 'Acorn Carver thumbnail 1', title: 'maxperkins_week10_Thumbs-1.jpg' },
    { src: '/images/acorn-carver-2.jpg', alt: 'Acorn Carver thumbnail 2', title: 'maxperkins_week10_Thumbs-2.jpg' },
    { src: '/images/acorn-carver-3.jpg', alt: 'Acorn Carver thumbnail 3', title: 'maxperkins_week10_Thumbs-3.jpg' },
    { src: '/images/acorn-carver-4.jpg', alt: 'Acorn Carver thumbnail 4', title: 'maxperkins_week10_Thumbs-4.jpg' },
    { src: '/images/acorn-carver-5.jpg', alt: 'Acorn Carver thumbnail 5', title: 'maxperkins_week10_Thumbs-5.jpg' },
    { src: '/images/acorn-carver-6.jpg', alt: 'Acorn Carver thumbnail 6', title: 'maxperkins_week10_Thumbs-6.jpg' },
  ];

  const twoTypesImages = [
    { src: '/images/two-types-1.jpg', alt: 'Two Types thumbnail 1', title: '2410_24_ANIMC_AdvStoryPort_Thumbnails_01.jpg' },
    { src: '/images/two-types-2.jpg', alt: 'Two Types thumbnail 2', title: '2410_24_ANIMC_AdvStoryPort_Thumbnails_02.jpg' },
    { src: '/images/two-types-3.jpg', alt: 'Two Types thumbnail 3', title: '2410_24_ANIMC_AdvStoryPort_Thumbnails_03.jpg' },
    { src: '/images/two-types-4.jpg', alt: 'Two Types thumbnail 4', title: '2410_24_ANIMC_AdvStoryPort_Thumbnails_04.jpg' },
    { src: '/images/two-types-5.jpg', alt: 'Two Types thumbnail 5', title: '2410_24_ANIMC_AdvStoryPort_Thumbnails_05.jpg' },
  ];

  const lovePotionImages = [
    { src: '/images/love-potion-1.jpg', alt: 'Love Potion sketch', title: 'Initial rough pass' },
  ];

  const actionSampleImages = [
    { src: '/images/action-sample-1.jpg', alt: 'Action sequence sample', title: 'Fight Sequence Sample (34-Panels)' },
  ];

  const threeK9Images = [
    { src: '/images/3k9-1.jpg', alt: '3K9 sequence 1', title: 'projectcity_seq01_0b-1.jpg' },
    { src: '/images/3k9-2.jpg', alt: '3K9 sequence 2', title: 'projectcity_seq01_0b-2.jpg' },
    { src: '/images/3k9-3.jpg', alt: '3K9 sequence 3', title: 'projectcity_seq01_0b-3.jpg' },
    { src: '/images/3k9-4.jpg', alt: '3K9 sequence 4', title: 'projectcity_seq01_0b-4.jpg' },
    { src: '/images/3k9-5.jpg', alt: '3K9 sequence 5', title: 'projectcity_seq01_0b-5.jpg' },
    { src: '/images/3k9-6.jpg', alt: '3K9 sequence 6', title: 'projectcity_seq01_0b-6.jpg' },
  ];

  const gestureImages = [
    { src: '/images/gesture-1.jpg', alt: 'Gesture drawing 1' },
    { src: '/images/gesture-2.jpg', alt: 'Gesture drawing 2' },
    { src: '/images/gesture-3.jpg', alt: 'Gesture drawing 3' },
    { src: '/images/gesture-4.jpg', alt: 'Gesture drawing 4' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-title">Story</h1>
          
          {/* Story Beats Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">STORY BEATS</h2>
            <p className="text-gray-600 mb-8">Exploring story beats and moments.</p>
            <ImageGallery images={storyBeatsImages} />
          </section>

          {/* Storyboards Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">STORYBOARDS</h2>
            <p className="text-gray-600 mb-8">Below are original stories and sequences of moments</p>
            
            {/* The Acorn Carver */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4">The Acorn Carver (Personal) (120-Panels)</h3>
              <p className="text-gray-600 mb-6">
                Original story, feedback and guidance from Max Perkins. Woodsprite character design by Izzy Abreu.   
                A story that follows an acorn carver and 2 birds, learning about community, kinship, and craft.
              </p>
              <ImageGallery images={acornCarverImages} />
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">View fullsize</p>
                <p className="text-gray-600 mb-4">First story rough-pass, thumbnails for the acorn carver and birds.</p>
                <p className="text-gray-600">Lighting key idea for interior set</p>
              </div>
            </div>

            {/* Two Types of People */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4">Two Types of People (Comedy) (291 Panels)</h3>
              <p className="text-gray-600 mb-6">
                Peas the Mage and Squire Carrot are two friends. Peas thinks she has the best solution all the time. 
                And Carrot, well, disagrees. Peas learns the hard way that thinking she's right all the time... 
                could land her right into trouble.
              </p>
              <p className="text-gray-600 mb-6">Personal Story under the guidance of Hyein Park.</p>
              <ImageGallery images={twoTypesImages} />
            </div>

            {/* Love Potion */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4">Love Potion (Personal) (10 Panels)</h3>
              <p className="text-gray-600 mb-6">
                What could possibly go wrong? A tale exploring love.
              </p>
              <p className="text-gray-600 mb-6">
                Original thumbnails below are the first pass. This second pass takes a more sinister route.
              </p>
              <ImageGallery images={lovePotionImages} />
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">View fullsize</p>
                <p className="text-gray-600">Initial rough pass for the main character and her unsuspecting victim with exploratory sketches for them and the cupids.</p>
              </div>
            </div>

            {/* Short Action Sample */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4">Short Action Sample (34 Panels)</h3>
              <p className="text-gray-600 mb-6">Fight Sequence Sample (34-Panels)</p>
              <ImageGallery images={actionSampleImages} />
            </div>

            {/* 3K9 */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4">3K9 ( Original Story - Dialogue Excerpt) (80 Panels)</h3>
              <p className="text-gray-600 mb-6">
                This is a short story about two disgruntled DJs who find an unlikely third member by chance. 
                Dialogue and screenplay was developed by me.
              </p>
              <p className="text-gray-600 mb-6">
                3K9 is an original 3-page script created for the ProjectCity TV's Future Director's Mentorship Program 
                under the guidance of Rad Sechrist, for screenplay and directors Chey Curtis and Mel Zwyer, for story. 
                Mentees received feedback through weekly critique sessions as part of the program.
              </p>
              <p className="text-gray-600 mb-6">
                Thumbnail development for roughly 2 pages of script, along with the 3-page script sample.
              </p>
              <ImageGallery images={threeK9Images} />
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">View fullsize</p>
                <p className="text-sm text-gray-500 mb-2">View fullsize</p>
                <p className="text-sm text-gray-500 mb-2">View fullsize</p>
                <p className="text-sm text-gray-500 mb-2">View fullsize</p>
              </div>
            </div>

            {/* Gesture Drawings */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4">Gesture Drawings</h3>
              <ImageGallery images={gestureImages} />
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">View fullsize</p>
                <p className="text-sm text-gray-500 mb-2">View fullsize</p>
                <p className="text-sm text-gray-500 mb-2">View fullsize</p>
                <p className="text-sm text-gray-500 mb-2">View fullsize</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 