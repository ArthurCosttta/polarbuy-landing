interface Testimonial {
  name: string;
  location: string;
  metric: string;
  text: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="container mx-auto px-6 py-16 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">
          O que nossos usuários dizem
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-card">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-primary opacity-60">{testimonial.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-accent font-bold text-lg">{testimonial.metric}</p>
                </div>
              </div>
              <p className="text-primary text-sm italic opacity-80">&ldquo;{testimonial.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
