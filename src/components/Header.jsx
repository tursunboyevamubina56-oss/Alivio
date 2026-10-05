import React from 'react'
import bigone from '../assets/bigbg.png'
const Header = () => {
    return (
        <div>
            <nav className="h-25 flex justify-around items-center gap-20">
                <h1 className="text-2xl font-bold text-green-700">Alivio</h1>

                <ul className='flex justify-center items-center gap-10'>
                    <li><a href="#">Why Alivio</a></li>
                    <li><a href="#">Soulition</a></li>
                    <li><a href="#">Comunity</a></li>
                    <li><a href="#">Prising</a></li>
                </ul>
                <div className="flex justify-center items-center gap-10">
                    <h1 className="">Sign up</h1>
                    <button className="h-10 w-20 bg-green-700 text-white">Start Trial</button>
                </div>
            </nav>

            <div  className="min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${bigone})`}}>
                <div className='pt-30 pl-60'>
                    <h1 className="text-5xl font-bold text-green-700 mb-10">Be aware, <br />
                        Manage well.</h1>
                    <p className="mb-10">Everyone experiences stress in different ways. <br />
                        Let Alivio guide you, in a personalized journal <br />
                        experience, to overcome your stress.</p>
                        <button className='h-10 w-35 text-center bg-green-700 text-white'>Find youre way</button>
                </div>
            </div>
        </div>
    )
}

export default Header
