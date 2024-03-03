import { Navbar } from '@/components/Navbar'

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      <main className="">{children}</main>
    </div>
  )
}

export default LandingPageLayout
