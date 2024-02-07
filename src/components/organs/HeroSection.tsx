import { useCallback, useRef, Fragment, useState } from "react";
import { Image } from "../atoms/Image"
import HeroImg1 from "../../assets/hero/jgym1.jpeg"
import HeroImg2 from "../../assets/hero/jgym2.jpeg"
import HeroImg3 from "../../assets/hero/jgym3.jpeg"
import { HeroTexts } from "../particles/Data";
import Slider from "react-slick";
import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";
import { ArrowCircleLeft, ArrowCircleRight, YoutubeLogo } from "@phosphor-icons/react";
import StickyIcons from "../molecules/StickyIcons";
import YoutubeEmbed from "../molecules/YouTubeEmbedVideo";
import { Slide, Zoom } from "react-awesome-reveal";
import { Dialog, Transition } from '@headlessui/react'


const HeroSection = () => {
    const sliderRef = useRef<Slider | null>();
    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };
    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        cssEase: "linear",
    };

    const renderProfileImg = useCallback((element: number) => {
        switch (element) {
            case 0:
                return HeroImg1;
            case 1:
                return HeroImg2;
            case 2:
                return HeroImg3;
            default:
                return "";
        }
    }, [])

    const [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
      }
    
    const openModal = () => {
        setIsOpen(true)
      }

    return (
        <section className="w-full h-auto bg-gradient-to-r from-purple-950 to-purple-200 relative overflow-x-hidden">
            <Slider ref={(slider) => (sliderRef.current = slider)} {...settings} className="h-full">
                {
                    HeroTexts.map((hero, index) => (
                        <main className="w-full lg:h-screen md:h-[50vh] h-screen relative bg-zinc-900 overflow-x-hidden" key={index}>
                            <Zoom className="h-full">
                                <Image className="md:w-[60%] w-full md:h-full h-1/2" alt="HeroImg1" objectCover="object-cover" image={renderProfileImg(index)} />
                            </Zoom>

                            <div className="md:w-[50%] w-full md:h-full h-1/2 absolute md:top-0 top-1/2 right-0 bg-zinc-900 flex flex-col md:justify-center justify-start lg:gap-8 md:gap-4 gap-2 lg:px-20 md:px-6 px-4 overflow-x-hidden">
                                <Text as="h1" className="lg:text-6xl md:text-4xl text-4xl md:mt-10 mt-10 text-zinc-100 font-extrabold">
                                    <Slide direction="right">
                                        {hero.Heading}
                                    </Slide>
                                </Text>
                                <Text as="p" className="lg:text-lg text-base text-zinc-400 my-4">
                                    <Slide direction="left">
                                        {hero.Paragraph}
                                    </Slide>
                                </Text>
                                <div className="flex items-center gap-8">
                                    <Slide direction="up">
                                        <Button type="button" className="px-10 font-medium text-white py-2.5 bg-gradient-to-r whitespace-nowrap from-purple-950 to-purple-200" onClick={openModal}>
                                            {hero.Button}
                                        </Button>
                                    </Slide>
                                    <Slide direction="up">
                                        <a href="/" className="flex items-center gap-2 text-red-500 hover:text-yellow-300 group">
                                            <YoutubeLogo size={20} color="currentColor" weight="fill" />
                                            <Text as="span" className="text-zinc-100 group-hover:text-yellow-300 uppercase text-xs">Ver en Youtube</Text>
                                        </a>
                                    </Slide>
                                </div>
                            </div>
                        </main>

                    ))
                }
            </Slider>
            <div className="flex justify-end lg:justify-start items-center gap-4 absolute lg:bottom-10 md:bottom-5 md:right-10 right-4 bottom-4">
                <Button onClick={previous} type="button" className="w-8 h-8 border rounded-full border-yellow-300 flex items-center justify-center text-yellow-300 hover:text-purple-800 hover:border-purple-800">
                    <ArrowCircleLeft size={20} color="currentColor" weight="light" />
                </Button>
                <Button onClick={next} type="button" className="w-8 h-8 border rounded-full border-yellow-300 flex items-center justify-center text-yellow-300 hover:text-purple-800 hover:border-purple-800">
                    <ArrowCircleRight size={20} color="currentColor" weight="light" />
                </Button>
            </div>
            <StickyIcons />

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="w-full md:w-2/4 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-purple-900"
                        >
                            ¿Cómo comenzar en el gimnasio?
                        </Dialog.Title>
                        <div className="mt-2">
                            <p className="text-sm text-gray-500">
                            En ocasiones puede ser difícil comenzar a ir al gimnasio. Los siguientes tips pueden ayudarte para decidirte
                            </p>
                        </div>

                        <div className="mt-2">
                            <YoutubeEmbed embedId="8GDHz8jwmTI" />
                        </div>

                        <div className="mt-4">
                            <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                            >
                            Listo!
                            </button>
                        </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </Dialog>
            </Transition>
        </section>
    )
}

export default HeroSection