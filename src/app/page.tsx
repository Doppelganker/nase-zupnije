import { Card, CardHeader, Divider } from '@nextui-org/react'

export default function Home() {
  return (
    <main className='grid grid-cols-2 items-center justify-between p-12 w-full'>
      <Card className='w-[400px] h-[250px] m-4'>
        <CardHeader>Dogodek</CardHeader>
      </Card>
      <Card className='w-[400px] h-[250px] m-4'>
        <CardHeader>Dogodek</CardHeader>
      </Card>
      <Divider></Divider>
      <Divider></Divider>
      <Card className='w-[400px] h-[250px] m-4'>
        <CardHeader>Novice</CardHeader>
      </Card>
      <Card className='w-[400px] h-[250px] m-4'>
        <CardHeader>Novice</CardHeader>
      </Card>
      <Card className='w-[400px] h-[250px] m-4'>
        <CardHeader>Novice</CardHeader>
      </Card>
      <Card className='w-[400px] h-[250px] m-4'>
        <CardHeader>Novice</CardHeader>
      </Card>
    </main>
  )
}
