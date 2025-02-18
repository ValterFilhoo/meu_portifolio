import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

function RedesLaterais() {

    return (

        <div className="w-[4%] fixed top-[40%] md:w-[6%] md:top-[42%] sm:w-[8%] sm:mr-[50%] sm:top-[42%] max-sm:w-[12%]  max-sm:top-[45%] bg-gray-100 shadow-xl rounded-s-lg " dir="rtl">

                <aside className="flex flex-col items-center p-4 sm:p-3 max-sm:p-2 gap-5">

                    <a href="#" className="hover:opacity-75"> <FaLinkedin className="sm:text-3xl max-sm:text-2xl"/> </a>
                    <a href="#" className="hover:opacity-75"> <IoLogoGithub className="sm:text-3xl max-sm:text-2xl"/> </a>


                </aside>

        </div>

    )

}

export default RedesLaterais;