import { ChevronDown, Menu, Zap } from "lucide-react";
import {
  BarChart3,
  Calendar,
  CreditCard,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Package,
  Settings,
  ShoppingBag,
  Users,
} from "lucide-react";

const MenuItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    active: true,
    badge: "New",
  },
  {
    id: "Analytics",
    icon: BarChart3,
    label: "Analytics",
    submenu: [
      { id: "overview", label: "Overview" },
      { id: "reports", label: "Reports" },
      { id: "insights", label: "insights" },
    ],
  },
  {
    id: "users",
    icon: Users,
    label: "Users",
    count: "2.4k",
    submenu: [
      { id: "all-users", label: "All Users" },
      { id: "roles", label: "Roles And Permissions" },
      { id: "activity", label: "User Activity" },
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    label: "E-Commerce",
    submenu: [
      { id: "products", label: "Products" },
      { id: "orders", label: "Orders" },
      { id: "customers", label: "Customers" },
    ],
  },
  {
    id: "inventory",
    icon: Package,
    label: "Inventory",
  },
  {
    id: "transactions",
    icon: CreditCard,
    label: "Transactions",
  },
  {
    id: "messages",
    icon: MessageSquare,
    label: "Messages",
    badge: "12",
  },
  {
    id: "calendar",
    icon: Calendar,
    label: "Calendar",
  },
  {
    id: "reports",
    icon: FileText,
    label: "Reports",
  },
  {
    id: "settings",
    icon: Settings,
    label: "Settings",
  },
];

function Sidebar() {
  return (
    <div
      className="w-72 transition duration-300 ease-in-out bg-white/80 dark:bg-slate-900 
    backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col
    relative z-10"
    >
      {/*Logo Area*/}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div
            className="w-10 h-10 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl
          flex items-center justify-center shadow-lg"
          >
            <Zap className="w-6 h-6 text-white" />
          </div>
          {/*Conditional Rendering */}
          <div>
            <h1 className="text-xl font-bold text-slate-800 dark:text-white">
              Mooza Group
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Admin Panel
            </p>
          </div>
        </div>
      </div>
      {/*Navigation*/}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {MenuItems.map((item) => {
          return (
            <div key={item.id}>
              <button
                className={`w-full flex items-center p-3 justify-between rounded-xl transition-all
                  duration-200`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className={`w-5 h-5`} />
                  {/* Conditional Rendering */}
                  <>
                    <span className="font-medium ml-2 dark:text-slate-200">
                      {item.label}
                    </span>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}

                    {item.count && (
                      <span className="px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 
                      rounded-full">
                        {item.count}
                      </span>
                    )}
                  </>
                </div>
                {/* Submenu Indicator */}
                {item.submenu && (
                  <ChevronDown className="w-4 h-4 transition-transform text-white" />
                )}
              </button>
              {/* Submenu Items */}
              <div className="ml-8 mt-2 space-y-1">
                {/* {item.submenu.map((subItem) => {
                  return (
                    <button>{subItem.label}</button>
                  )
                })} */}
              </div>
            </div>
          );
        })}
      </nav>

      {/*User Profile*/}
      <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
        <div
          className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 
        dark:bg-slate-800/50"
        >
          <img
            src="https://scontent.fhre2-2.fna.fbcdn.net/v/t39.30808-6/546231787_4051913301725153_4995135265988131344_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=bZJffhYECJsQ7kNvwGf6ipX&_nc_oc=AdkqfR8XLTH13kQh1wKmM17vlDwxoLQUzzglpYN_LCGsL1q8i7CF8HKU0oH8KDw9z_Q&_nc_zt=23&_nc_ht=scontent.fhre2-2.fna&_nc_gid=tZoBsUJy3ja5oQVwyK4lQg&oh=00_Afi40FyHYaBUbGcb1d4_MJZZP0f7bCibB1Doi4sI7PdtUA&oe=6920DC69"
            alt=""
            className="w-10 h-10 rounded-full ring-2 ring-blue-500"
          />
          <div className="flex-1 min-w-0">
            <div className="flex-1 min-w-1">
              <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
                Lordshare Chida
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                Adminstrator
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
