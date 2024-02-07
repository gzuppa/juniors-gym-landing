import { Image } from "../atoms/Image"
import ContactImg from "../../assets/gym/4.jpeg"
import { Text } from "../atoms/Text"
import { ContactTexts } from "../particles/Data"


const Contact = () => {
    return (
        <section className="w-full md:h-[400px] h-[500px] relative">
            <Image alt="Contact Image" className="w-full h-full" objectCover="object-cover object-top" image={ContactImg} />
            <div className="w-full h-full absolute top-0 left-0 bg-zinc-900/70 flex flex-col justify-center items-center gap-2">
                <Text as="p" className="tracking-widest text-yellow-300 uppercase md:text-sm text-xs font-medium">
                    {ContactTexts.firstText}
                </Text>
                <Text as="h1" className="lg:text-5xl md:text-4xl text-3xl text-zinc-100">
                    {ContactTexts.phone}
                </Text>
                <Text as="p" className="text-zinc-100 md:w-1/2 w-4/5 text-center text-lg my-6">
                    {ContactTexts.paragraph}
                </Text>
                <a href="https://api.whatsapp.com/send?phone=5545835585" className="px-10 font-medium text-white py-2.5 bg-gradient-to-r whitespace-nowrap from-purple-800 to-purple-300 cursor-pointer" target='_blank'>
                    {ContactTexts.button}
                </a>
            </div>
        </section>
    )
}

export default Contact