import FreeSessionsBox from "../SessionsBoxTemplate/FreeSessionsBox";
import PrivateSessionsBox from "../SessionsBoxTemplate/PrivateSessionsBox";
import SessionsBoxTemplate from "../SessionsBoxTemplate/SessionsBoxTemplate";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { useAppDispatch } from "../../Redux/store/store";
import { isFullWidthContentHandler } from "../../Redux/reducers/globalStates";

const CourseDetailsContent = (): JSX.Element => {
  const courseDetailsContentItems = [
    { id: crypto.randomUUID(), title: "لورم ایپسوم متن ساختگی با تولید سادگی" },
    { id: crypto.randomUUID(), title: "نامفهوم از صنعت چاپ و با استفاده" },
    { id: crypto.randomUUID(), title: "از طراحان گرافیک است." },
    {
      id: crypto.randomUUID(),
      title: "چاپگرها و متون بلکه روزنامه و مجله در ستون",
    },
    { id: crypto.randomUUID(), title: "و سطرآنچنان که لازم است." },
  ];

  const dispatch = useAppDispatch();

  return (
    <section className="mt-8 rounded-lg border border-fourth bg-white p-6 text-sm leading-8 relative">
      <h3 className="text-xl text-[#464749] font-vazirBold">
        در این دوره چه آموزش داده می شود؟
      </h3>
      <div
        className="absolute -right-12 h-full top-0 hidden lg:block"
        onClick={() => dispatch(isFullWidthContentHandler())}
      >
        <div className="bg-white border border-[#e5e5e5] w-10 sticky top-12 group">
          <button className="w-10 h-8 text-[#7b868a] flex justify-center items-center">
            <FaExpandArrowsAlt className="w-4 h-4" />
          </button>
          <span className="w-2 text-sm [writing-mode:vertical-lr] my-2 mx-auto pr-5 transition-all duration-200 hidden opacity-0 group-hover:block group-hover:opacity-100">
            حالت مطالعه
          </span>
        </div>
      </div>
      <p className="mt-4 text-justify">
        بهبود بهره وری خود را، انجام کارها، و پیدا کردن زمان بیشتری برای آنچه
        مهم است با راهنمایی مدیریت زمان. این مجموعه هفتگی تکنیک های زمان مدیریت
        زمان را برای کمک به افرادی که زمان خود را بهتر مدیریت می کنند و در نهایت
        سازنده تر می شوند، فراهم می کند. کارشناس مدیریت زمان، دیو Crenshaw هر
        دوشنبه جدید نوک جدید را فراهم می کند، با موضوعات متنوع زیادی روبرو است.
        برای یادگیری همه چیز از مدیریت ایمیل ها و تقویم ها تا تنظیم اولویت ها،
        همکاری با همکاران، کاهش وقفه ها، ایجاد یک “طرز تفکر بهره وری” و ایجاد یک
        محیط کاری راحت تر و کارآمدتر.
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 text-[13px] leading-5">
        <ul className="flex flex-col list-disc list-inside">
          {courseDetailsContentItems.map((contentItem) => (
            <li key={contentItem.id} className="mb-4">
              {contentItem.title}
            </li>
          ))}
        </ul>
        <ul className="flex flex-col list-disc list-inside">
          {courseDetailsContentItems.map((contentItem) => (
            <li key={contentItem.id} className="mb-4">
              {contentItem.title}
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-8">
        <h4 className="mb-3 font-vazirMedium text-lg">
          پیش نیاز های این دوره آموزشی
        </h4>
        بهبود بهره وری خود را، انجام کارها، و پیدا کردن زمان بیشتری برای آنچه
        مهم است با راهنمایی مدیریت زمان. این مجموعه هفتگی تکنیک های زمان مدیریت
        زمان را برای کمک به افرادی که زمان خود را بهتر مدیریت می کنند و در نهایت
        سازنده تر می شوند، فراهم می کند. کارشناس مدیریت زمان، دیو Crenshaw هر
        دوشنبه جدید نوک جدید را فراهم می کند، با موضوعات متنوع زیادی روبرو است.
      </p>
      <SessionsBoxTemplate
        title="ساخت سایت بدون برنامه نویسی"
        caption="همین ابتدای کار یک وب‌سایت بصورت عملی راه‌اندازی می‌کنیم."
        img={
          <svg
            x="0"
            y="0"
            enableBackground="new 0 0 447.674 447.674"
            viewBox="0 0 447.674 447.674"
            className="w-12 h-12"
          >
            <g fill="#00769D">
              <path d="M134.289 138.16h-24.722l67.399 190.521 37.732-107.825-29.254-82.696H159.36v-18.154h115.508v18.154h-27.049l67.398 190.521 24.227-69.234c31.781-88.702-26.048-116.333-26.048-136.129s16.048-35.843 35.843-35.843c1.071 0 2.111.058 3.13.153-33.541-31.663-78.768-51.08-128.534-51.08-65.027 0-122.306 33.146-155.884 83.458h66.336v18.154h.002zM36.548 223.837c0 71.704 40.302 133.986 99.483 165.458l-84.52-238.919c-9.628 22.556-14.963 47.385-14.963 73.461zM386.833 131.547c2.679 15.774 1.868 33.503-2.243 51.301h.745l-2.832 8.092c-1.678 5.843-3.791 11.82-6.191 17.693l-64.444 180.541c59.057-31.51 99.256-93.725 99.256-165.338 0-33.557-8.834-65.048-24.291-92.289z"></path>
              <path d="M166.075 402.033c18.195 5.894 37.603 9.091 57.762 9.091 19.228 0 37.777-2.902 55.239-8.285l-54.784-154.862-58.217 154.056z"></path>
              <path d="M382.113 65.56C339.836 23.283 283.625 0 223.836 0S107.837 23.283 65.56 65.56 0 164.047 0 223.837c0 59.789 23.283 115.999 65.56 158.276s98.488 65.56 158.277 65.56 115.999-23.283 158.277-65.56c42.277-42.277 65.56-98.488 65.56-158.276-.001-59.79-23.284-116-65.561-158.277zM223.836 431.883c-114.717 0-208.046-93.329-208.046-208.046S109.119 15.79 223.836 15.79s208.046 93.33 208.046 208.047-93.328 208.046-208.046 208.046z"></path>
            </g>
          </svg>
        }
      >
        <>
          <FreeSessionsBox
            title="راه اندازی سایت اختصاصی"
            caption="اصول کارکرد یک وب‌سایت بصورت عملی"
          />
          <PrivateSessionsBox
            title="نصب وردپرس روی هاست"
            caption=" تغییر پیشوند جداول دیتابیس برای افزایش امنیت سایت"
          />
          <PrivateSessionsBox
            title="کار با نوشته‌ها و مقالات سایت"
            caption="انواع نوشته و حالت های انتشار مطالب"
          />
        </>
      </SessionsBoxTemplate>
      <SessionsBoxTemplate
        title="ساخت فروشگاه اینترنتی با قابلیت فروش محصولات فیزیکی و دانلودی"
        caption="یک وب‌سایت فروشگاهی می‌سازیم و اولین محصول خود را برای فروش قرار می‌دهیم."
        img="../assets/images/online-shop.svg"
      >
        <>
          <FreeSessionsBox
            title="عنوان درس اول"
            caption=" زیرنویس عنوان درس اول"
          />
          <PrivateSessionsBox
            title="عنوان دوس دوم"
            caption=" زیرنویس عنوان درس دوم"
          />
        </>
      </SessionsBoxTemplate>
    </section>
  );
};

export default CourseDetailsContent;
