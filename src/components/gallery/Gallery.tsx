import React from "react";
import Image from "next/image";

function Gallery() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              Master Cleanse Reliac Heirloom
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven&apos;t heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <Image
                width={1000}
                height={1000}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                width={1000}
                height={1000}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image
                width={1000}
                height={1000}
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image
                width={1000}
                height={1000}
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                width={1000}
                height={1000}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                width={1000}
                height={1000}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
