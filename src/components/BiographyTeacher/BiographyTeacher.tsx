import { FaAward } from "react-icons/fa";
const BiographyTeacher = (): JSX.Element => {
  return (
    <section className="mt-20">
      <div className="container">
        <div className="bg-white p-4 shadow-[0px_0px_10px_0px_rgba(18,19,21,0.09)] rounded-xl">
          <h6 className="text-center py-3">ماموریت و بیوگرافی</h6>
          <span className="flex items-center justify-center max-w-[30rem] mx-auto mt-3 after:block after:mr-3 after:flex-grow after:border-t after:border-dashed after:border-[#9f9f9f] before:block before:flex-grow before:border-t before:border-dashed before:border-[#9f9f9f] before:ml-3">
            <FaAward className="w-5 h-5 text-[#69727d] " />
          </span>
          <div className="py-4 text-sm text-justify leading-8">
            <p>
              مایکل مایکل دارای مدرک کارشناسی ارشد در تئاتر و دکترای تئاتر
              استودیو ترافالگار از دانشگاه لندن است. او یک معلم مدارک مقدماتی
              مبارزه با BASSC است، یک مربی مبارزه برای مرحله مقدماتی و دارای یک
              کمربند سیاه در آیکیدو است. مایکل برای بسیاری از شرکت های تئاتر از
              جمله: درخت نارنجی، استفان جوزف تئاتر، سلطنتی و Derngate، Crucible
              Theatre، Graeae کار کرده است.
            </p>
            <p className="mt-1">
              او چندین نمایش را برای شرق 15 کارگردانی کرده است – از جمله نخست
              وزیر مارتین لینچ و همچنین کارهای متعددی را برای اسلحه های سلطنتی
              در برج لندن انجام داده است. او برای بازیگر فیلم The Roundabout و
              Assistant Fight Arranger برای این ویژگی، Faintheart بود. در آنچه
              احساس می کند زندگی گذشته است، او در Conquest، سریال برای کانال
              تاریخی اجرا کرد.
            </p>
            <p className="mt-2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطر آنچنان که لازم است.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographyTeacher;
