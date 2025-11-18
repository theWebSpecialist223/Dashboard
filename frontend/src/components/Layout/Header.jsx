import {
  Bell,
  ChevronDown,
  Filter,
  Menu,
  Plus,
  Search,
  Settings,
  Sun,
} from "lucide-react";

function Header() {
  return (
    <div
      className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50
    dark:border-slate-700/50 px-6 py-4"
    >
      <div className="flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center space-x-4">
          <button
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100
          dark:hover:bg-slate-800 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="hidden md:block">
            <h1 className="text-2xl font-black text-slate-800 dark:text-slate-200">
              Dashboard
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Welcome Back Lordshare, Here`s whats happening today
            </p>
          </div>
        </div>

        {/* Center */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border 
            border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-800
            dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500
            focus:border-transparent transition-all"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-slate-400 
            hover:text slate-600 dark:hover:text-slate-300 transition-colors"
            >
              <Filter />
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-3">
          {/* Quick Action */}

          <button
            className="hidden lg:flex items-center space-x-2 py-2 px-4 bg-linear-t0-r 
          from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all"
          >
            <Plus className="w-4 h-4" />
            <span className="font-medium text-sm">New</span>
          </button>

          {/* Toggle */}
          <button
            className="p-2.5 roundel-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100
          dark:hover:bg-slate-800 transition-colors"
          >
            <Sun />
          </button>
          {/* Notification */}
          <button
            className="relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300
          hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Bell className="w-5 h-5 text-slate-600 dark:text-slate-300 hover:text-slate-800" />
            <span className="absolute -top-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          {/* Settings */}

          <button
            className=" p-2.5 rounded-xl text-slate-600 dark:text-slate-300
          hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Settings className="w-5 h-5 " />
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3 pl-3 border-l border-slate-200 dark:border-slate-700">
            <img
              alt="User"
              src="https://scontent.fhre2-2.fna.fbcdn.net/v/t39.30808-6/546231787_4051913301725153_4995135265988131344_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=bZJffhYECJsQ7kNvwGf6ipX&_nc_oc=AdkqfR8XLTH13kQh1wKmM17vlDwxoLQUzzglpYN_LCGsL1q8i7CF8HKU0oH8KDw9z_Q&_nc_zt=23&_nc_ht=scontent.fhre2-2.fna&_nc_gid=tZoBsUJy3ja5oQVwyK4lQg&oh=00_Afi40FyHYaBUbGcb1d4_MJZZP0f7bCibB1Doi4sI7PdtUA&oe=6920DC69"
              className="w-8 h-8 rounded-full ring-2 ring-blue-500"
            />
            <div className="hidden md:block">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Lordshare Chida
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Adminstrator
              </p>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
