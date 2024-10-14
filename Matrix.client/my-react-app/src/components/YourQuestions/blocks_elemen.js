import { CgWebsite } from "react-icons/cg";
import { GrServices } from "react-icons/gr";
import { MdNewspaper } from "react-icons/md";
import { MdDeveloperMode } from "react-icons/md";

const blocks_elem = [
    {
        id:1,
        text:"Как должен выглядеть ваш сайт",
        Icon: CgWebsite,
    },
    {
        id:2,
        text:"Как выгодно показать клиентам свои услуги",
        Icon:GrServices ,
    },
    {
        id:3,
        text:"На какие страницы и как вести рекламу",
        Icon: MdNewspaper ,
    },
    {
        id:4,
        text:"Как сделать сайт актуальным на ближайшие пару лет",
        Icon: MdDeveloperMode,
    },

]

export default blocks_elem;