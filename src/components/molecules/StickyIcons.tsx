import { FacebookLogo, InstagramLogo, WhatsappLogo, HouseLine } from "@phosphor-icons/react";

const StickyIcons = () => {
    return (
        <aside className="fixed lg:bottom-0 bottom-1/2 left-0  flex flex-col gap-5 items-center bg-gradient-to-t z-40 from-purple-800 to-purple-300 rounded-e-lg py-3 px-2 ">
            <a href="https://www.facebook.com/profile.php?id=100076667067452" className="text-zinc-100 hover:text-zinc-900">
                <FacebookLogo size={15} color="currentColor" weight="fill" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5545835585" className="text-zinc-100 hover:text-zinc-900">
                <WhatsappLogo size={15} color="currentColor" weight="fill" />
            </a>
            <a href="https://www.instagram.com/juniors_gym5/" className="text-zinc-100 hover:text-zinc-900">
                <InstagramLogo size={15} color="currentColor" weight="fill" />
            </a>
            <a href="https://www.juniorsgym.site" className="text-zinc-100 hover:text-zinc-900">
                <HouseLine size={15} color="currentColor" weight="fill" />
            </a>
        </aside>
    )
}

export default StickyIcons