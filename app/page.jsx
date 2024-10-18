import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-right">
            <span className="text-xl">فرانت اند دولوپر</span>
            <h1 className="h1 mb-6">
              سلام من <br /> <span className="text-accent">حسین زحمتکشان</span>
            </h1>
            <p className="max-w-[580px] mb-9 text-white/80">
             حدود 2 ساله که در حال آموزش فرانت اند هستم و تو این مدت تونستم
              قالب هایی با جدیدترین تکنولوژی های مرتبط طراحی کنم.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
              >
                <span>دانلود</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="text-3xl hover:text-accent"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
