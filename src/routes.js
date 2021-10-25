import Dashboard from "./screens/Dashboard/index";
import MostAttackByCountry from "./screens/MostAttackByCountry/index";
import DashboardIcon from '@mui/icons-material/Dashboard';
import FlagIcon from '@mui/icons-material/Flag';

export const routes = [
    {
      path: "/",
      name: "Dashboard",
      icon: <DashboardIcon/>,
      component: Dashboard,
      layout: "/admin",
      module: "DASHBOARD",
      showVisible: true,
    },
    {
        path: "/most-attack-country",
        name: "Most Attack By Country",
        icon: <FlagIcon/>,
        component: MostAttackByCountry,
        layout: "/admin",
        module: "MOSTATTACKCOUNTRY",
        showVisible: true,
    }
]
