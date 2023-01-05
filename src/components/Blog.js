import { useRef } from "react";
import Button from "./Button";
import Icon from "./Icon";
import Slider from "react-slick";

const features = [
  {
    id: 1,
    name: "PDF to Word",
    description: "Convert PDFs to editaba word documents.",
    icon: (
      <Icon
        img="https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
        alt="PDF to Word"
        className="w-full bg-white rounded-lg"
      />
    ),
    backgroundColor: "bg-blue",
  },
  {
    id: 2,
    name: "Merge PDF",
    description: "Combine multiple POF into one unified document.",
    icon: (
      <Icon
        img="https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
        alt="Merge PDF"
        className="w-full rounded-lg"
      />
    ),
    backgroundColor: "bg-indigo-600",
  },
  {
    id: 3,
    name: "JPG to PDF",
    description: "Transform JPG, PNG, BMP, GIF, and TIFF images to PDF",
    icon: (
      <Icon
        img="https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
        alt="JPG to PDF"
        className="w-full rounded-lg"
      />
    ),
    backgroundColor: "bg-orange",
  },
  {
    id: 4,
    name: "eSign PDF",
    description:
      "Create your signature, sign your PDF and request people to sign.",
    icon: (
      <Icon
        img="https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
        alt="eSign PDF"
        className="w-full rounded-lg"
      />
    ),
    backgroundColor: "bg-indigo-100",
  },
  {
    id: 5,
    name: "Edit PDF",
    description:
      "Add text, shapes, images and freehand annotations to your PDF.",
    icon: (
      <Icon
        img="https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
        alt="Edit PDF"
        className="w-full rounded-lg"
      />
    ),
    backgroundColor: "bg-green",
  },
  {
    id: 6,
    name: "Compress PDF",
    description: "Reduce the size of your PDF without losing quality.",
    icon: (
      <Icon
        img="https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
        alt="Compress PDF"
        className="w-full rounded-lg"
      />
    ),
    backgroundColor: "bg-red",
  },
  {
    id: 7,
    name: "Protect PDF",
    description:
      "Encrypt your PDF with a password to prevent unauthorized access to the file content.",
    icon: (
      <Icon
        img="https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
        alt="Compress PDF"
        className="w-full rounded-lg"
      />
    ),
    backgroundColor: "bg-red",
  },
  {
    id: 8,
    name: "Excel to PDF",
    description: "Convert Excel spreadsheets to PDF documents.",
    icon: (
      <Icon
        img="https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
        alt="Compress PDF"
        className="w-full rounded-lg"
      />
    ),
    backgroundColor: "bg-red",
  },
];

const settings = {
  dots: true,
  dotsClass: "slick-dots carousel-dot",
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        // infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Blog() {
  const sliderRef = useRef(null);
  return (
    <div className="py-5 my-12 sm:py-6 lg:py-8 mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8 border-t border-gray-200">
      <div className="mx-auto max-w-md mb-12 px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <h2 className="mt-2 text-2xl font-bold tracking-tight  sm:text-4xl">
          Discover other functionalities
        </h2>
      </div>
      <div className="relative">
        <Slider {...settings} ref={sliderRef}>
          {features?.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col overflow-hidden rounded-lg p-5 bg-blog mx-2 h-96 my-10 "
            >
              <div className="flex-shrink-0 h-[12rem] overflow-hidden rounded-lg">
                {feature.icon}
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <div href="#" className="mt-2 block cursor-pointer">
                    <p className="text-xl font-semibold text-gray-900">
                      {feature.name}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center absolute -bottom-8 left-4">
          <Button
            kind="secondary"
            onClick={() => sliderRef.current.slickPrev()}
            className="rounded-lg mr-4"
          >
            <i className="fas fa-arrow-left mr-2" />
          </Button>
          <Button
            kind="secondary"
            onClick={() => sliderRef.current.slickNext()}
            className="rounded-lg"
          >
            <i className="fas fa-arrow-right ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
