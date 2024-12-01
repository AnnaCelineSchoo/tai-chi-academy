import React from "react";
import { Link } from "react-router-dom";

// todo add media json
// loop trough json and show cars
// make seperate component of even card
// make link to more info about event
// make button show more cards

function Media() {
  return (
    <>
      <section className="about-section text-center" id="pricing">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-white mb-4">Media</h2>
              <p className="text-white-50">
                Welkom op onze Media-pagina, waar je alles kunt vinden over de
                spannende wereld van Tai Chi evenementen! Hier delen we
                informatie over aankomende competities, workshops, demonstraties
                en andere speciale evenementen. Of je nu een beginnende
                beoefenaar bent die zijn vaardigheden wil verbeteren of een
                ervaren Tai Chi-liefhebber die op zoek is naar nieuwe
                uitdagingen, deze pagina biedt jou de laatste updates. We
                moedigen iedereen aan om deel te nemen, te leren en zich te
                verdiepen in de rijke traditie van Tai Chi door middel van
                hands-on ervaring. Van regionale competities tot internationale
                workshops, blijf op de hoogte van de mogelijkheden om je kennis
                en praktijk te verdiepen en deel uit te maken van onze groeiende
                Tai Chi-gemeenschap.
              </p>
              {/* <Link className="btn btn-primary" to="#about">
                Ervaringen
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      <div className="container my-5">
        {/* Embedded YouTube Video */}
        <div className="text-center mb-5">
          <h2 className="text-gray">Ervaar Tai Chi Academy</h2>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/3pNW8sTTxhI?si=V1CgKG0JM-S2hcXb"
              title="Tai Chi Event Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Page Title */}
        <h2 className="text-center mb-5">Tai Chi Evenementen</h2>

        {/* Subsections */}
        <div className="row text-center mb-5">
          <div className="col-md-6 mb-4">
            <h3>Competities</h3>
            <p>
              Ontdek de kunst van Tai Chi door middel van nationale en
              internationale competities, waar de beste beoefenaars samenkomen
              om hun vaardigheden te meten.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <h3>Workshops</h3>
            <p>
              Neem deel aan workshops onder leiding van wereldberoemde Tai
              Chi-meesters en verdiep je begrip van deze eeuwenoude kunst.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <h3>Extra Trainingen</h3>
            <p>
              Versterk kennis met extra trainingen die gericht zijn op
              persoonlijke begeleiding, zodat je je vaardigheden verder kunt
              verfijnen.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <h3>Prestaties in het Verleden</h3>
            <p>
              Verken ons archief van eerdere Tai Chi-toernooien, workshops en
              evenementen die in de loop der jaren zijn gevierd.
            </p>
          </div>
        </div>

        {/* Activities Section */}
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm">
              <img
                src="https://www.taijiquan.nl/wp-content/uploads/2018/12/terugblik-stn-festival-2018-stichting-taijiquan-nederland-15.jpg"
                className="card-img-top"
                alt="Activity 1"
              />
              <div className="card-body">
                <h5 className="card-title">
                  National Tai Chi Championship 2024 STN
                </h5>
                <p className="card-text">
                  De beste Tai Chi-beoefenaars tonen hun vaardigheden in een
                  nationaal toernooi.
                </p>
                <button className="btn btn-outline-dark">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm">
              <img
                src="https://shaolin-vechtkunst.nl/wp-content/uploads/2023/09/IMG_20230910_210306-150x150.jpg"
                className="card-img-top"
                alt="Activity 2"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Chen Style Taijiquan Workshop: Long Pole 2023
                </h5>
                <p className="card-text">
                  Een Chen Style Taijiquan workshop gericht op het kennismaken
                  met “Long Pole”.
                </p>
                <button className="btn btn-outline-dark">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm">
              <img
                src="https://shaolin-vechtkunst.nl/wp-content/uploads/2022/12/IMG_20221204_215200-150x150.jpg"
                className="card-img-top"
                alt="Activity 3"
              />
              <div className="card-body">
                <h5 className="card-title">
                  National Tai Chi Championship 2022 STN
                </h5>
                <p className="card-text">
                  De beste Tai Chi-beoefenaars tonen hun vaardigheden in een
                  nationaal toernooi.
                </p>
                <button className="btn btn-outline-dark">Learn More</button>
              </div>
            </div>
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center mt-5">
          <button className="btn btn-primary">Meer</button>
        </div>
      </div>
    </>
  );
}

export default Media;

// function Media() {
//   return (
//     <>
//       <section className="about-section text-center" id="pricing">
//         <div className="container px-4 px-lg-5">
//           <div className="row gx-4 gx-lg-5 justify-content-center">
//             <div className="col-lg-8">
//               <h2 className="text-white mb-4">Media</h2>
//               <p className="text-white-50">
//                 Daarnaast bieden wij diverse verdiepende workshops aan en neemt
//                 ons team regelmatig deel aan wedstrijden. Ontdek hier meer over
//                 deze activiteiten en bekijk de foto's en video's van onze
//                 ervaringen.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section class="projects-section bg-light" id="projects">
//         <div class="container px-4 px-lg-5">
//           <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
//             <div class="col-xl-8 col-lg-7">
//               <img
//                 class="img-fluid mb-3 mb-lg-0"
//                 src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FYKcV8G2cKjc%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=a8cc4bded495b3f7915a658c56876937cb71be1d0982bcb75c56dfd7bb00dc65&ipo=images"
//                 alt="..."
//               />
//             </div>
//             <div class="col-xl-4 col-lg-5">
//               <div class="featured-text text-center text-lg-left">
//                 <h4>Basics</h4>
//                 <p class="text-black-50 mb-0">
//                   Grayscale is open source and MIT licensed. This means you can
//                   use it for any project - even commercial projects! Download
//                   it, customize it, and publish your website!
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="container px-4 px-lg-5">
//           <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
//             <div class="col-xl-4 col-lg-5">
//               <div class="featured-text text-center text-lg-left">
//                 <h4>Basics</h4>
//                 <p class="text-black-50 mb-0">
//                   Grayscale is open source and MIT licensed. This means you can
//                   use it for any project - even commercial projects! Download
//                   it, customize it, and publish your website!
//                 </p>
//               </div>
//             </div>
//             <div class="col-xl-8 col-lg-7">
//               <img
//                 class="img-fluid mb-3 mb-lg-0"
//                 src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FYKcV8G2cKjc%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=a8cc4bded495b3f7915a658c56876937cb71be1d0982bcb75c56dfd7bb00dc65&ipo=images"
//                 alt="..."
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Media;
