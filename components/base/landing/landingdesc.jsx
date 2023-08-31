import React from "react";
import LandingImageOne from "@/assets/images/landing/home.jpg";
import LandingImageTwo from "@/assets/images/landing/hometwo.jpg";
import Image from "next/image";

const LandingGrid = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex flex-col border dark:dark p-4 rounded-lg items-center md:items-center md:flex-row gap-4 justify-between">
        <div className="flex flex-col max-w-xl">
          <h1 className="text-2xl font-bold">Yatırım Fonları Nedir?</h1>
          <p className="text-lg md:mt-4">
            Yatırım fonları, birden fazla yatırımcının bir araya gelerek toplu
            bir şekilde yatırım yapmasını sağlayan finansal araçlardır.
            Yatırımcılar, yatırım fonlarına katılarak profesyonel fon
            yöneticileri tarafından yönetilen portföylerdeki çeşitli varlıklara
            sahip olurlar. Hisse senetleri, tahviller, gayrimenkul ve diğer
            varlık sınıfları gibi çeşitli enstrümanlara dağıtılmış bir şekilde
            yatırım yapılabilir. Yatırım fonları, yatırımcılara kolaylık,
            çeşitlendirme, profesyonel yönetim ve likidite sağlama gibi
            avantajlar sunar. Ayrıca, yatırımcılar küçük miktarlarla bile farklı
            varlık sınıflarına erişebilir ve piyasada genel trendlere yatırım
            yapabilirler. Yatırım fonları, bireysel yatırımcıların
            tasarruflarını etkili bir şekilde değerlendirmelerine yardımcı
            olurken, aynı zamanda büyük kurumsal yatırımcıların da portföylerini
            çeşitlendirmelerine ve risklerini dağıtmalarına olanak tanır.
          </p>
        </div>
        <Image
          src={LandingImageOne}
          width={500}
          className="rounded-md"
          alt="landing"
        />
      </div>
      <div className="flex flex-col border dark:dark p-4 rounded-lg items-center md:items-start md:flex-row gap-4 justify-between">
        <div className="flex flex-col max-w-xl">
          <h1 className="text-2xl font-bold">Yatırım Fonları Nasıl Çalışır?</h1>
          <p className="text-lg md:mt-4">
            Yatırım fonları, birden fazla yatırımcının bir araya gelerek toplu
            bir şekilde yatırım yapmasını sağlayan kolektif yatırım araçlarıdır.
            Yatırım fonları, profesyonel fon yöneticileri tarafından yönetilir
            ve yatırımcıların çeşitli varlıklara (örneğin hisse senetleri,
            tahviller, gayrimenkul) dağıtılmış bir şekilde yatırım yapmalarını
            sağlar. Bu, yatırımcıların küçük miktarlarla bile farklı varlık
            sınıflarına erişebilmelerini ve portföylerini
            çeşitlendirebilmelerini sağlar. Yatırım fonları, riskleri dağıtma,
            profesyonel yönetimden faydalanma ve likidite sağlama gibi
            avantajlar sunar. Ayrıca, yatırımcıların tek bir hisse veya tahvile
            bağlı kalmadan piyasadaki genel trendlere yatırım yapmalarını
            sağlar.
          </p>
        </div>
        <Image
          src={LandingImageTwo}
          width={500}
          className="rounded-md"
          alt="landing"
        />
      </div>
    </div>
  );
};

export default LandingGrid;
