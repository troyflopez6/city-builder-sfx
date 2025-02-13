import CityBuilderForm from '@/components/CityBuilderForm/CityBuilderForm';
import CityList from '@/components/CityList/CityList';

export default function Home() {
  return (
    <main className='p-3 flex gap-10 h-[calc(100vh-4rem)]'>
      <CityBuilderForm />
      <CityList />
    </main>
  )
}
