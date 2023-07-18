import {
  CoursesType,
  radioItemsType,
  ArticlesItemType,
  CommentsType,
} from "../types/coursesInterface";

type AllDataItem =
  | CoursesType
  | radioItemsType
  | ArticlesItemType
  | CommentsType;

const allData: AllDataItem[] = [
  {
    id: 1,
    title: "آموزش فتوشاپ ",
    img: "./assets/images/products/product-1.png",
    stars: 5,
    teacher: "مصطفی میر هادی",
    students: 257,
    price: 200_000,
    type: "graphicCourse",
  },
  {
    id: 2,
    title: "آموزش ایلوستریتور ",
    img: "./assets/images/products/product-2.png",
    stars: 5,
    teacher: "مصطفی میر هادی",
    students: 357,
    price: 320_000,
    type: "graphicCourse",
  },
  {
    id: 3,
    title: "آموزش پریمیر ",
    img: "./assets/images/products/product-3.png",
    stars: 5,
    teacher: "حسین رحیمی",
    students: 435,
    price: 380_000,
    type: "graphicCourse",
  },
  {
    id: 4,
    title: "آموزش  افتر افکت",
    img: "./assets/images/products/product-4.png",
    stars: 5,
    teacher: "حسین رحیمی",
    students: 600,
    price: 550_000,
    type: "graphicCourse",
  },
  {
    id: 5,
    title: "  ادوبی ایکس دی ",
    img: "./assets/images/products/product-5.png",
    stars: 5,
    teacher: "مصطفی میر هادی",
    students: 150,
    price: 180_000,
    type: "graphicCourse",
  },
  {
    id: 6,
    title: "آموزش این دیزاین ",
    img: "./assets/images/products/product-6.png",
    stars: 5,
    teacher: "مصطفی میر هادی",
    students: 45,
    price: 260_000,
    type: "graphicCourse",
  },

  {
    id: 7,
    title: "آموزش Html ",
    img: "./assets/images/products/product-1.png",
    stars: 5,
    teacher: " صاحب محمدی",
    students: 990,
    price: 300_000,
    type: "programmingCourses",
  },
  {
    id: 8,
    title: "آموزش Css ",
    img: "./assets/images/products/product-2.png",
    stars: 5,
    teacher: " صاحب محمدی",
    students: 889,
    price: 320_000,
    type: "programmingCourses",
  },
  {
    id: 9,
    title: "آموزش جاوااسکریپت ",
    img: "./assets/images/products/product-3.png",
    stars: 5,
    teacher: " محمد امین سعیدی",
    students: 1200,
    price: 880_000,
    type: "programmingCourses",
  },
  {
    id: 10,
    title: "آموزش React.js",
    img: "./assets/images/products/product-4.png",
    stars: 5,
    teacher: " صاحب محمدی",
    students: 600,
    price: 950_000,
    type: "programmingCourses",
  },
  {
    id: 11,
    title: " آموزش Next.js ",
    img: "./assets/images/products/product-5.png",
    stars: 5,
    teacher: "میلاد اعظمی",
    students: 900,
    price: 880_000,
    type: "programmingCourses",
  },
  {
    id: 12,
    title: "آموزش تایپ اسکریپت ",
    img: "./assets/images/products/product-6.png",
    stars: 5,
    teacher: "  محمد امین سعیدی",
    students: 45,
    price: 260_000,
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
    img: "./assets/images/articles/article-1.jpg",
    caption:
      "امروز در خدمتتان هستیم با آموزش افزودن دکمه تماس در سایت وردپرسی . در این.",
    type: "articles",
  },
  {
    id: 17,
    title: "معرفی بهترین نرم افزارهای مدیریتی برای دورکاری",
    img: "./assets/images/articles/article-2.jpg",
    caption:
      "	موفق شدن و رسیدن به خواسته‌ ها به خود شما بستگی دارد. من می­‌توانم میلیون­‌ها.",
    type: "articles",
  },
  {
    id: 18,
    title: "چگونه به یک مدیر کسب و کار تبدیل شویم؟",
    img: "./assets/images/articles/article-3.jpg",
    caption:
      "	موفق شدن و رسیدن به خواسته‌ ها به خود شما بستگی دارد. من می­‌توانم میلیون­‌ها..",
    type: "articles",
  },
  {
    id: 19,
    title: "استراتژی اقیانوس آبی چیست؟",
    img: "./assets/images/articles/article-4.jpg",
    caption:
      "	موفق شدن و رسیدن به خواسته‌ ها به خود شما بستگی دارد. من می­‌توانم میلیون­‌ها.",
    type: "articles",
  },
  {
    id: 20,
    title: "۹ ویژگی پنهان در کتابخانه چند رسانه ای وردپرس",
    img: "./assets/images/articles/article-5.jpg",
    caption:
      "	امروز بیایید با ۹ ویژگی کتابخانه چندرسانه ای در وردپرس آشنا شوید تا بتوانید رسانه‌های را بهتر.",
    type: "articles",
  },
  {
    id: 21,
    title: "چگونه می توان رتبه الکسای سایت را بهبود داد؟",
    img: "./assets/images/articles/article-6.jpg",
    caption:
      "یکی از روشهای موثر برای افزایش بازدید کننده و بهبود سئو، ارتقای رتبه الکسا است. در این نوشته.",
    type: "articles",
  },

  {
    id: 22,
    caption:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.",
    author: "محمد زینالی",
    role: "مدیر میم لرن",
    type: "comments",
  },
  {
    id: 23,
    caption:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.",
    author: " علی اقدم",
    role: "مدیر بتر استدیو",
    type: "comments",
  },
  {
    id: 24,
    caption:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.",
    author: "بیتا جیحون",
    role: "مدیر خوشحالی جات",
    type: "comments",
  },
  {
    id: 25,
    caption:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.",
    author: "مارک زاکربرگ،",
    role: "مدیر شرکت متا",
    type: "comments",
  },
  {
    id: 25,
    caption:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.",
    author: "پاول دوروف",
    role: "مدیرعامل پیام‌رسان تلگرام",
    type: "comments",
  },
];

export default allData;
