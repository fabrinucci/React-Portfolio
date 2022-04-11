import { BsFillPatchCheckFill } from 'react-icons/bs';
const className = "experience__details-icon"

export const dataExperience = [
  {
    id: 1,
    title: 'Frontend Development',
    info: [
      {
        id: 1,
        icon: <BsFillPatchCheckFill className={ className } />,
        name: 'HTML',
        level: 'Experienced',
      },
      {
        id: 2,
        icon: <BsFillPatchCheckFill className={ className } />,
        name: 'CSS',
        level: 'Experienced',
      },
      {
        id: 3,
        icon: <BsFillPatchCheckFill className={ className } />,
        name: 'JavaScript',
        level: 'Intermediate',
      },
      {
        id: 4,
        icon: <BsFillPatchCheckFill className={ className } />,
        name: 'SASS',
        level: 'Experienced',
      },
      {
        id: 5,
        icon: <BsFillPatchCheckFill className={ className } />,
        name: 'React',
        level: 'Experienced',
      },
      {
        id: 6,
        icon: <BsFillPatchCheckFill className={ className } />,
        name: 'Testing',
        level: 'Intermediate',
      },
    ],
  },
  {
    id: 2,
    title: 'Backend Development',
    info: [
      {
        id: 1,
        icon: <BsFillPatchCheckFill className={ className } />,
        name: 'Node',
        level: 'Experienced',
      },
      {
        id: 2,
        icon: <BsFillPatchCheckFill className={ className } />,
        name: 'Python',
        level: 'Intermediate',
      },
      {
        id: 3,
        icon: <BsFillPatchCheckFill className={ className } />,
        name: 'MySQL',
        level: 'Intermediate',
      },
      {
        id: 4,
        icon: <BsFillPatchCheckFill className={ className } />,
        name: 'MongoDB',
        level: 'Experienced',
      },
      {
        id: 5,
        icon: <BsFillPatchCheckFill className={ className } />,
        name: 'PHP',
        level: 'Basic',
      },
    ],
  }
]