import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import aboutus from '../assets/img/aboutus.webp';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { LanguageContext } from '../contexts/LanguageContext';

const testimonials = [
  {
    name: 'John Doe',
    text: 'HealthHub provided excellent care and I felt truly supported throughout my treatment. The team was professional and compassionate.',
    location: 'Ottawa, ON',
  },
  {
    name: 'Jane Smith',
    text: 'I had a great experience at HealthHub. The staff is friendly and the facilities are top-notch. Highly recommended!',
    location: 'Ottawa, ON',
  },
  {
    name: 'Michael Johnson',
    text: 'The doctors at HealthHub are knowledgeable and attentive. I felt heard and well taken care of. Thank you for the great service!',
    location: 'Ottawa, ON',
  },
];

const Home = () => {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  const handleSeeServicesClick = () => {
    navigate('/services');
  };

  const handleTeamClick = () => {
    navigate('/team');
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-black bg-[url('assets/img/home.jpg')] bg-no-repeat bg-cover opacity-90">
        <div className="w-full lg:w-4/5 space-y-5 mt-10">
          <h1 className="text-5xl font-bold leading-tight">
            {language === 'en' ? 'Make the right choice for your health!' : 'Faites le bon choix pour votre santé!'}
          </h1>
          <p>
            {language === 'en' ? 'Contact HealthTime now to get the best medical assistance out there!' : 'Contactez HealthTime dès maintenant pour obtenir la meilleure assistance médicale possible!'}
          </p>
          <button
            onClick={handleSeeServicesClick}
            className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-backgroundColor transition duration-300 ease-in-out"
          >
            {language === 'en' ? 'Explore Our Services' : 'Explorer Nos Services'}
          </button>
        </div>
      </div>

      <br />
      <div className="bg-white mt-10 p-10 rounded-md shadow-md flex flex-col lg:flex-row items-center">
        <img src={aboutus} alt="About Us" className="w-full lg:w-1/2 rounded-md lg:mr-8 mb-8 lg:mb-0"/>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4 text-black">{language === 'en' ? 'About' : 'À propos'} <span className="text-orange-500">{language === 'en' ? 'Us' : 'Nous'}</span></h2>
          <p className="mb-4">
            {language === 'en' ? 'At HealthTime, we are dedicated to providing the best healthcare services to our community. Our team of experienced professionals is here to ensure you receive the highest quality care.' : 'Chez HealthTime, nous nous engageons à fournir les meilleurs services de santé à notre communauté. Notre équipe de professionnels expérimentés est là pour garantir que vous recevez des soins de la plus haute qualité.'}
          </p>
          <p className="mb-4">
          {language === 'en' ? (
            'Our mission is to promote health and wellness through comprehensive medical services, patient education, and compassionate care. We are here to support you on your journey to better health.'
          ) : (
            'Notre mission est de promouvoir la santé et le bien-être grâce à des services médicaux complets, à l\'éducation des patients et aux soins compatissants. Nous sommes là pour vous soutenir dans votre parcours vers une meilleure santé.'
          )}
        </p>
          <p className="mb-4">
            {language === 'en' ? 'Located in Ottawa, ON, K1N 7R2, HealthHub is at the heart of the community. Our modern facility is equipped with the latest technology to provide top-notch medical services.' : 'Situé à Ottawa, ON, K1N 7R2, HealthHub est au cœur de la communauté. Notre installation moderne est équipée des dernières technologies pour fournir des services médicaux de haute qualité.'}
          </p>
          <button
            onClick={handleTeamClick}
            className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-backgroundColor transition duration-300 ease-in-out"
          >
            {language === 'en' ? 'Meet Our Team' : 'Rencontrez Notre Équipe'}
          </button>
        </div>
      </div>

      <div className="bg-orange-300 py-12 px-4 sm:px-6 lg:px-8 mt-10">
       <div className="max-w-5xl mx-auto">
         <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">{language === 'en' ? 'Our Patients Say !' : 'Nos Patients Disent !'}</h2>
         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
           {testimonials.map((testimonial, index) => (
             <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
               <FaQuoteLeft className="text-orange-500 mb-4 text-2xl" />
               <p className="text-gray-700 mb-4">{testimonial.text}</p>
               <FaQuoteRight className="text-orange-500 mb-4 text-2xl" />
               <p className="text-blue-900 font-bold">{testimonial.name}</p>
               <p className="text-gray-500">{testimonial.location}</p>
             </div>
           ))}
         </div>
       </div>
     </div>
      
    </div>
  );
};

export default Home;