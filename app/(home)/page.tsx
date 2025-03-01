import HomeCarousel from '@/components/shared/home/HomeCarousel'
import data from '@/lib/data'

export default async function Home() {
  return <HomeCarousel items={data.carousels} />
}
