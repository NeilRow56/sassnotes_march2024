import { SiteNavbar } from '@/components/dashboard/SiteNavbar'

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-100 dark:bg-slate-900">
      <SiteNavbar />
      <main className="">{children}</main>
    </div>
  )
}

export default SiteLayout
