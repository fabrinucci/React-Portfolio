import { RiMailLine, RiTwitterLine, RiWhatsappLine } from 'react-icons/ri';
const mail = "fabrinuccidev@gmail.com";
const twitter = "FabrizioDev";
const whatsapp = "+54 9 376 485-3252";
const className = "contact__option-icon"

export const dataContact = [
  {
    id: 1,
    icon: <RiMailLine className={ className } />,
    title: 'Email',
    contact: `${ mail }`,
    href: `mailto:${ mail }`,
  },
  {
    id: 2,
    icon: <RiTwitterLine className={ className } />,
    title: 'Twitter',
    contact: `@${ twitter }`,
    href: `https://twitter.com/${ twitter }`,
  },
  {
    id: 3,
    icon: <RiWhatsappLine className={ className } />,
    title: 'Whatsapp',
    contact: `${ whatsapp }`,
    href: `https://api.whatsapp.com/send?phone=${ whatsapp }`,
  },
]