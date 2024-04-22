import Image from "next/image";
import Link from "next/link";

export default function CompaniesEntry({href, logoUrl, name, url}){
    return(
        <div className="flex flex-row p-1">
            <Image src={logoUrl} width="40" height="30" alt="Company logo" className="p-1 rounded shadow mr-2"></Image>
            <div className="flex flex-col justify-center">
                <Link href={`${href}`} passHref className="hover:underline">
                {name}
                </Link>
                <div className="text-[#666666] text-[9pt]">{url}</div>
            </div>
        </div>
    );
}