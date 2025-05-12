import { Link } from 'react-router-dom';
import { LogoIcon, LogoText } from './Icons';
function AppLogo() {
  return (
    <Link to="/" className="flex items-center gap-2">
        <LogoIcon/>
        <LogoText/>
  </Link>
  )
}

export default AppLogo