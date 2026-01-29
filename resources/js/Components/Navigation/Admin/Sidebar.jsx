import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { 
    Home, Globe, LayoutGrid, Waves, Mail, 
    Cloud, CreditCard, Store, ChevronRight, ChevronsLeft,
    Settings, ShieldCheck, DollarSign, Cog, Users, FolderTree
} from "lucide-react";

const Sidebar = ({ isCollapsed, toggleCollapse }) => {
    const { url, props } = usePage();
    const { sidebarCategories = [], auth } = props;
    const currentPath = url.split("?")[0];
    const userPermissions = auth.user?.permissions || [];

    const [openMenus, setOpenMenus] = useState(() => {
        // Initialize open menus based on current path
        if (currentPath.startsWith('/admin/categories') || currentPath.startsWith('/admin/sub-categories') || currentPath.startsWith('/admin/blogs')) {
            return { content: true };
        }
        if (currentPath.startsWith('/admin/roles') || currentPath.startsWith('/admin/permissions') || currentPath.startsWith('/admin/users')) {
            return { account: true };
        }
        if (currentPath.startsWith('/admin/billing')) {
            return { billing: true };
        }
        return {};
    });

    const menuItems = [
        { label: "Home", path: "/dashboard", icon: <Home />, route: "dashboard" },
        { label: "Websites", path: "/admin/websites", icon: <LayoutGrid />, route: "websites.*" },
        { label: "Domains", path: "/admin/domains", icon: <Globe />, route: "domains.*" },
        { label: "Horizons", path: "/admin/horizons", icon: <Waves />, route: "horizons.*" },
        { label: "Emails", path: "/admin/emails", icon: <Mail />, route: "emails.*" },
        { label: "VPS", path: "/admin/vps", icon: <Cloud />, route: "vps.*" },
        { 
            label: "Billing", 
            icon: <CreditCard />, 
            key: "billing",
            children: [
                { label: "Invoices", path: "/admin/billing/invoices", icon: <CreditCard size={16} /> },
                { label: "Payment Methods", path: "/admin/billing/methods", icon: <DollarSign size={16} /> },
            ]
        },
        { 
            label: "Content", 
            icon: <LayoutGrid />, 
            key: "content",
            children: [
                { label: "Categories", path: "/admin/categories", icon: <LayoutGrid size={16} />, route: "admin.categories.*", permission: "categories.view" },
                { label: "Subcategories", path: "/admin/sub-categories", icon: <FolderTree size={16} />, route: "admin.sub-categories.*", permission: "categories.view" },
                { label: "Blogs", path: "/admin/blogs", icon: <Mail size={16} />, route: "admin.blogs.*", permission: "blogs.view" },
            ]
        },
        { 
            label: "Account", 
            icon: <Users />, 
            key: "account",
            children: [
                { label: "Users", path: "/admin/users", icon: <Users size={16} />, route: "admin.users.*", permission: "users.view" },
                { label: "Account Sharing", path: "/admin/roles", icon: <ShieldCheck size={16} />, route: "admin.roles.*", permission: "roles.view" },
                { label: "Permissions", path: "/admin/permissions", icon: <ShieldCheck size={16} />, route: "admin.permissions.*", permission: "permissions.view" },
            ]
        },
        { label: "All services", path: "/admin/services", icon: <Store />, route: "services.*" },
    ];

    const hasPermission = (permission) => {
        if (!permission) return true;
        return userPermissions.includes(permission);
    };

    const filteredMenuItems = menuItems.map(item => {
        if (item.children) {
            const filteredChildren = item.children.filter(child => hasPermission(child.permission));
            if (filteredChildren.length === 0) return null;
            return { ...item, children: filteredChildren };
        }
        return hasPermission(item.permission) ? item : null;
    }).filter(Boolean);

    const checkActive = (item) => {
        if (typeof route !== 'undefined' && item.route) {
            if (route().current(item.route)) return true;
        }
        return currentPath === item.path;
    };

    return (
        <div className="flex flex-col h-full bg-white relative">
            {/* Collapse Toggle Button */}
            <button 
                onClick={toggleCollapse}
                className="absolute -right-3.5 top-5 z-50 w-7 h-7 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-[#0a66c2] shadow-sm transition-transform duration-300"
                style={{ transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
                <ChevronsLeft size={14} strokeWidth={3} />
            </button>

            {/* Logo Section */}
            <div className={`h-[70px] flex items-center px-6 transition-all duration-300 ${isCollapsed ? 'justify-center px-0' : 'justify-start'}`}>
                <div className="min-w-[35px] w-[35px] h-[35px] bg-[#673ab7] rounded-lg flex items-center justify-center text-white shadow-sm">
                    <Cloud size={20} fill="currentColor" />
                </div>
                {!isCollapsed && (
                    <span className="ml-3 font-bold text-slate-800 text-lg tracking-tight animate-in fade-in duration-500">
                        Admin<span className="text-slate-400 font-normal">Panel</span>
                    </span>
                )}
            </div>

            {/* Navigation */}
            <nav className="flex-1 flex flex-col pt-4 overflow-y-auto no-scrollbar px-2 space-y-1">
                {filteredMenuItems.map((item) => {
                    const active = checkActive(item);
                    const isOpen = openMenus[item.key];
                    
                    // If item has children (nested menu)
                    if (item.children) {
                        return (
                            <div key={item.label}>
                                <button
                                    onClick={() => setOpenMenus(prev => ({ ...prev, [item.key]: !prev[item.key] }))}
                                    className={`w-full flex transition-all duration-200 group relative rounded-xl
                                        ${isCollapsed 
                                            ? 'flex-col items-center justify-center py-4 px-1' 
                                            : 'flex-row items-center py-3 px-4'}
                                        ${active || isOpen
                                            ? 'bg-[#673ab7]/10 text-[#673ab7]' 
                                            : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
                                >
                                    {/* Icon */}
                                    <div className={`${isCollapsed ? 'mb-1' : 'mr-3'} transition-transform duration-200 group-hover:scale-110`}>
                                        {React.cloneElement(item.icon, { 
                                            size: isCollapsed ? 24 : 20, 
                                            strokeWidth: active || isOpen ? 2 : 1.5 
                                        })}
                                    </div>

                                    {/* Label */}
                                    <span className={`font-medium leading-tight transition-all duration-300
                                        ${isCollapsed ? 'text-[10px] text-center' : 'text-[14px] flex-1 text-left'}
                                        ${active || isOpen ? 'text-[#673ab7]' : 'text-slate-600'}`}>
                                        {item.label}
                                    </span>

                                    {/* Chevron for expandable */}
                                    {!isCollapsed && (
                                        <ChevronRight 
                                            size={16} 
                                            className={`transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
                                        />
                                    )}

                                    {/* Tooltip for Collapsed State */}
                                    {isCollapsed && (
                                        <div className="absolute left-full ml-4 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                                            {item.label}
                                        </div>
                                    )}
                                </button>

                                {/* Sub-menu items */}
                                {!isCollapsed && isOpen && (
                                    <div className="ml-4 mt-1 space-y-0.5 pl-3">
                                        {item.children.map(child => (
                                            <Link
                                                key={child.label}
                                                href={child.path}
                                                className={`flex items-center gap-3 py-2.5 px-3 rounded-lg text-[13px] transition-all hover:bg-slate-50
                                                    ${(currentPath === child.path || (child.route && typeof route !== 'undefined' && route().current(child.route))) ? 'text-[#673ab7] bg-[#673ab7]/5 font-semibold' : 'text-slate-600'}`}
                                            >
                                                {child.icon}
                                                <span>{child.label}</span>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    }

                    // Regular menu item (no children)
                    return (
                        <Link
                            key={item.label}
                            href={item.path}
                            className={`flex transition-all duration-200 group relative rounded-xl
                                ${isCollapsed 
                                    ? 'flex-col items-center justify-center py-4 px-1' 
                                    : 'flex-row items-center py-3 px-4'}
                                ${active 
                                    ? 'bg-[#673ab7]/10 text-[#673ab7]' 
                                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
                        >
                            {/* Icon */}
                            <div className={`${isCollapsed ? 'mb-1' : 'mr-3'} transition-transform duration-200 group-hover:scale-110`}>
                                {React.cloneElement(item.icon, { 
                                    size: isCollapsed ? 24 : 20, 
                                    strokeWidth: active ? 2 : 1.5 
                                })}
                            </div>

                            {/* Label */}
                            <span className={`font-medium leading-tight transition-all duration-300
                                ${isCollapsed ? 'text-[10px] text-center' : 'text-[14px]'}
                                ${active ? 'text-[#673ab7]' : 'text-slate-600'}`}>
                                {item.label}
                            </span>

                            {/* Tooltip for Collapsed State */}
                            {isCollapsed && (
                                <div className="absolute left-full ml-4 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                                    {item.label}
                                </div>
                            )}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
};

export default Sidebar;
