{/* Importing utils Components */ }
import Banner from '@/components/homepage/Banner';
import ItemList from '@/components/homepage/Products';
import { Process } from '@/components/homepage/Process';
import Header from '@/components/utils/Header';
import Suggested from '@/components/homepage/Suggested';
import Testimonials from '@/components/homepage/TestimonialsTest';
import FrequentlyAsked from '@/components/homepage/FrequentlyAsked';
import Footer from '@/components/utils/Footer';

export default function Home() {
  return (
    <div className="font-montserrat bg-light-gray text-white">
      <Header />
      <Banner />
      // padding bottom has been set temporarily
      <div className="flex flex-col mt-16 pb-16 px-16 gap-16 text-black">
        <Process />
        <ItemList />
        <Suggested />
        <Testimonials />
        <FrequentlyAsked />
      </div>
      <Footer />
    </div>
  )
}
