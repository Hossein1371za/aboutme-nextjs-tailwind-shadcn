"use client";

import CountUp from "react-countup";

const stats = [
  { num: 2, text: "سال آموزش" },
  { num: 18, text: "پروژه فرانت" },
  { num: 9, text: "ابزار مرتبط با فرانت" },
  { num: 446, text: "کد کامیت شده" },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-v-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, i) => (
            <div
              className="flex flex-1 gap-4 items-center justify-center xl:justify-start  font-maghreb"
              key={i}
            >
              <CountUp
                end={stat.num}
                delay={2}
                duration={5}
                className="text-4xl xl:text-6xl font-extrabold text-accent"
              />
              <p
                className={`${
                  stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } text-2xl xl:text-4xl  text-white/80`}
              >
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
