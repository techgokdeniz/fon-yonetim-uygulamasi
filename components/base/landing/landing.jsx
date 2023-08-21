import React from "react";
import HomeAnimation from "./homeanimation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HomeContent from "./homecard";

const Landing = () => {
  return (
    <div className="w-full flex flex-col gap-4 md:pt-24 pt-10">
      <div className="flex gap-4 justify-center flex-col md:flex-row">
        <div className="w-full flex flex-col gap-4 min-h-[400px] justify-center">
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
        <div className="w-full border  bg-gray-100 rounded-lg dark:dark flex items-center justify-center">
          <HomeAnimation />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-4">
        <HomeContent />
      </div>
    </div>
  );
};

export default Landing;
