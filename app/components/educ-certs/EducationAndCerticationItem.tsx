
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

const EDUCATION_AND_CERTIFICATIONS_ITEM_VARIANT = ["certification", "education", "scholarship"];

type EducationAndCertificationsItemVariant = (typeof EDUCATION_AND_CERTIFICATIONS_ITEM_VARIANT)[number];



interface EducationAndCertificationsItemProps {
    variant?: EducationAndCertificationsItemVariant,
    name: string,
    year: string,
    issuer: string,
    logo: string,
    link_verification: string
} 

const EducationAndCertificationsItem = ({ variant = "certification", name, year, issuer, logo, link_verification } : EducationAndCertificationsItemProps) => {

    return(
        <li className="flex w-full flex-col gap-y-2 rounded-lg border border-gray-200 p-6 cursor-pointer transition-shadow hover:shadow md:w-[340px] md:shrink-0 md:snap-start">
            <div className="flex justify-between">
                <h5 className="text-xs md:text-sm lg:text-sm text-gray-400"> {variant.toUpperCase()} </h5>
                <h6 className="font-mono text-xs md:text-sm lg:text-sm text-gray-400"> {year} </h6>
            </div>

            <div>
                <img src={logo} className="max-w-[60px]" />
            </div>

            <div>
                <h3 className="font-bold text-gray-800">{name}</h3>
                <h4 className="text-xs md:text-sm lg:text-sm text-gray-600">{issuer}</h4>
            </div>

            <div className="border-t border-gray-200 flex justify-end mt-4 pt-4">
                <a className="text-xs md:text-sm lg:text-sm text-gray-600 flex hover:text-black">
                    <span>verify</span>
                    <ArrowTrendingUpIcon className="w-4 text-gray-600 hover:text-black" />
                </a>
            </div>
        </li>
    );

}

export default EducationAndCertificationsItem;