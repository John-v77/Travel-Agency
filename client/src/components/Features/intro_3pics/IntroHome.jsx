import React from "react";
import { Link } from "react-router-dom";

function IntroHome(props) {
  return (
    <div>
      <section class="my-10">
        <div class="text-center mb-10 md:mb-20">
          <h2 class="heading-secondary">
            Exciting tours for adventurous people
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-4  px-10 md:px-36">
          <div class="">
            <h3 class="my-4">You're going to fall in love with nature</h3>
            <p class="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omnis earum qui.
            </p>

            <h3 class="my-4">Live adventures like you never have before</h3>
            <p class="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores nulla deserunt voluptatum nam.
            </p>
            <Link to="/parallax" class="text-blue-600 block my-4">
              Learn more →
            </Link>
          </div>
          <div class=" mt-5 md:mt-0">
            <div class="">
              <img
                // srcset="img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w"
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="1"
                class="rounded-lg relative left-20 -top-8 z-12"
                src="https://natours.netlify.app/img/nat-1.jpg"
              />

              <img
                // srcset="img/nat-2.jpg 300w, img/nat-2-large.jpg 1000w"
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="2"
                class="rounded-lg relative left-80 -top-40 z-11"
                src="https://natours.netlify.app/img/nat-2.jpg"
              />

              <img
                // srcset="img/nat-3.jpg 300w, img/nat-3-large.jpg 1000w"
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="3"
                class="rounded-lg relative left-40 -top-72 z-12"
                src="https://natours.netlify.app/img/nat-3.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IntroHome;
