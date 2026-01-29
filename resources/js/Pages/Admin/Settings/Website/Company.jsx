import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { Building2, Mail, Phone, Globe, MapPin, Hash, Briefcase, Clock, Home, Save, CheckCircle2 } from 'lucide-react';

export default function CompanySettings() {
    const [formData, setFormData] = useState({
        company_name: 'Almamon Softwares Ltd.',
        legal_name: 'Almamon Tech Solutions Inc.',
        company_email: 'hello@almamon.dev',
        company_phone: '+880 1234 567 890',
        registration_no: 'REG-2026-X990',
        tax_id: 'TAX-8822-001',
        website: 'https://almamon.dev',
        address: '123 Tech Square, Digital City, Dhaka, Bangladesh',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Company Data Saved:', formData);
        alert('Company information updated successfully!');
    };

    return (
        <AdminLayout>
            <Head title="Company Settings" />
            
            <form onSubmit={handleSubmit} className="space-y-6 pb-20">
                {/* Header & Breadcrumb */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <h1 className="text-[22px] font-bold text-[#2f3344]">Company Settings</h1>
                        <div className="flex items-center gap-2 text-[13px] text-[#727586] mt-1">
                            <Home size={14} />
                            <span className="text-[#c3c4ca]">-</span>
                            <span>Settings</span>
                            <span className="text-[#c3c4ca]">-</span>
                            <span>Website</span>
                            <span className="text-[#c3c4ca]">-</span>
                            <span>Company</span>
                        </div>
                    </div>
                    <button 
                        type="submit"
                        className="bg-[#673ab7] text-white px-8 py-[10px] rounded-[6px] font-bold text-[14px] hover:bg-[#5e35b1] transition-all shadow-sm flex items-center gap-2"
                    >
                        <Save size={18} />
                        Save Company Info
                    </button>
                </div>

                {/* Basic Legal Information */}
                <div className="bg-white rounded-[10px] border border-[#e3e4e8] shadow-sm overflow-hidden">
                    <div className="px-7 py-5 border-b border-[#e3e4e8]">
                        <div className="flex items-center gap-2">
                            <Building2 size={20} className="text-[#673ab7]" />
                            <h2 className="text-[18px] font-bold text-[#2f3344]">Legal Identity</h2>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            <div className="space-y-2">
                                <label className="text-[14px] font-bold text-[#2f3344]">Display Name</label>
                                <input 
                                    name="company_name"
                                    type="text" 
                                    value={formData.company_name}
                                    onChange={handleInputChange}
                                    className="w-full h-[45px] px-4 bg-white border border-[#e3e4e8] rounded-[6px] text-[14px] text-[#2f3344] focus:outline-none focus:border-[#673ab7] transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[14px] font-bold text-[#2f3344]">Legal / Registered Name</label>
                                <input 
                                    name="legal_name"
                                    type="text" 
                                    value={formData.legal_name}
                                    onChange={handleInputChange}
                                    className="w-full h-[45px] px-4 bg-white border border-[#e3e4e8] rounded-[6px] text-[14px] text-[#2f3344] focus:outline-none focus:border-[#673ab7] transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[14px] font-bold text-[#2f3344]">Registration Number</label>
                                <div className="relative">
                                    <input 
                                        name="registration_no"
                                        type="text" 
                                        value={formData.registration_no}
                                        onChange={handleInputChange}
                                        className="w-full h-[45px] pl-11 pr-4 bg-white border border-[#e3e4e8] rounded-[6px] text-[14px] text-[#2f3344] focus:outline-none focus:border-[#673ab7] transition-all"
                                    />
                                    <Briefcase size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a0a3af]" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[14px] font-bold text-[#2f3344]">Tax / VAT ID</label>
                                <div className="relative">
                                    <input 
                                        name="tax_id"
                                        type="text" 
                                        value={formData.tax_id}
                                        onChange={handleInputChange}
                                        className="w-full h-[45px] pl-11 pr-4 bg-white border border-[#e3e4e8] rounded-[6px] text-[14px] text-[#2f3344] focus:outline-none focus:border-[#673ab7] transition-all"
                                    />
                                    <Hash size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a0a3af]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Communication & Location */}
                <div className="bg-white rounded-[10px] border border-[#e3e4e8] shadow-sm overflow-hidden">
                    <div className="px-7 py-5 border-b border-[#e3e4e8]">
                        <div className="flex items-center gap-2">
                            <Mail size={20} className="text-[#673ab7]" />
                            <h2 className="text-[18px] font-bold text-[#2f3344]">Contact & Location</h2>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            <div className="space-y-2">
                                <label className="text-[14px] font-bold text-[#2f3344]">Official Business Email</label>
                                <div className="relative">
                                    <input 
                                        name="company_email"
                                        type="email" 
                                        value={formData.company_email}
                                        onChange={handleInputChange}
                                        className="w-full h-[45px] pl-11 pr-4 bg-white border border-[#e3e4e8] rounded-[6px] text-[14px] text-[#2f3344] focus:outline-none focus:border-[#673ab7] transition-all"
                                    />
                                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a0a3af]" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[14px] font-bold text-[#2f3344]">Business Phone</label>
                                <div className="relative">
                                    <input 
                                        name="company_phone"
                                        type="text" 
                                        value={formData.company_phone}
                                        onChange={handleInputChange}
                                        className="w-full h-[45px] pl-11 pr-4 bg-white border border-[#e3e4e8] rounded-[6px] text-[14px] text-[#2f3344] focus:outline-none focus:border-[#673ab7] transition-all"
                                    />
                                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a0a3af]" />
                                </div>
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-[14px] font-bold text-[#2f3344]">Main Office Address</label>
                                <div className="relative">
                                    <textarea 
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        className="w-full pl-11 pr-4 py-4 bg-white border border-[#e3e4e8] rounded-[6px] text-[14px] text-[#2f3344] focus:outline-none focus:border-[#673ab7] transition-all resize-none min-h-[100px]"
                                    ></textarea>
                                    <MapPin size={18} className="absolute left-4 top-4 text-[#a0a3af]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Business Hours Section (Bonus) */}
                <div className="bg-white rounded-[10px] border border-[#e3e4e8] shadow-sm overflow-hidden">
                    <div className="px-7 py-5 border-b border-[#e3e4e8]">
                        <div className="flex items-center gap-2">
                            <Clock size={20} className="text-[#673ab7]" />
                            <h2 className="text-[18px] font-bold text-[#2f3344]">Business Hours</h2>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="flex items-center justify-between p-6 bg-[#fafbfc] rounded-[10px] border border-[#e3e4e8]">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white rounded-lg border border-[#e3e4e8] flex items-center justify-center text-[#673ab7]">
                                    <CheckCircle2 size={20} />
                                </div>
                                <div>
                                    <h4 className="text-[15px] font-bold text-[#2f3344]">Active Operating Status</h4>
                                    <p className="text-[13px] text-[#727586] mt-0.5">Show "Currently Open" badge on your website frontend.</p>
                                </div>
                            </div>
                            <div className="w-12 h-6 bg-[#673ab7] rounded-full relative cursor-pointer group">
                                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all group-hover:scale-110"></div>
                            </div>
                        </div>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {['Sat - Thu', '9:00 AM - 6:00 PM', 'Friday', 'Closed'].map((text, idx) => (
                                <div key={idx} className="p-4 bg-white border border-[#e3e4e8] rounded-[6px]">
                                    <p className={`text-[13px] ${idx % 2 === 0 ? 'font-bold text-[#2f3344]' : 'text-[#727586]'}`}>{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </form>
        </AdminLayout>
    );
}
