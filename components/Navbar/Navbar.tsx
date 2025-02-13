import { FC } from 'react'

interface NavbarProps {
  
}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className='w-screen h-16 bg-gray-300 text-red-500 text-2xl font-bold flex items-center p-5'>
        City Builder
    </nav>
  )}

export default Navbar