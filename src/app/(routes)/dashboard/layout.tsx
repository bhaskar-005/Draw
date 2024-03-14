import Sidebar from '@/_components/Sidebar';
import { getUserInformation } from '@/lib/controller/userController';


interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {

    
  return (
        <div className="flex flex-row ">
        <div className="lg:sticky fixed h-[100vh] top-0 left-0  z-50">
          <Sidebar/>
        </div>
        <div className="flex flex-1 max-w-full justify-center">
          <div className="max-w-screen-lg w-full mx-2">
            {props.children}
           </div>
        </div>
      </div>
    );
}

export default DashboardLayout;
