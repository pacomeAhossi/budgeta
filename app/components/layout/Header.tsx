import Logo from "../brand/Logo";
import Navigation from "../headerLink/Navigation";
import Button from "../Button";
import Image from "next/image";

// export default function Header(){
//     return(
//         <header className="relative py-3 bg-black bg-[url('/vector-footer.svg')] bg-no-repeat border-b border-budgeta-gray/20 rounded-tl-xl rounded-tr-xl h-[150px] ">
//             <div className="container mx-auto px-6 lg:px-12 ">
//                 {/* <section className=""> */}

//                 <div className="flex items-center justify-between h-20">
//                     <Logo />
//                     <Navigation />
//                     {/* Buton download à droite */}
//                     <Button href="/download" variant="primary">
//                         Download
//                     </Button>
//                 </div>
//                 {/* </section> */}
//             </div>
//         </header>
//     )
// }
export default function Header(){
    return(
        <header className="relative  py-6 bg-black border-b border-budgeta-gray/20 rounded-tl-[35px] rounded-tr-[35px] h-[250px] overflow-hidden header-glow">
            {/* div pour l'image de fond avec rotation */}
            <div 
                className="absolute inset-0 bg-[url('/vector-footer.svg')] bg-cover bg-no-repeat transform rotate-x-180" 
                style={{ transform: 'rotateX(180deg)', zIndex: 0 }}
            />
            
            <div className="container mx-auto px-6 lg:px-16 relative z-10">
                <div className="flex items-center justify-between h-20">
                    <Logo />
                    <Navigation />
                    <Button href="/download" variant="primary">
                        Download
                    </Button>
                </div>
            </div>
        </header>
    )
}