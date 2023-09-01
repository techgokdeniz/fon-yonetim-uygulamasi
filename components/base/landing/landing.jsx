import React from "react";
import HomeAnimation from "./homeanimation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HomeContent from "./homecard";
import FaqSection from "./faqsection";
import LandingGrid from "./landingdesc";
import Footer from "./footer";

const Landing = () => {
  return (
    <div className="w-full flex flex-col gap-4 md:pt-24 pt-4">
      <div className="flex gap-4 justify-center flex-col md:flex-row">
        <div className="w-full flex  rounded-lg dark:border dark:dark dark:p-2 flex-col gap-4 min-h-[400px] justify-center">
          <h1 className="text-4xl font-bold">
            Yatırımlarınızı Tek Tıkla Yönetin!
          </h1>
          <p className="text-lg">
            Yatırımlarınızı tek bir yerden yönetmeye ne dersiniz? Web sitemiz,
            Tefas üzerindeki tüm yatırım fonlarınızı kolaylıkla yönetmenizi
            sağlar. Güvenli ve hızlı işlem yapma imkanı sunan platformumuzla fon
            alım-satım işlemlerinizi rahatlıkla gerçekleştirin. Yatırım
            dünyasının karmaşıklığına son verin ve yatırımlarınızı tek bir
            noktadan yönetmenin keyfini çıkarın. Tek yapmanız gereken,
            platformumuzda yerinizi almak!
          </p>
          <Link href="/login">
            <Button>Yönetim Paneline Git</Button>
          </Link>
        </div>
        <div className="w-full dark:border rounded-lg dark:dark flex items-center justify-end">
          <HomeAnimation />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-4">
        <HomeContent />
      </div>
      <div className="w-full flex flex-col gap-4 md:mt-28  justify-center ">
        <LandingGrid />
      </div>
      <div className="w-full flex flex-col gap-4 mt-8 rounded-lg dark:border justify-center dark:dark p-4">
        <h1 className="text-4xl font-bold text-center">
          Sıkça Sorulan Sorular
        </h1>
        <FaqSection />
      </div>
      <div className="mt-4 flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
