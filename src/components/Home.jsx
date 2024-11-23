import React from "react";
import { useNavigate } from "react-router-dom";

const data = [
  {
    image: "karlson.jpg", // Replace with your image path
    text: "Karlsonni tanlagan bo‘lsangiz... Siz xushchaqchaq, serg‘ayrat va qiziquvchansiz. Sizning yuzingizdan kayfiyatingizni, biror narsaga munosabatingizni oson bilib olish mumkin. Kayfiyatingiz ko‘pincha a’lo darajada. Istasangiz, o‘z xissiyotlarinigiz va tuyg‘ularingizni jilovlay olasiz. Tadbirkor va tartib-intizomlisiz. Diqqatingizni jalb qilgan har qanday narsaga oson xayrihoxlik bildirasiz. Siz muloqotga oson kirishasiz va ko‘ngilchansiz. Yangi odamlar bilan tez chiqishib ketasiz. Har doim yordamga kelishga tayyorsiz. Yangi muhit va talablarga tez ko‘nikasiz, kerak bo‘lganda yangiliklarni oson o‘rganasiz. Yangi narsalarni tez qabul qilasiz. Muvaffaqiyatsizliklar va tanqidni xotirjamlik bilan qabul qilasiz. Yangi vaziyatlarga oson moslasha olasiz. Notanish, murakkab vaziyatlarda esankirab qolmaysiz. Boshlagan ishingiz sizni qiziqtirmay qolgudek bo‘lsa – tez soviysiz, oxirigacha yetkazmaslgingiz mumkin. O‘zingizga yuqori baho berish Sizga juda xos. Ba’zida tarqoqsiz, yig‘ilib olishga qiynalasiz, qaror qabul qilishda shoshilasiz.",
  },
  {
    image: "timsoh.jpg",
    text: "Timsoh Genani tanladingiz Siz atrofingizda hamma xursandchilik qilaytganda ham vazmin va xotirjamsiz, sovuqqonsiz va rejalisiz. Sizni kuldirish va xafa qilish juda qiyin. Kayfiyatingiz barqaror, osoyishta. Ishlab chiqilgan kun tartibiga qat’iy rioya qilasiz. Sizni o‘zingizdan chiqarish, hayajonga solish qiyin. Yangi insonlar bilan qiyin chiqishasiz, faqatgina uzoq vaqt bilgan odamlaringizgagina ishonasiz. Siz yaxshigina pismiq va ehtiyotkorsiz. G‘ayratlisiz, ishchansiz, chidamlisiz. Sizning matonatingiz, o‘zingizni tuta bilishingiz juda yaxshi rivojlangan, mustahkam, bama’ni va doim bir xilsiz, o‘zgaruvchan emassiz. Kuchingizni bo‘lar-bo‘lmasga sarf qilavermaysiz. Sizga beozorlik va muloyimlik xos, o‘z shaxsingizga nisbatan piching va kesatiqlarga xotirjam munosabat bildirasiz. Hamma narsada saranjomlik va tartiblilik Sizga xos. Diqqatingizni boshqa narsaga ko‘chirishingiz qiyin va yangi muhitga qiyinlik bilan moslashasiz. Ko‘nikma va odatlaringizni juda sekinlik bilan o‘zgartirasiz. Siz yangi faoliyatga diqqatingizni jalb qilishingiz qiyin, lekin moslashib olgach, umuman chalg‘imaysiz. Boshlagan ishingizni oxiriga yetkazasiz. Siz charchoq bilmaydigan mehnatkashsiz",
  },
  {
    image: "bilmasvoy.jpg",
    text: "Bilmasvoyni tanlagan bo‘lsangiz... Siz qiziqqon va ehtirosli insonsiz. Tezkor, juda harakatchansiz. Dovyurak va tashabbuskorsiz. Sizning kayfiyatingiz tez-tez o‘zgarib turadi. Shunday bo‘lsada, ustun kayfiyatingiz – tetik va jangovordir. Ba’zida o‘zingizni tuta olmaysiz, sabrsiz va jizzakisiz. Xafachi emassiz, gina saqlamaysiz. Qaysarsiz. Ba’zida o‘zingizni boshqalardan ustun qo‘yish xissi Sizga xos. Odamlar bilan muloqotda qo‘pollikka, serzardalikka yo‘l qo‘yasiz, bu esa odamlarning xatti-harakatlarini to‘g‘ri baholashga xalaqit beradi va bu asosda Siz ko‘pincha ziddiyatli vaziyatlarga sababchi bo‘lib qolasiz. Ortiqcha to‘g‘riso‘zligingiz, jizzakiligingiz, qo‘polligingiz, jahlingizning tez chiqishi, betoqatligingiz ba’zida muomalani juda og‘irlashtiradi.Sizning qiziqishlaringiz va intilishlaringiz yetarlicha barqaror, maqsadga erishish yo‘lida juda sabotli va mustahkamsiz.Bahslarda topqirsiz. Yangi sharoitlarga tez moslashasiz .Shu bilan birga Sizga qo‘nimsizlik, bir joyda uzoq o‘tira olmaslik, o‘zgalarning kamchiliklariga chiday olmaslik kabi xislatlar xos, tez o‘zingizdan chiqib ketasiz, tajovuzkorsiz. Sizni yoki Sizning hatti-harakatlaringizni, bajargan ishlarinigiz natijasini tanqid qilishganini yoqtirmaysiz. Hayotda ko‘pincha “Hammasini o‘zim qilaman” prinsipiga amal qilasiz. Siz yangiliklarga intilasiz. Yangi ishga zo‘r qiziqish, zavq va ishqivozlik bilan kirishasiz, kamchiliklarni yengib, ko‘tarinki ruxda ishlaysiz. Lekin ish davomida quvvatingiz zahirasi tez kamayishi mumkin, bunda faoliyatingiz tez tushib ketadi: ko‘tarinkilik va ruhlanish yo‘qoladi, kayfiyatingiz keskin pasayib ketadi. Yetarlicha tez, lekin bir oz qiyinchiliklar bilan qayta o‘rganishingiz, qayta tayyorlanishingiz mumkin.",
  },
  {
    image: "mamontcha.jpg",
    text: "Mamontchani tanlagan bo‘lsangiz... Sizning juda ta’sirchansiz. Kichkinagina sabab ko‘z yoshlaringizni chaqirishi mumkin. Ba’zida Siz o‘zingizga ishonmaysiz, jur’atingiz kam. Qiyinchiliklar Sizni qo‘llaringizni tushirishga, chekinishga majbur qiladi. Kayfiyatingiz ko‘pincha tushkun.Siz kam kirishimlisiz, tortinchoq va qat’iyatsizsiz. Odatiy sharoitda o‘zingizni dadil xis qilasiz va topshiriqlarni muvaffaqiyatli bajarasiz. Sabr-toqatlisiz. Yolg‘izlikni oson ko‘tarasiz. Saranjom-sarishtasiz. Sizga hamma narsani tartibga keltirish, chiroyli qilish yoqadi. Andishali, xushmuomalasiz. Sizga jizzakilik, tez xafa bo‘lib qolish xos. Siz doim ham o‘z kuchingizga ishonavermaysiz, notanish sharoitda o‘zingizni yo‘qotib qo‘yasiz. Har qanday o‘zgarish va kutilmagan sharoitlar Sizda xavotirlikni chaqiradi.Ishlayotganingizda tez toliqasiz. Bir marta o‘rgangan narsangizni hech qachon esingizdan chiqarmaysiz, lekin kerak bo‘lib qolsa, yangilik, noan’anaviy narsani qabul qilish uchun qaytadan o‘rganishingiz qiyin. Buning uchun Siz bu narsani kuzatishingiz, uzoq o‘ylab ko‘rishingiz, unga ko‘nikib borishingiz kerak.",
  },
];

const Home = ({ setResultText }) => {
  const navigate = useNavigate();

  const handleClick = (text) => {
    setResultText(text); // Set the result text
    navigate("/result"); // Navigate to the result page
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-6" style={{display: "flex", cursor:"pointer"}}>
      {data.map((item, index) => (
        <div
          key={index}
          className="cursor-pointer"
          onClick={() => handleClick(item.text)}
        >
          <img src={item.image} alt={`Option ${index + 1}`} width={300} className="rounded shadow-lg w-[300px]" />
        </div>
      ))}
    </div>
  );
};

export default Home;
