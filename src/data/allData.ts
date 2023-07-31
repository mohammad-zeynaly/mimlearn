import { allDataType } from "../types/coursesInterface";

const allData: allDataType[] = [
  {
    id: 1,
    title: "آموزش فتوشاپ ",
    img: "./assets/images/products/product-1.png",
    prerequisite: "پیش نیاز ندارد",
    stars: 5,
    teacher: "مصطفی میر هادی",
    students: 257,
    price: 200_000,
    caption:
      "در پکیج آموزش فتوشاپ بعد از آموزش کامل تمام ابزارهای مورد نیاز برای طراحی انواع کاور و تامنیلو لوگو و.. ، در اختیار شما قرار گرفته است.",
    time: "9 ساعت و 20 دقیقه",
    type: "graphicCourse",
  },
  {
    id: 2,
    title: "آموزش ایلوستریتور ",
    img: "./assets/images/products/product-2.png",
    prerequisite: "پیش نیاز ندارد",
    stars: 5,
    teacher: "مصطفی میر هادی",
    students: 357,
    price: 320_000,
    caption:
      "در پکیج آموزش ایلوستریتور بعد از آموزش کامل تمام ابزارهای مورد نیاز برای طراحی  لوگو و.. ، در اختیار شما قرار گرفته است.",
    time: "12 ساعت و 51 دقیقه",
    type: "graphicCourse",
  },
  {
    id: 3,
    title: "آموزش پریمیر ",
    img: "./assets/images/products/product-3.png",
    prerequisite: "پیش نیاز ندارد",
    stars: 5,
    teacher: "حسین رحیمی",
    students: 435,
    price: 380_000,
    caption:
      "در پکیج آموزش پریمیر بعد از آموزش کامل تمام ابزارهای مورد نیاز برای ادیت انواع ویدیو و.. ، در اختیار شما قرار گرفته است.",
    time: "14 ساعت و 5 دقیقه",
    type: "graphicCourse",
  },
  {
    id: 4,
    title: "آموزش  افتر افکت",
    img: "./assets/images/products/product-4.png",
    prerequisite: "پیش نیاز ندارد",
    stars: 5,
    teacher: "حسین رحیمی",
    students: 600,
    price: 550_000,
    caption:
      "در پکیج آموزش افتر افکت بعد از آموزش کامل تمام ابزارهای مورد نیاز برای ساخت انواع استوری موشن یا انمیشن و.. ، در اختیار شما قرار گرفته است.",
    time: "9 ساعت و 10 دقیقه",
    type: "graphicCourse",
  },
  {
    id: 5,
    title: " آموزش ادوبی ایکس دی ",
    img: "./assets/images/products/product-5.png",
    prerequisite: "پیش نیاز ندارد",
    stars: 5,
    teacher: "مصطفی میر هادی",
    students: 150,
    price: 180_000,
    caption:
      "در پکیج آموزش ادوبی ایکس دی  بعد از آموزش کامل تمام ابزارهای مورد نیاز برای ساخت انواع رابط کاربری، در اختیار شما قرار گرفته است.",
    time: "11 ساعت و 30 دقیقه",
    type: "graphicCourse",
  },
  {
    id: 6,
    title: "آموزش این دیزاین ",
    img: "./assets/images/products/product-6.png",
    prerequisite: "پیش نیاز ندارد",
    stars: 5,
    teacher: "مصطفی میر هادی",
    students: 45,
    price: 260_000,
    caption:
      "در پکیج آموزش  این دیزاین بعد از آموزش کامل تمام ابزارهای مورد نیاز برای ساخت انواع جلد کتاب ، در اختیار شما قرار گرفته است.",
    time: "8 ساعت و 35 دقیقه",
    type: "graphicCourse",
  },

  {
    id: 7,
    title: "آموزش Html ",
    img: "./assets/images/products/product-1.png",
    prerequisite: "پیش نیاز ندارد",
    stars: 5,
    teacher: " محمد امین سعیدی",
    students: 990,
    price: 300_000,
    caption:
      "اولین قدم شروع طراحی وبسایت، آموزش HTML هست. HTML یه زبان نشانه گذاری هست که با کمک اون میتونی تگ هایی بنویسی تا سایت رو روی اون تگ ها پیاده کنی",
    time: "5 ساعت",
    type: "programmingCourses",
  },
  {
    id: 8,
    title: "آموزش Css ",
    img: "./assets/images/products/product-2.png",
    prerequisite: "Html",
    stars: 5,
    teacher: " محمد امین سعیدی",
    students: 889,
    price: 320_000,
    caption: `تا اینجای کار با HTML آشنا شدی و میتونی اسکلت یه سایتو پیاده کنی دمت گرم. یه قدم بزرگ برداشتی.
حالا وقتشه که با یادگیری CSS به اسکلتی که ساختی پوست و گوشت بدی تا تبدیل به یه موجود زیبا بشه. Css این کارو برات انجام میده.`,
    time: "10 ساعت و 36 دقیقه",
    type: "programmingCourses",
  },
  {
    id: 9,
    title: "آموزش جاوا اسکریپت ",
    img: "./assets/images/products/product-3.png",
    prerequisite: "Html & Css",
    stars: 5,
    teacher: " محمد امین سعیدی",
    students: 1200,
    price: 880_000,
    caption:
      "آموزش جاوا اسکریپت برای تمامی افرادی ک قصد ورود به زبان برنامه نویسی دارند مناسب می باشد . خصوصا برای علاقه مندان به حوزه فرانت همان طور که می دانید جاوا اسکریپت یکی از زبان های برنامه نویسی محبوب و پر طرفدار است که بازار کار فوق العاده ای دارد",
    time: "91 ساعت و 20 دقیقه",
    type: "programmingCourses",
  },
  {
    id: 10,
    title: "آموزش React.js",
    img: "./assets/images/products/product-4.png",
    prerequisite: "Html & Css & JavaScript",
    stars: 5,
    teacher: " محمد امین سعیدی",
    students: 600,
    price: 950_000,
    caption:
      "ری اکت گل سرسبد فرانت اند محسوب میشود،اگر دوره react را ببینید، بازار کار فرانت اند پیشنهادهای بسیار شگفت انگیزی برای شما خواهد داشت! در این دوره شما آموزش ری اکت رابر اساس تجربیات مدرس در دنیای واقعی و کار با شرکت های مختلف ایرانی یاد می گیرید",
    time: "45 ساعت و 30 دقیقه",
    type: "programmingCourses",
  },
  {
    id: 11,
    title: " آموزش Next.js ",
    img: "./assets/images/products/product-5.png",
    prerequisite: "React.js",
    stars: 5,
    teacher: " محمد امین سعیدی",
    students: 900,
    price: 880_000,
    caption:
      "نکست یه فریمورک مبتنی بر ری‌اکت هست که امروزه تو بازار کار یکی از مهم‌ترین تکنولوژی‌ها برای توسعه دهنده های ری‌اکت به حساب میاد. نکست رو میشه مکمل ری‌اکت دونست. یعنی هر چی که ری‌اکت داره نکست هم داره،",
    time: "35 ساعت و 30 دقیقه",
    type: "programmingCourses",
  },
  {
    id: 12,
    title: "آموزش تایپ اسکریپت ",
    img: "./assets/images/products/product-6.png",
    prerequisite: "JavaScript",
    stars: 5,
    teacher: "  محمد امین سعیدی",
    students: 45,
    price: 260_000,
    caption:
      "تایپ اسکریپت یه زبون برنامه نویسیه که توسط مایکروسافت ارائه شده و یسری قابلیت و فیچر های جدید رو با هدف افزایش پرفورمنس و کاهش احتمال خطا به جاوا اسکریپت اضافه کرده.",
    time: "15 ساعت و 15 دقیقه",
    type: "programmingCourses",
  },

  {
    id: 13,
    time: "3 اکتبر 2023",
    img: "./assets/images/radio/radio-1.jpg",
    title: "۱۰ راز مهم برای موفقیت در کسب‌و‌کار اینترنتی",
    caption:
      " موفقیت در کسب‌و‌کار اینترنتی نیازمند انجام کارهایی است که شاید برخلاف تصور سایرین باشد. سال..",
    audio: "./assets/music/music-1.mp3",
    type: "radio",
  },
  {
    id: 14,
    time: "3 جولای 2023",
    img: "./assets/images/radio/radio-2.jpg",
    title: "سئو کلاه سیاه و کلاه سفید چه تفاوتی دارند",
    caption:
      "  احتمالاً اگر کسب‌وکار اینترنتی داشته‌اید و با سئو سرکار داشته باشید لفظ سئو کلاه‌ سیاه..",
    audio: "./assets/music/music-2.mp3",
    type: "radio",
  },
  {
    id: 15,
    time: "3 می 2023",
    img: "./assets/images/radio/radio-3.jpg",
    title: "فقط روی یک کسب‌و‌کار متمرکز شوید",
    caption:
      " موفقیت در کسب‌و‌کار اینترنتی نیازمند انجام کارهایی است که شاید برخلاف تصور سایرین باشد. سال..",
    audio: "./assets/music/music-3.mp3",
    type: "radio",
  },

  {
    id: 16,
    title: "افزودن دکمه تماس در سایت وردپرسی",
    img: "./assets/images/articles/article-sm-1.jpg",
    imgBig: "../assets/images/articles/article-lg-1.jpg",
    caption:
      "امروز در خدمتتان هستیم با آموزش افزودن دکمه تماس در سایت وردپرسی . در این.",
    type: "articles",
  },
  {
    id: 17,
    title: "معرفی بهترین نرم افزارهای مدیریتی برای دورکاری",
    img: "./assets/images/articles/article-sm-2.jpg",
    imgBig: "../assets/images/articles/article-lg-2.jpg",
    caption:
      "	موفق شدن و رسیدن به خواسته‌ ها به خود شما بستگی دارد. من می­‌توانم میلیون­‌ها.",
    type: "articles",
  },
  {
    id: 18,
    title: "چگونه به یک مدیر کسب و کار تبدیل شویم؟",
    img: "./assets/images/articles/article-sm-3.jpg",
    imgBig: "../assets/images/articles/article-lg-3.jpg",
    caption:
      "	موفق شدن و رسیدن به خواسته‌ ها به خود شما بستگی دارد. من می­‌توانم میلیون­‌ها..",
    type: "articles",
  },
  {
    id: 19,
    title: "استراتژی اقیانوس آبی چیست؟",
    img: "./assets/images/articles/article-sm-4.jpg",
    imgBig: "../assets/images/articles/article-lg-4.jpg",
    caption:
      "	موفق شدن و رسیدن به خواسته‌ ها به خود شما بستگی دارد. من می­‌توانم میلیون­‌ها.",
    type: "articles",
  },
  {
    id: 20,
    title: "۹ ویژگی پنهان در کتابخانه چند رسانه ای وردپرس",
    img: "./assets/images/articles/article-sm-5.jpg",
    imgBig: "../assets/images/articles/article-lg-5.jpg",
    caption:
      "	امروز بیایید با ۹ ویژگی کتابخانه چندرسانه ای در وردپرس آشنا شوید تا بتوانید رسانه‌های را بهتر.",
    type: "articles",
  },
  {
    id: 21,
    title: "چگونه می توان رتبه الکسای سایت را بهبود داد؟",
    img: "./assets/images/articles/article-sm-6.jpg",
    imgBig: "../assets/images/articles/article-lg-6.jpg",
    caption:
      "یکی از روشهای موثر برای افزایش بازدید کننده و بهبود سئو، ارتقای رتبه الکسا است. در این نوشته.",
    type: "articles",
  },
  {
    id: 22,
    title: "چگونه موفق شویم؟ | چگونه در زندگی به هر چه می‌خواهیم برسیم؟",
    img: "./assets/images/articles/article-sm-7.jpg",
    imgBig: "../assets/images/articles/article-lg-7.jpg",
    caption:
      "موفق شدن و رسیدن به خواسته‌ ها به خود شما بستگی دارد. من می­‌توانم میلیون­‌ها...",
    type: "articles",
  },

  {
    id: 23,
    caption:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.",
    author: "محمد زینالی",
    role: "مدیر میم لرن",
    type: "comments",
  },
  {
    id: 24,
    caption:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.",
    author: " علی اقدم",
    role: "مدیر بتر استدیو",
    type: "comments",
  },
  {
    id: 25,
    caption:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.",
    author: "بیتا جیحون",
    role: "مدیر خوشحالی جات",
    type: "comments",
  },
  {
    id: 26,
    caption:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.",
    author: "مارک زاکربرگ،",
    role: "مدیر شرکت متا",
    type: "comments",
  },
  {
    id: 27,
    caption:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.",
    author: "پاول دوروف",
    role: "مدیرعامل پیام‌رسان تلگرام",
    type: "comments",
  },
];

export default allData;
