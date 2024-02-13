import { Fragment, useState } from "react";
import { Text } from "../atoms/Text"
import { Card } from "../molecules/Card"
import { BlogTexts } from "../particles/Data"
import Image1 from "../../assets/gym/6.jpeg";
import Image2 from "../../assets/gym/11.jpeg"
import Image3 from "../../assets/gym/12.jpeg"
import { Image } from "../atoms/Image";
import { Clock } from "@phosphor-icons/react";
import { Button } from "../atoms/Button";
import { Dialog, Transition } from '@headlessui/react'


const Blogs = () => {
    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpen3, setIsOpen3] = useState(false)

    const openModal1 = () => {
        setIsOpen1(true)
      }
      const openModal2 = () => {
        setIsOpen2(true)
      }
      const openModal3 = () => {
        setIsOpen3(true)
      }
      const closeModal1 = () => {
        setIsOpen1(false)
      }
      const closeModal2 = () => {
        setIsOpen2(false)
      }
      const closeModal3 = () => {
        setIsOpen3(false)
      }

    return (
        <section className="w-full h-auto flex items-center bg-zinc-900">
            <main className="w-full lg:h-[900px] md:h-[800px] flex flex-col justify-center items-center gap-20 lg:gap-28 py-12 md:py-0">

                <div className="flex flex-col mt-10 items-center relative before:absolute before:-bottom-6 before:left-30 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-purple-900 before:to-purple-200 z-10">
                    <Text as="p" className="text-yellow-300 lg:text-sm text-xs tracking-widest uppercase font-medium">{BlogTexts.firstText}</Text>
                    <Text as="h1" className="text-zinc-100 lg:text-5xl md:text-4xl text-3xl">{BlogTexts.secondText}</Text>
                    <Text as="h1" className="absolute text-zinc-500/20 lg:left-24 left-20 lg:text-9xl md:text-7xl text-6xl font-extrabold lg:-top-32 md:-top-20 -top-16 -z-10">06</Text>
                </div>

                {/* Blog News */}
                <div className="w-full lg:w-3/4 grid md:grid-cols-3 lg:gap-8 md:gap-5 gap-8 px-6 md:px-4 lg:px-0">
                    <Card className="flex flex-col justify-between bg-zinc-950 border-b-4 border-yellow-300">
                        <Image alt='Yoga' className="w-full h-48" objectCover="object-cover" image={Image1} />
                        <Button type="button" className="px-10 font-medium text-white py-2.5 bg-gradient-to-r whitespace-nowrap from-purple-950 to-purple-200" onClick={openModal1}>
                            Ver más
                        </Button>
                        <Text as="h3" className="text-purple-300 text-xs group-hover:underline font-semibold uppercase px-1 mt-3">Yoga</Text>
                        <Text as="h1" className="text-zinc-300 group-hover:underline text-base capitalize px-1">Como mantener un equilibrio entre cuerpo y mente</Text>
                        <Text as="p" className="text-zinc-400 text-sm px-2">Descubre el poder transformador del yoga mientras exploramos sus numerosos beneficios físicos y mentales. Desde una mayor flexibilidad y fuerza hasta una reducción del estrés y una mayor atención plena. Experimente la armonía de mente, cuerpo y alma.</Text>
                        <div className="flex justify-between lg:px-6 md:px-4 px-6 pb-6 items-center">
                            <aside className="flex items-center gap-2">
                                <Text as="span" className="text-zinc-400 text-xs flex items-center gap-1 border-r border-zinc-400 pr-2">
                                    <Clock size={15} color="currentColor" />
                                    1m
                                </Text>
                                <Text as="span" className="text-zinc-300 capitalize text-xs">
                                    Hector Varela
                                </Text>
                            </aside>
                        </div>
                    </Card>

                    <Card className="flex flex-col justify-between bg-zinc-950 border-b-4 border-yellow-300">
                        <Image alt='Crossfit' className="w-full h-48" objectCover="object-cover" image={Image2} />
                        <Button type="button" className="px-10 font-medium text-white py-2.5 bg-gradient-to-r whitespace-nowrap from-purple-950 to-purple-200" onClick={openModal2}>
                            Ver más
                        </Button>
                        <Text as="h3" className="text-purple-300 text-xs group-hover:underline font-semibold uppercase px-1 mt-3">Crossfit</Text>
                        <Text as="h1" className="text-zinc-300 group-hover:underline text-base capitalize px-1">Como ayuda el crossfit a tu cuerpo</Text>
                        <Text as="p" className="text-zinc-400 text-sm px-2">Esta disciplina combina diferentes modalidades de entrenamiento, como levantamiento de pesas, cardio y ejercicios de alta intensidad, para ofrecer un programa completo y desafiante que aporta grandes beneficios no solo al físico del atleta, sino también a su salud.</Text>
                        <div className="flex justify-between lg:px-6 md:px-4 px-6 pb-6 items-center">
                            <aside className="flex items-center gap-2">
                                <Text as="span" className="text-zinc-400 text-xs flex items-center gap-1 border-r border-zinc-400 pr-2">
                                    <Clock size={15} color="currentColor" />
                                    1m
                                </Text>
                                <Text as="span" className="text-zinc-300 capitalize text-xs">
                                Hector Varela
                                </Text>
                            </aside>
                        </div>
                    </Card>

                    <Card className="flex flex-col justify-between bg-zinc-950 border-b-4 border-yellow-300">
                        <Image alt='Yoga' className="w-full h-48" objectCover="object-cover" image={Image3} />
                        <Button type="button" className="px-10 font-medium text-white py-2.5 bg-gradient-to-r whitespace-nowrap from-purple-950 to-purple-200" onClick={openModal3}>
                            Ver más
                        </Button>
                        <Text as="h3" className="text-purple-300 text-xs group-hover:underline font-semibold uppercase px-1 mt-3">Yoga</Text>
                        <Text as="h1" className="text-zinc-300 group-hover:underline text-base capitalize px-1">¿Qué es más eficaz para perder peso?</Text>
                        <Text as="p" className="text-zinc-400 text-sm px-2">
                            Las tendencias de los últimos años de programas de pérdida de peso en casa demuestran de manera inequívoca que, para perder peso, la clave es el cardio. Ni el levantamiento de peso ni el cardio te ayudarán a hacerlo por sí solos: los necesitas a los dos.</Text>
                        <div className="flex justify-between lg:px-6 md:px-4 px-6 pb-6 items-center">
                            <aside className="flex items-center gap-2">
                                <Text as="span" className="text-zinc-400 text-xs flex items-center gap-1 border-r border-zinc-400 pr-2">
                                    <Clock size={15} color="currentColor" />
                                    1m
                                </Text>
                                <Text as="span" className="text-zinc-300 capitalize text-xs">
                                Hector Varela
                                </Text>
                            </aside>
                        </div>
                    </Card>
                </div>


                <Transition appear show={isOpen1} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal1}>
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

                <div className="fixed inset-0 overflow-y-auto font-nunito">
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
                            className="text-2xl font-medium leading-6 text-purple-700 mb-8"
                        >
                            Como mantener un equilibrio entre cuerpo y mente
                        </Dialog.Title>

                        <p className="pb-6 italic text-sm">
La conexión profunda de cuerpo y mente, que alienta esta práctica ancestral, podría impactar de manera positiva tu estado emocional.</p>

                        <div className="mb-4 md:mb-0 w-full mx-auto relative">
                            <img src="https://res.cloudinary.com/gusironhack/image/upload/v1707795680/yoga.jpg" className="w-full object-cover lg:rounded" />
                        </div>

                        <div className="flex flex-col lg:flex-row lg:space-x-12">

                            <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                            <p className="pb-6">A través de la respiración y la meditación profunda, el yoga otorga distintos beneficios a las personas que lo practican. Desde aumentar su flexibilidad corporal, hasta mejorar la salud en general y reducir el estrés, son ganancias que se obtienen al darle oportunidad a la gente de conectar con sus emociones y su propio cuerpo.</p>

                            <p className="pb-6">Pero distintos expertos también ha resaltado los beneficios que puede tener para el cerebro, pues aumenta distintas sustancias. Estas disminuyen la ansiedad o influyen positivamente en regiones que tienen que ver con la memoria y la regulación emocional.</p>

                            <p className="pb-6">Debido a que la premisa básica del yoga es buscar la relajación a través de la respiración y la meditación, combinada con posturas de estiramiento, quienes la practican notan mejoras importantes en su tono muscular y fuerza física.</p>

                            <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                            Pero también “puede ayudar a reducir la respuesta al estrés, activando nuestro sistema nervioso parasimpático y reduciendo las emociones negativas como la depresión, la ansiedad y la irá”, explicó Corinna Keenmon, directora médica de psiquiatría y telepsiquiatría del Hospital Houston Methodist, a través de un comunicado de prensa.
                            </div>

                            <p className="pb-6">La institución resalta que el yoga disminuye las hormonas del estrés y, al mismo tiempo, aumenta las sustancias químicas beneficiosas del cerebro como las endorfinas y el GABA (ácido gamma-aminobutírico). “Estos químicos ayudan a reducir la ansiedad y mejorar el estado de ánimo”.</p>

                            <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">BENEFICIOS DEL YOGA PARA EL CEREBRO</h2>

                            <p className="pb-6">En el mismo sentido un artículo científico publicado en la revista ‘Brain pasticity’ en 2019: ‘Yoga Effects on Brain Health: A Systematic Review of the Current Literature’ establecía que esta práctica ancestral podría tener beneficios para el cerebro similares a los que aporta el ejercicio aeróbico, como la regulación emocional para reducir el estrés, la ansiedad y la depresión. “Y eso parece mejorar el funcionamiento del cerebro.”</p>

                            <p className="pb-6">La investigación llevada a cabo en la Universidad de Illinois, Estados Unidos, también resaltó que existen evidencias respecto a que el yoga aumenta el volumen del hipocampo, el cual está involucrado en procesamiento de la memoria, mismo que se reduce con la edad.</p>

                            <p className="pb-6">De tal forma que además de los beneficios de flexibilidad, llevar a cabo esta práctica, al menos 10 minutos al día, podría tener muchas más ventajas de las que piensas.</p>

                            </div>

                        </div>

                        <div className="mt-4">
                            <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal1}
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

            <Transition appear show={isOpen2} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal2}>
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
                            className="text-2xl font-medium leading-6 text-purple-700 mb-8"
                        >
                            Beneficios del CrossFit: un enfoque revolucionario del mundo fitness
                        </Dialog.Title>

                        <div className="mb-4 md:mb-0 w-full mx-auto relative">
                            <img src="https://res.cloudinary.com/gusironhack/image/upload/v1707796073/crossfit.jpg" className="w-full object-cover lg:rounded" />
                        </div>

                        <div className="flex flex-col lg:flex-row lg:space-x-12">

                            <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                            <p className="pb-6">En los últimos años, el CrossFit ha ganado popularidad y así, ha revolucionado el fitness total. Esta disciplina combina diferentes modalidades de entrenamiento, como levantamiento de pesas, cardio y ejercicios de alta intensidad, para ofrecer un programa completo y desafiante que aporta grandes beneficios no solo al físico del atleta, sino también a su salud.</p>

                            <p className="pb-6">De esta forma, es necesario adentrarse un poco más en lo que significa esta disciplina y lo que aporta al cuerpo humano, según sitios especializados en el área.</p>

                            <p className="pb-6">Uno de los principales beneficios del CrossFit es su capacidad para mejorar la resistencia cardiovascular. Los entrenamientos de alta intensidad y corta duración, combinados con ejercicios de cardio como correr, saltar la cuerda y remar, ayudan a fortalecer el corazón y los pulmones. Esto se traduce en una mayor capacidad para realizar actividades físicas de larga duración sin fatigarse rápidamente.</p>

                            <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                            Este deporte se centra en el levantamiento de pesas y en ejercicios funcionales que involucran varios grupos musculares al mismo tiempo. Esto ayuda a desarrollar fuerza y resistencia muscular de manera efectiva. Los movimientos compuestos, como las sentadillas, los levantamientos olímpicos y los ejercicios con kettlebell (pesa rusa), fortalecen los músculos de todo el cuerpo, lo que resulta en un aumento de la fuerza y la resistencia.
                            </div>

                            <p className="pb-6">Es conocido por su capacidad para quemar grasa y ayudar en la pérdida de peso. Los entrenamientos de intensos aumentan el metabolismo y promueven la quema de calorías incluso después de finalizarlos. Además, al combinar ejercicios cardiovasculares con levantamiento de pesas, se estimula el desarrollo de masa muscular magra, lo que aumenta la tasa metabólica basal y facilita la pérdida de grasa a largo plazo.</p>

                            <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Revoluciona la flexibilidad y la movilidad</h2>

                            <p className="pb-6">A diferencia de otros programas de entrenamiento, el CrossFit se enfoca en mejorar la flexibilidad y la movilidad. Los ejercicios de estiramiento y los movimientos de rango completo de movimiento ayudan a aumentar la flexibilidad de los músculos y las articulaciones, lo que reduce el riesgo de lesiones y mejora el rendimiento en otras actividades físicas.</p>

                            <p className="pb-6">Sus movimientos funcionales imitan los patrones de movimiento de la vida diaria. Esto significa que los ejercicios realizados en este deporte, tienen una aplicación práctica en la vida real. Al mejorar la fuerza, la resistencia y la flexibilidad en estos movimientos funcionales, se desarrollan habilidades que se pueden transferir a actividades cotidianas, como levantar objetos pesados, subir escaleras o realizar tareas domésticas.</p>

                            </div>

                        </div>

                        <div className="mt-4">
                            <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal2}
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

            <Transition appear show={isOpen3} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal3}>
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
                            className="text-2xl font-medium leading-6 text-purple-700 mb-8"
                        >
                            ¿Qué es más eficaz para perder peso, el cardio o el entrenamiento con pesas?
                        </Dialog.Title>

                        <div className="mb-4 md:mb-0 w-full mx-auto relative">
                            <img src="https://res.cloudinary.com/gusironhack/image/upload/v1707796680/cardio.webp" className="w-full object-cover lg:rounded" />
                        </div>

                        <div className="flex flex-col lg:flex-row lg:space-x-12">

                            <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                            <p className="pb-6">
                            Las tendencias de los últimos treinta años de programas de pérdida de peso y vídeos de entrenamientos en casa demuestran de manera inequívoca que, para perder peso, la clave es el cardio. Sin embargo, los estudios han evolucionado, y con ellos nuestra percepción sobre cómo podemos cambiar nuestra composición corporal. Resulta que ni el levantamiento de peso ni el cardio te ayudarán a hacerlo por sí solos: los necesitas a los dos.</p>

                            <p className="pb-6">El ejercicio cardiovascular ofrece un montón de ventajas para el cuerpo. Por ejemplo, mejora la salud del sistema cardiovascular, ayuda al cuerpo a transformar las células más rápidamente (lo que se denomina biogénesis mitocondrial) mientras elimina las dañadas y las disfuncionales, mejora el sueño, reduce el estrés, aumenta la energía general, mejora el perfil de colesterol y se ha relacionado con una mejor salud mental.</p>

                            <p className="pb-6">Y, por supuesto, quema calorías y puede ayudar a reducir la grasa corporal. La siguiente pregunta, obviamente, es ¿qué tipo de cardio es el mejor? Es una pregunta con truco. El mejor ejercicio de cardio es el que haces de forma constante y te entusiasma (ambas cosas van de la mano).</p>

                            <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                            El número de calorías que quemas depende de factores como tu perfil genético, tu peso de partida, tu altura y la intensidad del entrenamiento. Aunque los entrenamientos de cardio más conocidos son correr, andar en bicicleta, caminar y nadar, la mayor parte del entrenamiento de resistencia en los gimnasio tiene lugar en máquinas. En los gimnasios encontrarás cintas de correr, bicicletas estáticas, máquinas elípticas y escaleras mecánicas, entre muchas otras opciones. En general, hay dos tipos de trabajar el cardio: el entrenamiento de resistencia de baja a media intensidad y el entrenamiento por intervalos de alta intensidad.
                            </div>

                            <p className="pb-6">Entrenamiento de resistencia: para alcanzar el punto cuando tu cuerpo comienza a perder grasa a un ritmo más rápido, también conocido como la zona de “quemadura de grasas”, intenta ejercitarse durante al menos 20 minutos con un pulso de 110-130 latidos por minuto. Cuando esto sucede, tu cuerpo comienza a obtener más energía de la grasa. Sin embargo, este método no quema tantas calorías como el método de alta intensidad.</p>

                            <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Entrenamientos</h2>

                            <p className="pb-6">Entrenamiento por intervalos de alta intensidad (o HIIT, por sus siglas en inglés): este método te ayuda a quemar aún más calorías. Te obliga a llevar tu cuerpo hasta el límite durante un breve período de tiempo, tras lo cual se pasa a fases de recuperación relativamente más largas. Alternar entre esfuerzos y descansos permite a tu cuerpo seguir quemando calorías incluso cuando no estás levantando pesas. Hay un montón de formas diferentes de practicar HIIT, incluidos los sprints en colina y el método tabata. Hacer ejercicio de esta manera durante tan solo 15 minutos es suficiente para acelerar tu metabolismo. La duración de cada intervalo dependerá de tu condición física.</p>

                            <p className="pb-6">El entrenamiento de cardio puede ayudar a las personas con cuerpos más grandes cuyos médicos mencionan otros marcadores de salud preocupantes. «La mayoría de los marcadores de riesgo cardiometabólico asociados a la obesidad pueden mejorarse con el entrenamiento y el ejercicio, independientemente de la pérdida de peso, y con unos efectos similares a los observados con los programas de pérdida de peso», declaran investigadores de la Universidad Estatal de Arizona y la Universidad de Virginia.  Si practicas más cardio, es posible que veas que esos marcadores de salud mejoran, aun si no hay cambios en la báscula. Aquí es donde entra en juego la constancia: los investigadores observan que las fluctuaciones de peso (bajar y aumentar de peso una y otra vez) conllevan diversos problemas de salud, además de un mayor riesgo de mortalidad.</p>

                            </div>

                        </div>

                        <div className="mt-4">
                            <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal3}
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

            </main>

        </section>
    )
}

export default Blogs