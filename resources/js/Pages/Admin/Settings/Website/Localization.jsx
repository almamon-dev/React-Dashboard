import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { Globe2, Clock, Calendar, Coins, Home, Save, ChevronDown, Languages, Hash } from 'lucide-react';

export default function Localization() {
    const [formData, setFormData] = useState({
        timezone: '(UTC+06:00) Astana, Dhaka',
        default_language: 'English (US)',
        date_format: 'DD/MM/YYYY',
        time_format: '12-hour (AM/PM)',
        currency: 'USD ($)',
        currency_position: 'Left',
        thousand_separator: ',',
        decimal_separator: '.',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Localization Data Saved:', formData);
        alert('Localization settings updated successfully!');
    };

    return (
        <AdminLayout>
            <Head title="Localization Settings" />
            
            <form onSubmit={handleSubmit} className="space-y-6 pb-20">
                {/* Header & Breadcrumb */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <h1 className="text-[22px] font-bold text-[#2f3344]">Localization Settings</h1>
                        <div className="flex items-center gap-2 text-[13px] text-[#727586] mt-1">
                            <Home size={14} />
                            <span className="text-[#c3c4ca]">-</span>
                            <span>Settings</span>
                            <span className="text-[#c3c4ca]">-</span>
                            <span>Website</span>
                            <span className="text-[#c3c4ca]">-</span>
                            <span>Localization</span>
                        </div>
                    </div>
                    <button 
                        type="submit"
                        className="bg-[#673ab7] text-white px-8 py-[10px] rounded-[6px] font-bold text-[14px] hover:bg-[#5e35b1] transition-all shadow-sm flex items-center gap-2"
                    >
                        <Save size={18} />
                        Save Changes
                    </button>
                </div>

                {/* Regional Settings */}
                <div className="bg-white rounded-[10px] border border-[#e3e4e8] shadow-sm overflow-hidden">
                    <div className="px-7 py-5 border-b border-[#e3e4e8]">
                        <div className="flex items-center gap-2">
                            <Globe2 size={20} className="text-[#673ab7]" />
                            <h2 className="text-[18px] font-bold text-[#2f3344]">Regional Settings</h2>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            <div className="space-y-2">
                                <label className="text-[14px] font-bold text-[#2f3344]">Default Language</label>
                                <div className="relative">
                                    <select 
                                        name="default_language"
                                        value={formData.default_language}
                                        onChange={handleInputChange}
                                        className="w-full h-[45px] pl-11 pr-4 bg-white border border-[#e3e4e8] rounded-[6px] text-[14px] text-[#2f3344] focus:outline-none focus:border-[#673ab7] appearance-none cursor-pointer"
                                    >
                                        <option>English (US)</option>
                                        <option>Bengali</option>
                                        <option>Spanish</option>
                                        <option>French</option>
                                    </select>
                                    <Languages size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a0a3af] pointer-events-none" />
                                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#727586] pointer-events-none" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[14px] font-bold text-[#2f3344]">Systems Timezone</label>
                                <div className="relative">
                                    <select 
                                        name="timezone"
                                        value={formData.timezone}
                                        onChange={handleInputChange}
                                        className="w-full h-[45px] pl-11 pr-4 bg-white border border-[#e3e4e8] rounded-[6px] text-[14px] text-[#2f3344] focus:outline-none focus:border-[#673ab7] appearance-none cursor-pointer"
                                    >
                                        <option>(UTC+06:00) Astana, Dhaka</option>
                                        <option>(UTC+00:00) London</option>
                                        <option>(UTC-05:00) New York</option>
                                        <option>(UTC+09:00) Tokyo</option>
                                    </select>
                                    <Clock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a0a3af] pointer-events-none" />
                                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#727586] pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Date & Time Format */}
                <div className="bg-white rounded-[10px] border border-[#e3e4e8] shadow-sm overflow-hidden">
                    <div className="px-7 py-5 border-b border-[#e3e4e8]">
                        <div className="flex items-center gap-2">
                            <Calendar size={20} className="text-[#673ab7]" />
                            <h2 className="text-[18px] font-bold text-[#2f3344]">Date & Time Format</h2>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            <div className="space-y-2">
                                <label className="text-[14px] font-bold text-[#2f3344]">Date Format</label>
                                <div className="relative">
                                    <select 
                                        name="date_format"
                                        value={formData.date_format}
                                        onChange={handleInputChange}
                                        className="w-full h-[45px] px-4 bg-white border border-[#e3e4e8] rounded-[6px] text-[14px] text-[#2f3344] focus:outline-none focus:border-[#673ab7] appearance-none cursor-pointer"
                                    >
                                        <option>DD/MM/YYYY (31/01/2026)</option>
                                        <option>MM/DD/YYYY (01/31/2026)</option>
                                        <option>YYYY-MM-DD (2026-01-31)</option>
                                        <option>MMMM D, YYYY (January 31, 2026)</option>
                                    </select>
                                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#727586] pointer-events-none" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[14px] font-bold text-[#2f3344]">Time Format</label>
                                <div className="relative">
                                    <select 
                                        name="time_format"
                                        value={formData.time_format}
                                        onChange={handleInputChange}
                                        className="w-full h-[45px] px-4 bg-white border border-[#e3e4e8] rounded-[6px] text-[14px] text-[#2f3344] focus:outline-none focus:border-[#673ab7] appearance-none cursor-pointer"
                                    >
                                        <option>12-hour (09:00 PM)</option>
                                        <option>24-hour (21:00)</option>
                                    </select>
                                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#727586] pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Currency & Financial Formatting */}
                <div className="bg-white rounded-[10px] border border-[#e3e4e8] shadow-sm overflow-hidden">
                    <div className="px-7 py-5 border-b border-[#e3e4e8]">
                        <div className="flex items-center gap-2">
                            <Coins size={20} className="text-[#673ab7]" />
                            <h2 className="text-[18px] font-bold text-[#2f3344]">Currency & Numbers</h2>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
                            <div className="space-y-2 lg:col-span-2">
                                <label className="text-[14px] font-bold text-[#2f3344]">Default Currency</label>
                                <div className="relative">
                                    <select 
                                        name="currency"
                                        value={formData.currency}
                                        onChange={handleInputChange}
                                        className="w-full h-[45px] px-4 bg-white border border-[#e3e4e8] rounded-[6px] text-[14px] text-[#2f3344] focus:outline-none focus:border-[#673ab7] appearance-none cursor-pointer"
                                    >
                                        <option>USD ($)</option>
                                        <option>BDT (৳)</option>
                                        <option>EUR (€)</option>
                                        <option>GBP (£)</option>
                                    </select>
                                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#727586] pointer-events-none" />
                                </div>
                            </div>
                            <div className="space-y-2 lg:col-span-2">
                                <label className="text-[14px] font-bold text-[#2f3344]">Currency Symbol Position</label>
                                <div className="relative">
                                    <select 
                                        name="currency_position"
                                        value={formData.currency_position}
                                        onChange={handleInputChange}
                                        className="w-full h-[45px] px-4 bg-white border border-[#e3e4e8] rounded-[6px] text-[14px] text-[#2f3344] focus:outline-none focus:border-[#673ab7] appearance-none cursor-pointer"
                                    >
                                        <option>Left ($100)</option>
                                        <option>Right (100$)</option>
                                        <option>Left with Space ($ 100)</option>
                                        <option>Right with Space (100 $)</option>
                                    </select>
                                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#727586] pointer-events-none" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[14px] font-bold text-[#2f3344]">Thousand Separator</label>
                                <div className="relative">
                                    <input 
                                        name="thousand_separator"
                                        type="text" 
                                        value={formData.thousand_separator}
                                        onChange={handleInputChange}
                                        className="w-full h-[45px] pl-11 pr-4 bg-white border border-[#e3e4e8] rounded-[6px] text-[14px] text-[#2f3344] focus:outline-none focus:border-[#673ab7] transition-all"
                                    />
                                    <Hash size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a0a3af]" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[14px] font-bold text-[#2f3344]">Decimal Separator</label>
                                <div className="relative">
                                    <input 
                                        name="decimal_separator"
                                        type="text" 
                                        value={formData.decimal_separator}
                                        onChange={handleInputChange}
                                        className="w-full h-[45px] pl-11 pr-4 bg-white border border-[#e3e4e8] rounded-[6px] text-[14px] text-[#2f3344] focus:outline-none focus:border-[#673ab7] transition-all"
                                    />
                                    <Hash size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a0a3af]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </AdminLayout>
    );
}
