import React from 'react'
import smollone from '../assets/smollone.jpg'
import smolltwo from '../assets/smolltwo.png'
import smollthree from '../assets/smollthree.jpg'
import video from '../assets/Video.png'
import gril from '../assets/gril.png'
const Main = () => {
    return (
        <div>
            <h1 className='ml-40'>How it works</h1>
            <div className="flex justify-center items-center gap-30 mb-30">
                <h1 className="text-5xl text-green-700 font-bold leading-20">Understand & Release  <br />
                    the stress in 3 steps</h1>
                <p className="">Alivio offers as many journals it takes, tackling different areas such as <br />
                    anxiety, overwhelmedness, sadness, or anger, and a variety of personal causes, <br />
                    to help you become aware of your emotions, and guide you in how to manage stress.
                </p>
            </div>


            <div className="flex justify-center items-center gap-30">
                <div className=''>
                    <div className="relative inline-block mb-10">
                        <span className="font-serif text-8xl leading-none text-teal-100 select-none">
                            01
                        </span>
                        <span className="absolute bottom-1 left-10 font-serif text-2xl font-bold text-black">
                            Personalize
                        </span>
                    </div>

                    <p className="mb-10">Answer a quick survey about how you <br />
                        express yourself, what causes you stress, <br />
                        and what areawould you like to work on. <br />
                        This way, we can fully  personalize your <br />
                        journal!</p>

                    <img src={smollone } alt="smollone" className='h-70 w-60'/>

                </div>



                <div className='mt-90'>
                    <div className="relative inline-block mb-10">
                        <span className="font-serif text-8xl leading-none text-teal-100 select-none">
                            02
                        </span>
                        <span className="absolute bottom-1 left-10 font-serif text-2xl font-bold text-black">
                            Write & Understand
                        </span>
                    </div>

                    <p className="mb-10">Answer a quick survey about how you <br />
                        express yourself, what causes you stress, <br />
                        and what areawould you like to work on. <br />
                        This way, we can fully  personalize your <br />
                        journal!</p>

                    <img src={smolltwo } alt="smollone" className='h-70 w-60'/>

                </div>


                <div className=''>
                    <div className="relative inline-block mb-10">
                        <span className="font-serif text-8xl leading-none text-teal-100 select-none">
                            03
                        </span>
                        <span className="absolute bottom-1 left-10 font-serif text-2xl font-bold text-black">
                            Alivio!
                        </span>
                    </div>

                    <p className="mb-10">Answer a quick survey about how you <br />
                        express yourself, what causes you stress, <br />
                        and what areawould you like to work on. <br />
                        This way, we can fully  personalize your <br />
                        journal!</p>

                    <img src={smollthree} alt="smollone" className='h-70 w-60'/>

                </div>

            </div>




            <div className="flex justify-center items-center gap-40 bg-[#245852] h-140 mt-30 mb-30">
                <div className="">
                    <h1 className="text-4xl font-bold text-white leading-16 pb-5">Let's hear about <br /> Kayla's success story</h1>
                    <p className='text-white'>See how well Alivio works in a real customer’s life. </p>
                    <button className="mt-10 bg-green-600 text-white h-10 w-40 text-center ">Let’s get started</button>
                </div>
                <img src={video} alt="" className='h-90 w-120' />
            </div>

            <div className='flex justify-center items-center gap-40'>


                <div className="relative w-[400px] pl-8 pb-8">
                    {/* Orqadagi yashil blok va rasm */}
                    <div className="h-[310px] rounded-2xl bg-[#cdeee3] flex items-end justify-center overflow-hidden">
                        {/* <div className="w-48 h-64 bg-gray-300"></div> */}
                        <img src={gril} alt=""  className='h-90 w-60'/>
                    </div>

                    {/* Chap pastdagi oq karta */}
                    <div className="absolute bottom-0 left-0 w-40 bg-white shadow-lg p-4 text-center">
                        <p className="text-xs border-b border-black pb-1 mx-4">Customized For</p>

                        <div className="w-10 h-10 rounded-full bg-gray-300 mx-auto mt-3"></div>
                        <p className="text-xs mt-1">Mikayla</p>

                        <h3 className="font-serif font-bold text-sm mt-3 text-left">Your custom contents</h3>
                        <ul className="text-[10px] text-left mt-2 space-y-1 list-disc list-inside">
                            <li>Understand Your Stress</li>
                            <li>Anger Management</li>
                        </ul>
                    </div>
                </div>

                <div>
                     <h1 >Our prouduct</h1>
                     <h1 className="leading-20 text-5xl font-bold text-green-700 mb-10">You tell us your stress, <br />
                     We make your diary</h1>
                     <p>Everyone experiences it, and in different ways. <br />
                     Let Alivio guide you, in a personalized journal experience, to <br />
                      overcome your stress.</p>
                      <button className="mt-10 h-10 w-40 text-center bg-green-800 text-white">Find youre way</button>
                </div>


            </div>
        </div>
    )
}

export default Main
