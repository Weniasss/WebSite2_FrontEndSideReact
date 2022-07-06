import React from "react";
import Navbar from "./organisms/Navbar";

const PrivacyPolicy = () => {
  return (
    <>
      <section class="text-gray-600 body-font  bg-cover bg-img h-screen">
        {/* <Navbar/> */}
        <div class="container px-5 py-20 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-7xl text-4xl font-extrabold title-font mb-8 text-gray-900">
              {" "}
              Privacy<span className="text-white">Policy </span>
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-3xl font-bold uppercase">
              our site values its users and humbly protects their rights on this
              site !
            </p>
          </div>
          <ul class="list-decimal mx-52 place-content-center">
            <li className="text-xl font-bold m-5">
              Dane Osobowe przetwarzane są na podstawie zgody wyrażanej przez
              Użytkownika oraz w przypadkach, w których przepisy prawa
              upoważniają Administratora do przetwarzania danych osobowych na
              podstawie przepisów prawa lub w celu realizacji zawartej pomiędzy
              stronami umowy.
            </li>
            <li className="text-xl font-bold m-5">
              Serwis zbiera informacje dobrowolnie podane przez użytkownika
            </li>
            <li className="text-xl font-bold m-5">
              dane podane w formularzu są przetwarzane w celu wynikającym z
              funkcji konkretnego formularza np. w celu dokonania procesu
              obsługi kontaktu informacyjnego
            </li>
            <li className="text-xl font-bold m-5">
              Do danych zawartych w formularzu przysługuje wgląd osobie
              fizycznej, która je tam umieściła. Osoba ta ma również praw do
              modyfikacji i zaprzestania przetwarzania swoich danych w dowolnym
              momencie.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
