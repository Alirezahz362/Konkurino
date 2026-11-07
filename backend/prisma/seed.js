
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const seedData = [
  {
    "title": "علوم تجربی",
    "slug": "experimental",
    "icon": "fa-dna",
    "subjects": [
      {
        "title": "زیست‌شناسی",
        "icon": "fa-leaf",
        "courses": [
          {
            "title": "دوره جامع زیست‌شناسی کنکور تجربی (۰ تا ۱۰۰)",
            "content": "آموزش کامل و مفهومی زیست دهم، یازدهم و دوازدهم همراه با تحلیل خط به خط کتاب درسی و بررسی شکاف‌های مفهومی.",
            "price": "680000",
            "image": "/images/courses/bio-1.jpg",
            "isFeatured": true,
            "badge": "ویژه کنکور",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "کارگاه نکته و تست زیست‌شناسی دوازدهم",
            "content": "بررسی تست‌های ترکیبی، تحلیل آزمون‌های آزمایشی و مرور سریع نکات دام‌دار زیست دوازدهم.",
            "price": "420000",
            "image": "/images/courses/bio-2.jpg",
            "isFeatured": false,
            "badge": "نکته و تست",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "جمع‌بندی طلایی زیست‌شناسی کنکور (تکنیک‌های تست‌زنی)",
            "content": "جمع‌بندی ۳ سال زیست در ۶۰ ساعت، روش حل تست‌های ترکیبی ژنتیک و گیاهی در کمترین زمان ممکن.",
            "price": "490000",
            "image": "/images/courses/bio-3.jpg",
            "isFeatured": true,
            "badge": "جمع‌بندی",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "شیمی",
        "icon": "fa-flask",
        "courses": [
          {
            "title": "دوره جامع شیمی کنکور سراسری",
            "content": "آموزش کامل استوکیومتری، حفظیات، فرمول‌های کنکوری و مفاهیم اصلی شیمی پایه و دوازدهم.",
            "price": "650000",
            "image": "/images/courses/chem-1.jpg",
            "isFeatured": true,
            "badge": "ویژه کنکور",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "پکیج تکنیک‌های محاسبات سریع در مسائل شیمی",
            "content": "آموزش میانبرهای ریاضی و محاسباتی برای حل کسرها و مسائل پیچیده استوکیومتری بدون ماشین حساب.",
            "price": "350000",
            "image": "/images/courses/chem-2.jpg",
            "isFeatured": false,
            "badge": "تکنیک سریع",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "دوره نکته و تست شیمی پایه (دهم و یازدهم)",
            "content": "تحلیل تست‌های سطح سخت و چالش‌برانگیز شیمی ۱۰ و ۱۱ برای تسلط ۱۰۰ درصدی.",
            "price": "450000",
            "image": "/images/courses/chem-3.jpg",
            "isFeatured": false,
            "badge": "نکته و تست",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "فیزیک تجربی",
        "icon": "fa-atom",
        "courses": [
          {
            "title": "فیزیک جامع کنکور تجربی",
            "content": "تدریس کامل مفاهیم فیزیک دهم، یازدهم و دوازدهم تجربی با روش‌های تست‌زنی سریع و بدون فرمول اضافی.",
            "price": "590000",
            "image": "/images/courses/phys-exp-1.jpg",
            "isFeatured": true,
            "badge": "ویژه کنکور",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "دوره حل تیپ‌تست‌های فیزیک ۱۲ تجربی",
            "content": "دسته‌بندی و حل تمام تیپ‌های احتمالی تست‌های نوسان، موج، اتمی و هسته‌ای.",
            "price": "390000",
            "image": "/images/courses/phys-exp-2.jpg",
            "isFeatured": false,
            "badge": "حل تست",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "همایش جمع‌بندی فیزیک تجربی کنکور",
            "content": "مرور فشرده و جمع‌بندی تمام فصول فیزیک تجربی در ۴ روز به همراه بانک تست پیش‌بینی کنکور.",
            "price": "440000",
            "image": "/images/courses/phys-exp-3.jpg",
            "isFeatured": true,
            "badge": "جمع‌بندی",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "ریاضی تجربی",
        "icon": "fa-calculator",
        "courses": [
          {
            "title": "ریاضی جامع کنکور تجربی (صفر تا صد)",
            "content": "آموزش کامل مباحث تابع، حد، مشتق، مثلثات، آمار و احتمال برای داوطلبان رشته تجربی.",
            "price": "620000",
            "image": "/images/courses/math-exp-1.jpg",
            "isFeatured": true,
            "badge": "پرطرفدار",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "دوره تخصصی مثلثات و تابع کنکور تجربی",
            "content": "تسلط ۱۰۰٪ بر مهم‌ترین و تست‌خیزترین مباحث ریاضی تجربی با تکنیک‌های رسم نمودار و تست‌زنی سریع.",
            "price": "380000",
            "image": "/images/courses/math-exp-2.jpg",
            "isFeatured": false,
            "badge": "تخصصی",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "بانک تست و رفع اشکال ریاضی تجربی",
            "content": "تحلیل ۵۰۰ تست گزینش‌شده از آزمون‌های گاج، قلم‌چی و سنجش با پاسخ‌های ویدئویی.",
            "price": "410000",
            "image": "/images/courses/math-exp-3.jpg",
            "isFeatured": false,
            "badge": "بانک تست",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "زمین‌شناسی",
        "icon": "fa-globe-americas",
        "courses": [
          {
            "title": "دوره کامل زمین‌شناسی کنکور تجربی",
            "content": "آموزش کل کتاب زمین‌شناسی یازدهم به همراه نکات جدول‌ها، تصاویر و تست‌های کنکورهای اخیر.",
            "price": "290000",
            "image": "/images/courses/geo-1.jpg",
            "isFeatured": false,
            "badge": "دوره جامع",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "تکنیک‌های ۱۰۰ زدن زمین‌شناسی کنکور",
            "content": "کپسول جمع‌بندی زمین‌شناسی برای کسب درصد بالا در زیرگروه‌های داروسازی و زمین‌شناسی.",
            "price": "220000",
            "image": "/images/courses/geo-2.jpg",
            "isFeatured": false,
            "badge": "کپسول فشرده",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "جمع‌بندی و تست زمین‌شناسی کنکور",
            "content": "مرور سریع در ۵ جلسه و حل تست‌های مفهومی فصل به فصل.",
            "price": "250000",
            "image": "/images/courses/geo-3.jpg",
            "isFeatured": false,
            "badge": "جمع‌بندی",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "ادبیات و زبان فارسی (عمومی)",
        "icon": "fa-book-open",
        "courses": [
          {
            "title": "ادبیات فارسی عمومی جامع کنکور",
            "content": "آموزش مبحثی آرایه‌های ادبی، قرابت معنایی، املا، لغت و دستور زبان فارسی برای امتحان نهایی و کنکور.",
            "price": "480000",
            "image": "/images/courses/lit-gen-1.jpg",
            "isFeatured": true,
            "badge": "جامع نهایی",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "دوره آرایه‌های ادبی و قرابت معنایی",
            "content": "تکنیک‌های تشخیص سریع آرایه‌ها و ابیات قرابت در تست‌های فارسی.",
            "price": "330000",
            "image": "/images/courses/lit-gen-2.jpg",
            "isFeatured": false,
            "badge": "مبحثی",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "دستور زبان فارسی کنکور (صفر تا صد)",
            "content": "آموزش روان نقش کلمات، گروه‌های اسمی، ساختمان واژه و جمله‌شناسی.",
            "price": "310000",
            "image": "/images/courses/lit-gen-3.jpg",
            "isFeatured": false,
            "badge": "آموزشی",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "عربی (عمومی)",
        "icon": "fa-language",
        "courses": [
          {
            "title": "عربی عمومی جامع (ترجمه و قواعد)",
            "content": "آموزش کامل ترجمه، تعریب، قواعد، تحلیل صرفی و محل اعرابی برای امتحانات نهایی و کنکور.",
            "price": "460000",
            "image": "/images/courses/arabic-gen-1.jpg",
            "isFeatured": true,
            "badge": "دوره جامع",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "تکنیک‌های ترجمه و درک مطلب عربی",
            "content": "آموزش میانبرهای ترجمه بدون نیاز به حفظ لغات زیاد و روش پاسخ به سوالات متن.",
            "price": "290000",
            "image": "/images/courses/arabic-gen-2.jpg",
            "isFeatured": false,
            "badge": "ترجمه سریع",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "جمع‌بندی قواعد عربی ۱۰، ۱۱ و ۱۲",
            "content": "خلاصه مباحث مهم قواعد عربی به همراه حل ۲۰۰ تست استاندارد کنکوری.",
            "price": "320000",
            "image": "/images/courses/arabic-gen-3.jpg",
            "isFeatured": false,
            "badge": "جمع‌بندی",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "دین و زندگی (عمومی)",
        "icon": "fa-quran",
        "courses": [
          {
            "title": "دین و زندگی جامع (ارتباط آیات و روایات)",
            "content": "آموزش خط به خط کتاب‌های دینی دهم، یازدهم و دوازدهم همراه با تحلیل پیام آیات و ارتباط مفهوم احادیث.",
            "price": "430000",
            "image": "/images/courses/dini-gen-1.jpg",
            "isFeatured": false,
            "badge": "ویژه نهایی",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "کپسول حفظ و تحلیل آیات دینی کنکور",
            "content": "جدول‌بندی کامل کل آیات دین و زندگی با کلیدواژه‌های تستی و امتحانی.",
            "price": "270000",
            "image": "/images/courses/dini-gen-2.jpg",
            "isFeatured": false,
            "badge": "تحلیل آیات",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "جمع‌بندی دین و زندگی ۱۲ام ویژه امتحان نهایی",
            "content": "پوشش ۱۰۰ درصد سوالات احتمالی امتحان نهایی دینی پایه دوازدهم.",
            "price": "290000",
            "image": "/images/courses/dini-gen-3.jpg",
            "isFeatured": false,
            "badge": "ویژه نهایی",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "زبان انگلیسی (عمومی)",
        "icon": "fa-globe",
        "courses": [
          {
            "title": "زبان انگلیسی جامع (گرامر، ریدینگ و واژگان)",
            "content": "آموزش کامل لغات ۱۰ و ۱۱ و ۱۲، گرامر مبحثی، و تکنیک‌های درک مطلب (Reading & Cloze Test).",
            "price": "470000",
            "image": "/images/courses/eng-gen-1.jpg",
            "isFeatured": true,
            "badge": "جامع",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "کارگاه ریدینگ و کلوز تست انگلیسی",
            "content": "آموزش روش‌های متدولوژی پاسخگویی به متن‌های ریدینگ کنکور بدون نیاز به دانستن معنی تمام کلمات.",
            "price": "310000",
            "image": "/images/courses/eng-gen-2.jpg",
            "isFeatured": false,
            "badge": "کارگاهی",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "گرامر صفر تا صد زبان انگلیسی",
            "content": "آموزش تصویری تمام زمان‌ها، جملات موصولی، مجهول و شرطی‌ها به زبان ساده.",
            "price": "280000",
            "image": "/images/courses/eng-gen-3.jpg",
            "isFeatured": false,
            "badge": "گرامر فشرده",
            "buttonText": "مشاهده دوره"
          }
        ]
      }
    ]
  },
  {
    "title": "علوم ریاضی و فیزیک",
    "slug": "math-physics",
    "icon": "fa-calculator",
    "subjects": [
      {
        "title": "حسابان و ریاضیات پایه",
        "icon": "fa-square-root-variable",
        "courses": [
          {
            "title": "دوره جامع حسابان ۱ و ۲ و ریاضی ۱۰",
            "content": "تدریس ریز به ریز مفاهیم تابع، حد، پیوستگی، مشتق، کاربرد مشتق و معادلات درجه دوم برای کنکور ریاضی.",
            "price": "690000",
            "image": "/images/courses/hesaban-1.jpg",
            "isFeatured": true,
            "badge": "ویژه کنکور ریاضی",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "دوره مشتق و کاربرد مشتق حسابان ۲",
            "content": "تسلط بر سخت‌ترین فصل حسابان دوازدهم به همراه حل تیپ‌تست‌های کنکور سراسری.",
            "price": "390000",
            "image": "/images/courses/hesaban-2.jpg",
            "isFeatured": false,
            "badge": "تخصصی",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "جمع‌بندی حسابان کنکور ریاضی (۱۰۰ تست پیش‌بینی)",
            "content": "جمع‌بندی فشرده حسابان با بررسی ۱۰۰ تست مشابه کنکور سراسری.",
            "price": "430000",
            "image": "/images/courses/hesaban-3.jpg",
            "isFeatured": true,
            "badge": "جمع‌بندی",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "هندسه (۱، ۲ و ۳)",
        "icon": "fa-shapes",
        "courses": [
          {
            "title": "هندسه جامع کنکور ریاضی (دهم، یازدهم و دوازدهم)",
            "content": "آموزش روش‌های رسم شیک، قضایای اثباتی، تداخل، مقاطع مخروطی و ماتریس و بردار.",
            "price": "540000",
            "image": "/images/courses/geometry-1.jpg",
            "isFeatured": false,
            "badge": "دوره جامع",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "هندسه ۳ دوازدهم ویژه کنکور و نهایی",
            "content": "تدریس ماتریس، مقاطع مخروطی و بردارها به روش ساده و تصویری.",
            "price": "360000",
            "image": "/images/courses/geometry-2.jpg",
            "isFeatured": false,
            "badge": "دوازدهم",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "تکنیک‌های اثبات و تست‌زنی سریع هندسه پایه",
            "content": "حل چالش‌های هندسه دهم و یازدهم (تشابه، دایره و قضیه سینوس‌ها و کُسینوس‌ها).",
            "price": "320000",
            "image": "/images/courses/geometry-3.jpg",
            "isFeatured": false,
            "badge": "تکنیک سریع",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "گسسته و آمار و احتمال",
        "icon": "fa-chart-pie",
        "courses": [
          {
            "title": "گسسته و آمار و احتمال جامع کنکور",
            "content": "آموزش نظریه اعداد، گراف، ترکیبیات، احتمال و نظریه مجموعه‌ها با روش‌های تستی میانبر.",
            "price": "560000",
            "image": "/images/courses/discrete-1.jpg",
            "isFeatured": true,
            "badge": "جامع",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "دوره تخصصی ترکیبیات و احتمال کنکور",
            "content": "حل ۵۰ مدل مسئله پیچیده جایگشت، ترکیب و احتمال شرطی با متدهای مدرن.",
            "price": "340000",
            "image": "/images/courses/discrete-2.jpg",
            "isFeatured": false,
            "badge": "تخصصی",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "نظریه اعداد و گراف گسسته دوازدهم",
            "content": "آموزش هم‌نهشتی، همنهشت، گراف و احاطه‌گری برای امتحانات نهایی و کنکور.",
            "price": "350000",
            "image": "/images/courses/discrete-3.jpg",
            "isFeatured": false,
            "badge": "امتحان نهایی",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "فیزیک ریاضی",
        "icon": "fa-atom",
        "courses": [
          {
            "title": "فیزیک جامع کنکور ریاضی (صفر تا صد)",
            "content": "تدریس کامل تمامی فصول فیزیک دهم، یازدهم و دوازدهم ریاضی شامل مباحث ترمودینامیک و سقوط آزاد.",
            "price": "670000",
            "image": "/images/courses/phys-math-1.jpg",
            "isFeatured": true,
            "badge": "ویژه کنکور ریاضی",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "دوره تخصصی ترمودینامیک و مکانیک فیزیک ریاضی",
            "content": "تسلط بر فرآیندهای ترمودینامیکی، قوانین گازها و حرکت شناسی دو بعدی.",
            "price": "410000",
            "image": "/images/courses/phys-math-2.jpg",
            "isFeatured": false,
            "badge": "تخصصی",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "نکته و تست فیزیک ۳ دوازدهم ریاضی",
            "content": "بررسی ۲۰۰ تست المپیادی و تست‌های کنکور سراسری رشته ریاضی.",
            "price": "430000",
            "image": "/images/courses/phys-math-3.jpg",
            "isFeatured": false,
            "badge": "نکته و تست",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "شیمی (ریاضی)",
        "icon": "fa-flask",
        "courses": [
          {
            "title": "شیمی جامع کنکور ریاضی و تجربی",
            "content": "آموزش کامل ساختار اتم، جدول تناوبی، ترکیبات یونی و کووالانسی، ترموشیمی و اسیدها و بازها.",
            "price": "630000",
            "image": "/images/courses/chem-math-1.jpg",
            "isFeatured": true,
            "badge": "دوره جامع",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "کارگاه حل مسائل شیمی کنکور ریاضی",
            "content": "تمرکز بر حل سریع مسائل استوکیومتری، سینتیک و تعادل‌های شیمیایی.",
            "price": "380000",
            "image": "/images/courses/chem-math-2.jpg",
            "isFeatured": false,
            "badge": "کارگاه مسئله",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "شیمی دوازدهم ویژه امتحانات نهایی و کنکور",
            "content": "آموزش واکنشبلی پاک‌کننده‌ها، سلول‌های گالوانی و الکترولیتی و موازنه به روش اکسایش-کاهش.",
            "price": "360000",
            "image": "/images/courses/chem-math-3.jpg",
            "isFeatured": false,
            "badge": "نهایی و کنکور",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "ادبیات فارسی (ریاضی)",
        "icon": "fa-book-open",
        "courses": [
          {
            "title": "ادبیات فارسی تخصصی کنکور ریاضی",
            "content": "آموزش کامل مبحثی آرایه، قرابت، لغت و دستور برای داوطلبان کنکور ریاضی.",
            "price": "450000",
            "image": "/images/courses/lit-m-1.jpg",
            "isFeatured": false,
            "badge": "جامع",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "دوره آرایه‌های ادبی و لغت فارسی",
            "content": "آموزش تکنیک‌های حفظ سریع لغات دشوار و تشخیص ایهام و تناسب در ابیات.",
            "price": "290000",
            "image": "/images/courses/lit-m-2.jpg",
            "isFeatured": false,
            "badge": "مبحثی",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "جمع‌بندی فارسی دوازدهم ویژه امتحان نهایی",
            "content": "مرور خط به خط تمام دروس فارسی ۳ و پیش‌بینی سوالات امتحان نهایی.",
            "price": "310000",
            "image": "/images/courses/lit-m-3.jpg",
            "isFeatured": false,
            "badge": "امتحان نهایی",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "عربی (ریاضی)",
        "icon": "fa-language",
        "courses": [
          {
            "title": "عربی کنکور ریاضی (صفر تا صد)",
            "content": "تدریس کامل ترجمه و قواعد عربی ۱۰، ۱۱ و ۱۲ به سبک تستی سریع.",
            "price": "420000",
            "image": "/images/courses/ar-m-1.jpg",
            "isFeatured": false,
            "badge": "جامع",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "پکیج فرمول‌های طلایی قواعد عربی",
            "content": "خلاصه‌سازی تمام قواعد عربی کنکور در قالب ۱۰ فرمول کلیدی و تست‌زنی.",
            "price": "280000",
            "image": "/images/courses/ar-m-2.jpg",
            "isFeatured": false,
            "badge": "فرمول طلایی",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "جمع‌بندی و رفع اشکال عربی ۳",
            "content": "آمادگی کامل برای امتحان نهایی خرداد و سوالات کنکور.",
            "price": "290000",
            "image": "/images/courses/ar-m-3.jpg",
            "isFeatured": false,
            "badge": "جمع‌بندی",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "دین و زندگی (ریاضی)",
        "icon": "fa-quran",
        "courses": [
          {
            "title": "دین و زندگی جامع کنکور ریاضی",
            "content": "تحلیل عمیق متن دروس و آیات کتاب‌های دینی پایه تا دوازدهم.",
            "price": "410000",
            "image": "/images/courses/dini-m-1.jpg",
            "isFeatured": false,
            "badge": "جامع",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "تکنیک‌های ۲۰ گرفتن در دینی دوازدهم",
            "content": "حل تمام نمونه سوالات خرداد و شهریور سال‌های گذشته با پاسخ تشریحی کامل.",
            "price": "260000",
            "image": "/images/courses/dini-m-2.jpg",
            "isFeatured": false,
            "badge": "ویژه نهایی",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "کارگاه رمزگردانی آیات دین و زندگی",
            "content": "رمزگذاری ارتباط بین آیات و پیام‌های کلیدی دروس برای یادگیری سریع.",
            "price": "270000",
            "image": "/images/courses/dini-m-3.jpg",
            "isFeatured": false,
            "badge": "رمزگردانی",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "زبان انگلیسی (ریاضی)",
        "icon": "fa-globe",
        "courses": [
          {
            "title": "زبان انگلیسی کنکور ریاضی (جامع)",
            "content": "پوشش ۱۰۰ درصد واژگان، گرامر، کلوز تست و ریدینگ کنکور سراسری.",
            "price": "440000",
            "image": "/images/courses/eng-m-1.jpg",
            "isFeatured": false,
            "badge": "جامع",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "دوره واژگان طلایی زبان انگلیسی ۱۰ تا ۱۲",
            "content": "آموزش ۵۰۰ واژه پرکاربرد و متضادها و مترادف‌های کنکوری به همراه جعبه لایتنر.",
            "price": "290000",
            "image": "/images/courses/eng-m-2.jpg",
            "isFeatured": false,
            "badge": "واژگان",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "جمع‌بندی و تکنیک‌های تست انگلیسی",
            "content": "حل ۱۰۰ تست برتر سال‌های اخبر کنکور ریاضی با تحلیلی کامل.",
            "price": "310000",
            "image": "/images/courses/eng-m-3.jpg",
            "isFeatured": false,
            "badge": "جمع‌بندی",
            "buttonText": "مشاهده دوره"
          }
        ]
      }
    ]
  },
  {
    "title": "علوم انسانی",
    "slug": "humanities",
    "icon": "fa-book",
    "subjects": [
      {
        "title": "علوم و فنون ادبی (ادبیات اختصاصی)",
        "icon": "fa-feather",
        "courses": [
          {
            "title": "علوم و فنون ادبی جامع کنکور انسانی",
            "content": "آموزش کامل عروض و قافیه، آرایه‌های ادبی، تاریخ ادبیات و سبک‌شناسی دهم، یازدهم و دوازدهم.",
            "price": "610000",
            "image": "/images/courses/fonoun-1.jpg",
            "isFeatured": true,
            "badge": "ویژه کنکور انسانی",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "دوره تخصصی عروض و تقطیع هجایی",
            "content": "آموزش تقطیع به گوش و تشخیص سریع اوزان عروضی بدون نیاز به نوشتن هجاها.",
            "price": "370000",
            "image": "/images/courses/fonoun-2.jpg",
            "isFeatured": false,
            "badge": "تخصصی عروض",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "جمع‌بندی سبک‌شناسی و تاریخ ادبیات انسانی",
            "content": "جدول‌بندی تمامی سبک‌های ترکی، خراسان، عراقی و بازگشت ادبی همراه با تست‌زنی.",
            "price": "340000",
            "image": "/images/courses/fonoun-3.jpg",
            "isFeatured": false,
            "badge": "جمع‌بندی",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "ریاضی و آمار انسانی",
        "icon": "fa-square-root-variable",
        "courses": [
          {
            "title": "ریاضی و آمار جامع کنکور انسانی (۰ تا ۱۰۰)",
            "content": "آموزش ساده و قدم‌به‌قدم معادلات، کار با داده‌ها، آمار، احتمال و منطق ریاضی بدون نیاز به پایه قوی.",
            "price": "550000",
            "image": "/images/courses/math-hum-1.jpg",
            "isFeatured": true,
            "badge": "پرطرفدار",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "تکنیک‌های کسب درصد بالا در ریاضی انسانی",
            "content": "آموزش میانبرهای حل تست آمار و احتمال و الگوریتم‌های سوالات ریاضی ۱ و ۲ و ۳ انسانی.",
            "price": "350000",
            "image": "/images/courses/math-hum-2.jpg",
            "isFeatured": false,
            "badge": "تکنیک سریع",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "نکته و تست ریاضی و آمار دوازدهم انسانی",
            "content": "حل تمام سوالات احتمالی امتحان نهایی و تست‌های کنکور سراسری.",
            "price": "330000",
            "image": "/images/courses/math-hum-3.jpg",
            "isFeatured": false,
            "badge": "نکته و تست",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "عربی اختصاصی انسانی",
        "icon": "fa-language",
        "courses": [
          {
            "title": "عربی تخصصی جامع رشته انسانی",
            "content": "تدریس کامل ترجمه، تحلیل صرفی، اعراب، قواعد تخصصی (معتل، تحلیل نصوص، باب‌ها) ۱۰، ۱۱ و ۱۲.",
            "price": "580000",
            "image": "/images/courses/arabic-hum-1.jpg",
            "isFeatured": true,
            "badge": "ویژه انسانی",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "دوره قواعد اعراب و تحلیل صرفی عربی انسانی",
            "content": "آموزش گام‌به‌گام تحلیل صرفی اسم و فعل و ترکیب عبارات دشوار کنکوری.",
            "price": "360000",
            "image": "/images/courses/arabic-hum-2.jpg",
            "isFeatured": false,
            "badge": "تخصصی قواعد",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "جمع‌بندی عربی ۳ انسانی ویژه امتحان نهایی",
            "content": "مرور فشرده دروس با محوریت سوالات نهایی خرداد ماه.",
            "price": "320000",
            "image": "/images/courses/arabic-hum-3.jpg",
            "isFeatured": false,
            "badge": "امتحان نهایی",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "تاریخ و جغرافیا",
        "icon": "fa-atlas",
        "courses": [
          {
            "title": "تاریخ و جغرافیا جامع کنکور انسانی",
            "content": "آموزش نموداری و خلاصه‌نویسی شده کتاب‌های تاریخ و جغرافیای دهم، یازدهم و دوازدهم.",
            "price": "490000",
            "image": "/images/courses/hist-geo-1.jpg",
            "isFeatured": false,
            "badge": "جامع نموداری",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "جدول گاه‌شماری و نکات کلیدی تاریخ کنکور",
            "content": "دسته‌بندی زمان‌بندی سلسله‌ها، حوادث مهم تاریخی و شخصیت‌های تاریخ ۱، ۲ و ۳.",
            "price": "290000",
            "image": "/images/courses/hist-geo-2.jpg",
            "isFeatured": false,
            "badge": "جدول فشرده",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "نقشه‌خوانی و اصطلاحات کلیدی جغرافیا کنکور",
            "content": "آموزش نقشه‌ها، نمودارهای سنجش از دور و GIS به همراه تست‌های برگزیده.",
            "price": "310000",
            "image": "/images/courses/hist-geo-3.jpg",
            "isFeatured": false,
            "badge": "نقشه‌خوانی",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "جامعه‌شناسی (۱، ۲ و ۳)",
        "icon": "fa-users",
        "courses": [
          {
            "title": "جامعه‌شناسی جامع کنکور انسانی",
            "content": "مفهوم‌سازی عمیق مفاهیم جهان اجتماعی، فرهنگ، هویت و نظام‌های جهانی دهم تا دوازدهم.",
            "price": "480000",
            "image": "/images/courses/soc-1.jpg",
            "isFeatured": true,
            "badge": "دوره جامع",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "تکنیک‌های پاسخ به تست‌های مفهومی جامعه‌شناسی",
            "content": "روش تحلیل سوالات ارتباطی بین مفاهیم مختلف جامعه‌شناسی ۱۰، ۱۱ و ۱۲.",
            "price": "310000",
            "image": "/images/courses/soc-2.jpg",
            "isFeatured": false,
            "badge": "تکنیک مفهومی",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "جمع‌بندی جامعه‌شناسی دوازدهم (ویژه امتحانات)",
            "content": "خلاصه نکات امتحانی و حل سوالات خرداد سال‌های گذشته.",
            "price": "290000",
            "image": "/images/courses/soc-3.jpg",
            "isFeatured": false,
            "badge": "امتحان نهایی",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "روان‌شناسی",
        "icon": "fa-brain",
        "courses": [
          {
            "title": "روان‌شناسی تک‌کتاب کنکور انسانی (۱۰۰ زدن)",
            "content": "تدریس کامل ۸ فصل روان‌شناسی یازدهم به همراه تحلیل کارکرد حافظه، تفکر، تصمیم‌گیری و سلامت روان.",
            "price": "390000",
            "image": "/images/courses/psych-1.jpg",
            "isFeatured": true,
            "badge": "۱۰۰ درصدی",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "کپسول فشرده روان‌شناسی کنکور",
            "content": "مرور سریع کل کتاب روان‌شناسی در ۶ ساعت به همراه حل ۱۰۰ تست استاندارد.",
            "price": "260000",
            "image": "/images/courses/psych-2.jpg",
            "isFeatured": false,
            "badge": "کپسول فشرده",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "بانک تست و مثال‌های ملموس روان‌شناسی",
            "content": "تثبیت مفاهیم روان‌شناسی با مثال‌های روزمره و کاربردی جهت پاسخ به تست‌های سناریومحور.",
            "price": "280000",
            "image": "/images/courses/psych-3.jpg",
            "isFeatured": false,
            "badge": "بانک تست",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "فلسفه و منطق",
        "icon": "fa-lightbulb",
        "courses": [
          {
            "title": "فلسفه و منطق جامع کنکور انسانی",
            "content": "آموزش دقیق منطق دهم و فلسفه یازدهم و دوازدهم، مغالطات، قضایا و مکاتب فلسفی.",
            "price": "630000",
            "image": "/images/courses/phil-1.jpg",
            "isFeatured": true,
            "badge": "ویژه کنکور",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "دوره تخصصی مغالطات و قضایای منطق دهم",
            "content": "تسلط بر ریشه‌ای‌ترین مبحث منطق کنکور با رمزگذاری و حل تست‌های پر دام.",
            "price": "360000",
            "image": "/images/courses/phil-2.jpg",
            "isFeatured": false,
            "badge": "تخصصی منطق",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "نکته و تست فلسفه ۲ دوازدهم",
            "content": "بررسی آرای فلاسفه بزرگ (افلاطون، ارسطو، ابن‌سینا و ملاصدرا) در تست‌های کنکوری.",
            "price": "380000",
            "image": "/images/courses/phil-3.jpg",
            "isFeatured": false,
            "badge": "نکته و تست",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "اقتصاد",
        "icon": "fa-coins",
        "courses": [
          {
            "title": "اقتصاد جامع کنکور انسانی (مسائل و متن)",
            "content": "آموزش کامل مسائل مالیات، تورم، سود و زیان، دهک‌ها و حفظیات کتاب اقتصاد دهم.",
            "price": "420000",
            "image": "/images/courses/econ-1.jpg",
            "isFeatured": true,
            "badge": "۱۰۰ درصدی",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "کارگاه حل مسائل فرمولی اقتصاد",
            "content": "آموزش روش‌های محاسباتی سریع برای حل سخت‌ترین مسائل اقتصاد بدون اشتباه محاسباتی.",
            "price": "290000",
            "image": "/images/courses/econ-2.jpg",
            "isFeatured": false,
            "badge": "کارگاه مسئله",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "جمع‌بندی متن و حفظیات اقتصاد در ۳ جلسه",
            "content": "مرور خط به خط متن کتاب و تثبیت اصطلاحات اقتصادی.",
            "price": "240000",
            "image": "/images/courses/econ-3.jpg",
            "isFeatured": false,
            "badge": "جمع‌بندی",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "ادبیات عمومی (انسانی)",
        "icon": "fa-book-open",
        "courses": [
          {
            "title": "ادبیات فارسی عمومی انسانی",
            "content": "پوشش امتحانات نهایی و ابیات قرابت معنایی فارسی ۱۰، ۱۱ و ۱۲.",
            "price": "430000",
            "image": "/images/courses/lit-h-1.jpg",
            "isFeatured": false,
            "badge": "جامع",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "دوره واژگان و املا فارسی عمومی",
            "content": "تسلط بر لغات ستاره‌دار انتخابی و گروه کلمات متشابه املا.",
            "price": "260000",
            "image": "/images/courses/lit-h-2.jpg",
            "isFeatured": false,
            "badge": "واژگان و املا",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "آمادگی امتحان نهایی فارسی ۳ انسانی",
            "content": "پاسخ تشریحی به نمونه سوالات استاندارد کشوری خردادماه.",
            "price": "280000",
            "image": "/images/courses/lit-h-3.jpg",
            "isFeatured": false,
            "badge": "امتحان نهایی",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "دین و زندگی (انسانی)",
        "icon": "fa-quran",
        "courses": [
          {
            "title": "دین و زندگی تخصصی انسانی",
            "content": "پوشش کامل دروس دینی اختصاصی انسانی با تحلیل ریز نکات آیات.",
            "price": "440000",
            "image": "/images/courses/dini-h-1.jpg",
            "isFeatured": false,
            "badge": "جامع",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "جمع‌بندی آیات دینی ۳ انسانی",
            "content": "تحلیل خط به خط آیات و ارتباط منطقی دروس دینی دوازدهم.",
            "price": "270000",
            "image": "/images/courses/dini-h-2.jpg",
            "isFeatured": false,
            "badge": "تحلیل آیات",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "دوره ۲۰ نهایی دینی انسانی",
            "content": "پیش‌بینی سوالات امتحانات نهایی کشوری با روش کلیدواژه‌ای.",
            "price": "290000",
            "image": "/images/courses/dini-h-3.jpg",
            "isFeatured": false,
            "badge": "ویژه نهایی",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "زبان انگلیسی (انسانی)",
        "icon": "fa-globe",
        "courses": [
          {
            "title": "زبان انگلیسی عمومی رشته انسانی",
            "content": "آموزش کامل گرامر، لغات و کلوز تست با زبان ساده.",
            "price": "430000",
            "image": "/images/courses/eng-h-1.jpg",
            "isFeatured": false,
            "badge": "جامع",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "کپسول لغات انگلیسی کنکور انسانی",
            "content": "آموزش لغات درس به درس زبان ۱۰، ۱۱ و ۱۲ به همراه تست.",
            "price": "270000",
            "image": "/images/courses/eng-h-2.jpg",
            "isFeatured": false,
            "badge": "لغات فشرده",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "دوره گرامر تستی انگلیسی انسانی",
            "content": "آموزش میانبرهای سوالات گرامر در کنکور و امتحان نهایی.",
            "price": "280000",
            "image": "/images/courses/eng-h-3.jpg",
            "isFeatured": false,
            "badge": "گرامر تستی",
            "buttonText": "مشاهده دوره"
          }
        ]
      }
    ]
  },
  {
    "title": "هنر",
    "slug": "art",
    "icon": "fa-palette",
    "subjects": [
      {
        "title": "درک عمومی هنر",
        "icon": "fa-paint-brush",
        "courses": [
          {
            "title": "درک عمومی هنر جامع کنکور هنر",
            "content": "تاریخ هنر ایران و جهان، مکاتب هنری، صنایع دستی و هنرهای بصری از سیر هنر تا هنرهای مدرن.",
            "price": "640000",
            "image": "/images/courses/art-gen-1.jpg",
            "isFeatured": true,
            "badge": "ویژه کنکور هنر",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "دوره تاریخ هنر ایران و جهان (تصویری)",
            "content": "تحلیل آثار هنری برجسته دنیا و هنر اسلامی-ایرانی با نمایش اسلاید و تست.",
            "price": "410000",
            "image": "/images/courses/art-gen-2.jpg",
            "isFeatured": false,
            "badge": "تاریخ هنر",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "جمع‌بندی درک عمومی هنر و صنایع دستی",
            "content": "خلاصه مبحث صنایع دستی ایران و هنرهای سنتی در قالب تست‌های برگزیده.",
            "price": "370000",
            "image": "/images/courses/art-gen-3.jpg",
            "isFeatured": false,
            "badge": "جمع‌بندی",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "درک عمومی ریاضی و فیزیک هنر",
        "icon": "fa-square-root-variable",
        "courses": [
          {
            "title": "ریاضی و فیزیک هنر جامع کنکور",
            "content": "آموزش مباحث هندسه، پرسپکتیو، محاسبات عددی، فیزیک نور، رنگ و اهرم‌ها برای داوطلبان هنر.",
            "price": "520000",
            "image": "/images/courses/art-math-1.jpg",
            "isFeatured": true,
            "badge": "جامع",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "دوره هندسه و پرسپکتیو در هنر",
            "content": "رسم نقطه گریز، فواصل دید و هندسه مسطحه ویژه تست‌های کنکور هنر.",
            "price": "340000",
            "image": "/images/courses/art-math-2.jpg",
            "isFeatured": false,
            "badge": "پرسپکتیو",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "تکنیک‌های تست‌زنی ریاضی و فیزیک هنر",
            "content": "روش‌های سریع حل تست‌های فیزیک نور و آینه‌ها و محاسبات ریاضی هنر.",
            "price": "320000",
            "image": "/images/courses/art-math-3.jpg",
            "isFeatured": false,
            "badge": "تکنیک تستی",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "خلاقیت تصویری و تجسمی",
        "icon": "fa-image",
        "courses": [
          {
            "title": "خلاقیت تصویری و تجسمی جامع کنکور هنر",
            "content": "عناصر و مبادی سواد بصری، ترکیب‌بندی، نمادشناسی، تحلیل کادربندی و زبان تصویر.",
            "price": "580000",
            "image": "/images/courses/art-vis-1.jpg",
            "isFeatured": true,
            "badge": "پرطرفدار",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "دوره نمادشناسی و تحلیل تصویر در کنکور هنر",
            "content": "بررسی نمادهای کهن‌الگویی و رنگ‌شناسی تخصصی در تحلیل تصاویر تست‌ها.",
            "price": "360000",
            "image": "/images/courses/art-vis-2.jpg",
            "isFeatured": false,
            "badge": "نمادشناسی",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "کارگاه تست‌زنی خلاقیت تصویری",
            "content": "تحلیل ۲۰۰ تصویر پیچیده کنکورهای سال‌های اخیر با توضیحات استاد.",
            "price": "350000",
            "image": "/images/courses/art-vis-3.jpg",
            "isFeatured": false,
            "badge": "کارگاه تست",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "خلاقیت موسیقی",
        "icon": "fa-music",
        "courses": [
          {
            "title": "خلاقیت موسیقی جامع کنکور هنر",
            "content": "تئوری موسیقی ایرانی و غربی، سازشناسی، ارکستراسیون، فواصل و گام‌های موسیقی.",
            "price": "560000",
            "image": "/images/courses/art-mus-1.jpg",
            "isFeatured": false,
            "badge": "جامع تخصصی",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "دوره تئوری موسیقی و فواصل غربی",
            "content": "شناخت آکوردها، گام‌های ماژور و مینور و مدهای کلیسایی.",
            "price": "350000",
            "image": "/images/courses/art-mus-2.jpg",
            "isFeatured": false,
            "badge": "تئوری موسیقی",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "سازشناسی ایرانی و غربی کنکور هنر",
            "content": "شناخت کامل ساختار و میدان صوتی سازهای ملی و جهانی.",
            "price": "330000",
            "image": "/images/courses/art-mus-3.jpg",
            "isFeatured": false,
            "badge": "سازشناسی",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "خلاقیت نمایشی",
        "icon": "fa-film",
        "courses": [
          {
            "title": "خلاقیت نمایشی جامع (تئاتر و سینما)",
            "content": "تاریخ تئاتر و سینما، سبک‌های نمایشی، کارگردانی، فیلمنامه‌نویسی و اصطلاحات سینمایی.",
            "price": "530000",
            "image": "/images/courses/art-dram-1.jpg",
            "isFeatured": false,
            "badge": "جامع سینما و تئاتر",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "دوره اصطلاحات فنی سینما و تدوین",
            "content": "شناخت انواع دکوپاژ، میزانسن، زاویه دوربین و سبک‌های تدوین فیلم.",
            "price": "330000",
            "image": "/images/courses/art-dram-2.jpg",
            "isFeatured": false,
            "badge": "سینمایی",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "تاریخ مکاتب نمایشی دنیا",
            "content": "از نمایش‌های یونان باستان تا مکاتب مدرن تئاتر قرن بیستم.",
            "price": "310000",
            "image": "/images/courses/art-dram-3.jpg",
            "isFeatured": false,
            "badge": "تاریخ تئاتر",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "خواص مواد",
        "icon": "fa-atom",
        "courses": [
          {
            "title": "خواص مواد جامع کنکور هنر",
            "content": "شناخت الیاف، فلزات، سرامیک‌ها، چوب، چرم، رزین‌ها و فرآیندهای ساخت و تولید صنعتی.",
            "price": "470000",
            "image": "/images/courses/art-mat-1.jpg",
            "isFeatured": false,
            "badge": "جامع",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "کپسول طبقه بندی الیاف و صنایع دستی",
            "content": "دسته‌بندی الیاف طبیعی و مصنوعی و متدهای چاپ روی پارچه و چرم.",
            "price": "290000",
            "image": "/images/courses/art-mat-2.jpg",
            "isFeatured": false,
            "badge": "کپسول فشرده",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "بانک تست خواص مواد کنکور هنر",
            "content": "حل ۱۵۰ تست دسته‌بندی‌شده از کنکورهای سال‌های اخیر.",
            "price": "280000",
            "image": "/images/courses/art-mat-3.jpg",
            "isFeatured": false,
            "badge": "بانک تست",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "ترسیم فنی",
        "icon": "fa-drafting-compass",
        "courses": [
          {
            "title": "ترسیم فنی جامع کنکور هنر",
            "content": "شناخت ابزارهای نقشه کشی، احجام هندسی، مجهول‌یابی، برش‌ها و مقاطع ترسیمی.",
            "price": "460000",
            "image": "/images/courses/art-draw-1.jpg",
            "isFeatured": false,
            "badge": "جامع",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "دوره مجهول‌یابی و سه نمای ترسیم فنی",
            "content": "تکنیک‌های رسم ۳ نما و یافتن نمای مجهول از احجام پیچیده.",
            "price": "310000",
            "image": "/images/courses/art-draw-2.jpg",
            "isFeatured": false,
            "badge": "مجهول‌یابی",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "جمع‌بندی ابزارها و مقیاس‌های ترسیم فنی",
            "content": "مرور استاندارد کاغذها، ابزارهای خط‌کشی و مقیاس‌های نقشه‌کشی.",
            "price": "270000",
            "image": "/images/courses/art-draw-3.jpg",
            "isFeatured": false,
            "badge": "جمع‌بندی",
            "buttonText": "مشاهده دوره"
          }
        ]
      }
    ]
  },
  {
    "title": "زبان‌های خارجی",
    "slug": "languages",
    "icon": "fa-language",
    "subjects": [
      {
        "title": "زبان انگلیسی اختصاصی (تخصص زبان)",
        "icon": "fa-globe-americas",
        "courses": [
          {
            "title": "زبان تخصصی کنکور منحصراً زبان (۰ تا ۱۰۰)",
            "content": "آموزش پیشرفته Advanced Grammar, Vocabulary, Cloze Test و Reading برای کنکور منحصراً زبان.",
            "price": "670000",
            "image": "/images/courses/lang-adv-1.jpg",
            "isFeatured": true,
            "badge": "ویژه کنکور زبان",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "دوره 1100 Words You Need to Know کنکوری",
            "content": "تدریس واژگان سطح بالای ۵۰۴ و ۱۱۰۰ واژه برای پاسخ به سخت‌ترین تست‌های لغت کنکور زبان.",
            "price": "420000",
            "image": "/images/courses/lang-adv-2.jpg",
            "isFeatured": false,
            "badge": "واژگان پیشرفته",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "کارگاه ریدینگ و کلوزتست تخصصی زبان",
            "content": "تکنیک‌های درک مطلب و ساختارشناسی جملات پیچیده انگلیسی در کنکور زبان.",
            "price": "380000",
            "image": "/images/courses/lang-adv-3.jpg",
            "isFeatured": true,
            "badge": "کارگاه تخصصی",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "زبان آلمانی (کنکور تخصصی)",
        "icon": "fa-flag",
        "courses": [
          {
            "title": "دوره جامع زبان آلمانی کنکور (سطح A1 تا B2)",
            "content": "آموزش گرامر Deutsch Grammatik، واژگان Wortschatz و درک متن آلمانی برای کنکور زبان‌های خارجی.",
            "price": "690000",
            "image": "/images/courses/lang-ger-1.jpg",
            "isFeatured": false,
            "badge": "جامع آلمانی",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "دوره گرامر پیشرفته آلمانی (Kasus & Passiv)",
            "content": "تسلط بر Akkusativ, Dativ, Genitiv و ساختارهای مجهول در زبان آلمانی.",
            "price": "390000",
            "image": "/images/courses/lang-ger-2.jpg",
            "isFeatured": false,
            "badge": "گرامر آلمانی",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "تست‌زنی و تحلیل آزمون‌های آلمانی کنکور",
            "content": "بررسی نمونه سوالات تستی استاندارد زبان آلمانی با تحلیل کامل.",
            "price": "360000",
            "image": "/images/courses/lang-ger-3.jpg",
            "isFeatured": false,
            "badge": "تست‌زنی",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "زبان فرانسوی (کنکور تخصصی)",
        "icon": "fa-wine-glass",
        "courses": [
          {
            "title": "دوره جامع زبان فرانسوی کنکور تخصصی",
            "content": "آموزش گرامر Grammaire، لغات Vocabulaire و فهم متن Compréhension برای کنکور فرانسه.",
            "price": "680000",
            "image": "/images/courses/lang-fr-1.jpg",
            "isFeatured": false,
            "badge": "جامع فرانسه",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "دوره صرف افعال و زمان‌ها در زبان فرانسوی",
            "content": "تسلط بر Conjugaison افعال گروه ۱، ۲ و ۳ و زمان‌های Présent, Passé composé, Imparfait.",
            "price": "380000",
            "image": "/images/courses/lang-fr-2.jpg",
            "isFeatured": false,
            "badge": "افعال فرانسه",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "جمع‌بندی و تکنیک‌های درک متن فرانسه",
            "content": "آموزش روش‌های پاسخگویی به متون طولانی فرانسوی در کنکور سراسری.",
            "price": "350000",
            "image": "/images/courses/lang-fr-3.jpg",
            "isFeatured": false,
            "badge": "جمع‌بندی",
            "buttonText": "مشاهده دوره"
          }
        ]
      },
      {
        "title": "زبان انگلیسی عمومی کنکور زبان",
        "icon": "fa-book",
        "courses": [
          {
            "title": "زبان عمومی کنکور تخصصی زبان",
            "content": "مرور گرامر و واژگان زبان عمومی دبیرستان برای داوطلبان کنکور زبان‌های خارجی.",
            "price": "450000",
            "image": "/images/courses/lang-gen-1.jpg",
            "isFeatured": false,
            "badge": "عمومی کنکور",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "دوره مرور سریع واژگان عمومی پایه تا ۱۲",
            "content": "جمع‌بندی کلیه لغات کتاب‌های Vision 1, 2, 3 به همراه تست های مرتبط.",
            "price": "290000",
            "image": "/images/courses/lang-gen-2.jpg",
            "isFeatured": false,
            "badge": "مرور واژگان",
            "buttonText": "مشاهده دوره"
          },
          {
            "title": "تکنیک‌های گرامر زبان عمومی برای کنکور زبان",
            "content": "آموزش نکات ریز گرامری که در سوالات زبان عمومی طرح می‌شوند.",
            "price": "310000",
            "image": "/images/courses/lang-gen-3.jpg",
            "isFeatured": false,
            "badge": "گرامر عمومی",
            "buttonText": "مشاهده دوره"
          }
        ]
      }
    ]
  }
];

async function main() {
  console.log("🌱 شروع تزریق جامع تمام رشته‌ها و دروس کنکور به دیتابیس...");

  // ۱. پاک‌سازی داده‌های قبلی با رعایت وابستگی کلید‌های خارجی (Foreign Keys)
  await prisma.enrollment.deleteMany({});
  await prisma.course.deleteMany({});
  await prisma.subject.deleteMany({});
  await prisma.major.deleteMany({});
  console.log("🧹 داده‌های قدیمی دیتابیس با موفقیت پاک‌سازی شدند.");

  let totalMajors = 0;
  let totalSubjects = 0;
  let totalCourses = 0;

  // ۲. ایجاد رشته‌ها، درس‌ها و دوره‌ها به صورت سلسله‌مراتبی و ایمن
  for (const majorItem of seedData) {
    const createdMajor = await prisma.major.create({
      data: {
        title: majorItem.title,
        slug: majorItem.slug,
        icon: majorItem.icon,
      },
    });
    totalMajors++;
    console.log(`📌 رشته «${createdMajor.title}» ایجاد شد.`);

    for (const subjectItem of majorItem.subjects) {
      const createdSubject = await prisma.subject.create({
        data: {
          title: subjectItem.title,
          icon: subjectItem.icon,
          majorId: createdMajor.id,
        },
      });
      totalSubjects++;

      const coursesToCreate = subjectItem.courses.map((course) => ({
        ...course,
        majorId: createdMajor.id,
        subjectId: createdSubject.id,
      }));

      await prisma.course.createMany({
        data: coursesToCreate,
      });

      totalCourses += coursesToCreate.length;
      console.log(`   └─ درس «${createdSubject.title}» ثبت شد (با ${coursesToCreate.length} دوره آموزشی).`);
    }
  }

  console.log("==================================================");
  console.log(`🎉 تزریق کامل داده‌ها با موفقیت انجام شد!`);
  console.log(`📊 آمار کل ثبت‌شده در دیتابیس:`);
  console.log(`   - تعداد رشته‌ها (Majors): ${totalMajors}`);
  console.log(`   - تعداد درس‌ها (Subjects): ${totalSubjects}`);
  console.log(`   - تعداد دوره‌های آموزشی (Courses): ${totalCourses}`);
  console.log("==================================================");
}

main()
  .catch((e) => {
    console.error("❌ خطا در اجرای اسکریپت Seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
