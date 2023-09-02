import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import AccordionMenuAboutUs from "../../components/AccordionMenuAboutUs/AccordionMenuAboutUs";
import CustomersComments from "../../components/CustomersComments/CustomersComments";

const AboutUs = (): JSX.Element => {
  return (
    <section className="mt-20">
      <Breadcrumb currentPage=" درباره ما" />
      <div className="container text-sm">
        <div className="flex flex-col lg:flex-row items-center gap-5 mt-12">
          <div className="w-full lg:w-1/2 xl:w-[40%]">
            <img
              src="../assets/images/about-image.webp"
              className="object-cover w-full rounded-lg"
              alt="درباره ما"
            />
          </div>
          <div className="w-full lg:w-1/2 xl:w-[60%]">
            <h2 className="text-[#464749] text-2xl font-vazirMedium">
              درباره ما بیشتر بدانید!
            </h2>
            <p className="leading-8  mt-2 text-justify">
              آکادمی استادیار نام مجموعه جوانی است که با هدف توسعه علم‌های مدرن
              و آینده دار تشکیل شده است. این مجموعه با تیم تحقیقاتی قوی و
              به‌روزی که دارد، دوره‌های آموزشی هوشمندانه‌ای طراحی می‌کند تا علوم
              فعالیت حرفه‌ای و موثر را گسترش دهد و افراد توانمند برای شغل‌های
              مدرن برای امروز و فردای کشور بسازد. افرادی که در دنیای تکنولوژی
              حرفی برای گفتن داشته باشد. در همین راستا آکادمی استادیار تا کنون
              بیش از ۷۰ هزار نفر را به طور مستقیم و غیر مستقیم آموزش داده است.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-[#464749] text-xl font-vazirMedium">
            پلی میان آموزش و بازار کار
          </h3>
          <p className="leading-8 mt-2 text-justify">
            استادیار، دانشجویان خود را تا رسیدن به بازار کار همراهی خواهد کرد.
            به‌عبارتی ما معتقدیم اگرچه هر فرد متخصصی می‌تواند وارد بازار کار
            شود، اما به دلیل تغییرات و دگرگونی‌های بازار کار، دسترسی به بهترین
            موقعیت شغلی متناسب با مهارت‌های افراد، کمی مشکل و پیچیده است. ما در
            همیار‌آکادمی تلاش داریم با پیوند زدن آموزش به بازار کار، این معضل
            قدیمی را حل کنیم. آزمون‌های تخصصی در پایان دوره‌های آموزشی
            همیار‌آکادمی، راهی است برای ساختن رزومه و تاییدیه‌های شغلی تا
            کارآموزان همیار‌آکادمی با داشتن یک گواهی معتبر بتوانند هم خودشان
            موقعیت‌های بهتری را شناسایی کنند، هم هم‌دوره‌ای‌ها و اساتید
            همیار‌آکادمی بتوانند ‌آن‌ها را به شرکت‌های مختلف معرفی کنند و هم
            پلتفرم استعدادیابی همیار‌آکادمی آن‌ها را به بهترین موقعیت متناسب با
            سطح کیفی مهارت آن‌ها وصل کند.
          </p>
        </div>

        <div className="mt-10 ">
          <h3 className="text-[#464749] text-2xl font-vazirMedium">
            مراحل آغاز به کار و رشد
          </h3>
          <AccordionMenuAboutUs />
        </div>

        <CustomersComments />
      </div>
    </section>
  );
};

export default AboutUs;
