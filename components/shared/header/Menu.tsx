import { ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'

const Menu = () => {
  return (
    <div className='flex justify-end'>
      <nav className='flex gap-3 w-full'>
        <Link href='/signin' className='header-button flex items-center'>
          Hello, Sign In
        </Link>

        <Link href='/cart' className='header-button'>
          <div className='flex items-end gap-2'>
            <ShoppingCartIcon className='h-6 w-6' />
            Cart
          </div>
        </Link>
      </nav>
    </div>
  )
}

export default Menu
