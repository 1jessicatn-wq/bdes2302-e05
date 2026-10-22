import Featured from "./featured";
import Gallery from "./gallery";
export default function Home() {
  return (
 <div id="container" className="max-w-6xl bg-red-100x mx-auto px-8">

        <div id="header" className="py-7 flex justify-between flex-col lg:flex-row items-center gap-4">

            <h1 className="text-[24px] cormorant-garamond-300 tracking-[1.92px]">
                JN Architecture
            </h1>

            <div id="menu" className="jetbrains-mono-500 uppercase text-[11px] tracking-[1.1px] flex gap-8 items-center">

                <a href="#featured">Featured</a>
                <a href="#about">Point of view</a>
                <a href="#gallery">Journal</a>

            </div>

        </div>
        <div id="featured" className="pb-16 border-b-1 border-black/20">



       

            <div className="flex justify-between mb-6 items-center">

                <div>
                    <h6 className="text-[10px] tracking-[1.8px] jetbrains-mono-500 text-[#00789F] mb-2">
                        BUILT NOTES · ISSUE 01
                    </h6>
                    <h1 className="text-[30px] leading-none cormorant-garamond-300">
                        Rooms shaped by light
                    </h1>
                </div>

                <div className="border flex border-black/20 items-center">
                    <button className="p-3" id="featured_prev">
                        <img src="Icon.svg" className="aspect-square" />
                    </button>
                    <div className="h-7 border-l-1 border-black/20"></div>
                    <button className="p-3" id="featured_next">
                        <img src="Icon.svg" className="rotate-180 aspect-square" />
                    </button>
                </div>

            </div>

            <Featured />

        </div>

        <div id="about" className="py-16 flex gap-16 items-center flex-col lg:flex-row">

            <div id="about_left" className="flex-1">

                <h6 className="text-[10px] tracking-[1.8px] jetbrains-mono-500 text-[#00789F] mb-2">
                    A NOTE ON MAKING · 01
                </h6>
                  
                <h1 className="text-[48px] leading-none cormorant-garamond-300">
                    Leave room for<br/>
                    the day to change.
                </h1>

                <p className="text-[16px] leading-[24px] inter-300 text-[#666666] mt-6 mb-4">
                    We make places that notice the small things: the sun moving across
                    a wall, a doorway that slows you down, the grain of a board worn
                    smooth by daily life.
                </p>
                <p className="text-[14px] leading-[20px] inter-300 text-[#999999] mb-4">
                Each project begins with what is already there.

                </p>
                <p className="text-[14px] leading-[20px] inter-300 text-[#999999]">
                    We listen to a site, work with its materials, and shape rooms that feel generous without
                    asking to be the center of attention.
                </p>

            </div>
            <div id="about_right" className="flex-1">

                <img className="aspect-4/3 saturate-0 hover:saturate-100 transition-all duration-500" src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&amp;fit=crop&amp;w=1200&amp;q=85" alt="Natural materials and soft daylight in a calm living space" />

            </div>


        </div>

        <Gallery />

        <div id="footer"
            className="py-10 flex justify-between jetbrains-mono-400 text-[#666666] text-[10px] tracking-[1px] flex-col lg:flex-row items-center gap-4 text-center">

            <h6>
                © 2026 JN Architecture
            </h6>

            <h6>
                BUILT SLOWLY · HELD LIGHTLY
            </h6>

        </div>

    </div>
  );
}
