import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'
import { APP_NAME } from '@/lib/constants'
import { SelectTrigger } from '@radix-ui/react-select'
import { ChevronDown, SearchIcon } from 'lucide-react'

const Search = () => {
  const categories = ['Men', 'Women', 'Kids', 'Accessories']
  return (
    <form action='/search' className='flex items-stretch h-10'>
      <Select name='category'>
        <SelectTrigger className='w-auto h-full ps-2 dark:border-gray-200 bg-gray-100 text-black border-r flex items-center gap-1 rounded-r-none rounded-l-md rtl:rounded-r-md rtl:rounded-l-none  '>
          <SelectValue placeholder={'All'} />
          <ChevronDown className='mr-2 h-4 w-4' />
        </SelectTrigger>
        <SelectContent position='popper'>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        className='flex-1 rounded-none dark:border-gray-200 bg-gray-100 text-black text-base h-full'
        placeholder={`Search Site ${APP_NAME}`}
        name='q'
        type='search'
      />
      <button
        type='submit'
        className='bg-primary text-primary-foreground text-black rounded-s-none rounded-e-md h-full px-3 py-2 '
      >
        <SearchIcon className='w-6 h-6' />
      </button>
    </form>
  )
}

export default Search
