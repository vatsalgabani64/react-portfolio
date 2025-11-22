import { IconType } from "react-icons";
import { FaCode } from "react-icons/fa6";
import { IoCallOutline, IoPersonOutline } from "react-icons/io5";
import { PiSuitcaseSimple } from "react-icons/pi";
export type SectionId = 'introduction' | 'about' | 'experience' | 'projects' | 'contact';

export interface INavbarItem{
    id: SectionId;
    title: string;
    icon: IconType;
}
export const navbarItems: INavbarItem[]  = [
    {id: 'about',title: "About", icon:IoPersonOutline},
    {id: 'experience',title: "Experience", icon:PiSuitcaseSimple},
    {id: 'projects',title: "Projects", icon:FaCode},
    {id: 'contact',title: "Contact", icon:IoCallOutline},
];