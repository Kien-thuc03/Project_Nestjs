export const metadata = {
  title: 'About Us',
  description: 'Learn more about our company',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      
      <div className="prose max-w-none">
        <p className="mb-4">
          Welcome to our company! We are dedicated to providing the best services to our customers.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="mb-4">
          Our mission is to create innovative solutions that help businesses grow and succeed in the digital age.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
        <p className="mb-4">
          We have a talented team of professionals who are passionate about what they do.
        </p>
      </div>
    </div>
  );
} 