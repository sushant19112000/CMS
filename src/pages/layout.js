import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './globals.css'
import { Navigation } from '@/app/components/navigation'
import BootstrapClient from '@/app/components/BootstrapClient.js';
import { useRouter } from 'next/router';
import { Newfooter } from '@/app/components/newfooter';


export default function RootLayout({ children }) {
  const router = useRouter();
  const isAdminPage=router.pathname.includes('admin')
  const isMailerPage = router.pathname.startsWith('/mailer/')
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh", backgroundColor: '#ffffff', boxShadow: '' }}>
      {!isMailerPage && !isAdminPage && (
        <div style={{ backgroundColor: '#ffffff' }} className='sticky-top'>
          <div className='container'>
            <Navigation />
          </div>
        </div>
      )}
      <main className="flex-grow-1" style={{ backgroundColor: '#f3f4f6' }}>
        <div className=''>
            {children} 
        </div>

      </main>
      {!isMailerPage && !isAdminPage && <Newfooter />}
      <BootstrapClient />
    </div>
  );
}

export const useClient = true;
