import { Navbar } from "@/components/Navbar";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-100 dark:bg-slate-900">
      <Navbar />
      <main className="">{children}</main>
    </div>
  );
};

export default LandingPageLayout;
