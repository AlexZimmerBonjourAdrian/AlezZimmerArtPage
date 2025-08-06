import Navigation from '@/components/Navigation';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-title">About</h1>
          
          <section className="mb-16">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-8">ALEZ ZIMMER</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Story & Visual Development Artist</h3>
                <p className="text-gray-600 mb-6">
                  Passionate about storytelling through visual art and narrative development. 
                  Specializing in storyboarding, character design, and visual development for animation and film.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Experience</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Storyboarding for animation and film projects</li>
                  <li>Character design and visual development</li>
                  <li>Environment design and world building</li>
                  <li>Illustration and concept art</li>
                  <li>Collaborative storytelling and narrative development</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Storytelling</h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm">
                      <li>Storyboarding</li>
                      <li>Narrative Development</li>
                      <li>Character Arcs</li>
                      <li>Visual Storytelling</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Visual Development</h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm">
                      <li>Character Design</li>
                      <li>Environment Design</li>
                      <li>Color Theory</li>
                      <li>Composition</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Contact</h3>
                <p className="text-gray-600">
                  For collaborations and inquiries, please reach out through the provided contact information.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 