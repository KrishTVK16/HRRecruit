import React from 'react';
import { User } from '../types';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area
} from 'recharts';
import { MoreVertical, Search, Filter, Download } from 'lucide-react';

const data = [
  { name: 'Jan', hires: 40, applicants: 240 },
  { name: 'Feb', hires: 30, applicants: 139 },
  { name: 'Mar', hires: 20, applicants: 980 },
  { name: 'Apr', hires: 27, applicants: 390 },
  { name: 'May', hires: 18, applicants: 480 },
  { name: 'Jun', hires: 23, applicants: 380 },
  { name: 'Jul', hires: 34, applicants: 430 },
];

export const Dashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
       <h1 className="text-2xl font-bold text-white mb-6">Dashboard Overview</h1>
       
       {/* KPIs */}
       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Total Applicants', val: '12,345', change: '+12%', color: 'blue' },
            { label: 'Active Jobs', val: '45', change: '+2%', color: 'green' },
            { label: 'Interviews', val: '128', change: '-5%', color: 'purple' },
            { label: 'Hired', val: '32', change: '+18%', color: 'cyan' },
          ].map((stat, i) => (
             <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                <div className="text-slate-400 text-sm font-medium mb-2">{stat.label}</div>
                <div className="flex items-end justify-between">
                   <div className="text-3xl font-bold text-white">{stat.val}</div>
                   <div className={`text-xs font-bold px-2 py-1 rounded bg-${stat.color}-900/30 text-${stat.color}-400`}>
                      {stat.change}
                   </div>
                </div>
             </div>
          ))}
       </div>

       {/* Charts */}
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-xl">
             <h3 className="text-lg font-bold text-white mb-6">Recruitment Analytics</h3>
             <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                   <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorHires" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                      <XAxis dataKey="name" stroke="#64748b" />
                      <YAxis stroke="#64748b" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc' }}
                        itemStyle={{ color: '#fff' }}
                      />
                      <Area type="monotone" dataKey="applicants" stroke="#3b82f6" fillOpacity={1} fill="url(#colorHires)" />
                   </AreaChart>
                </ResponsiveContainer>
             </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
             <h3 className="text-lg font-bold text-white mb-6">Recent Activity</h3>
             <div className="space-y-4">
                {[1,2,3,4,5].map((i) => (
                   <div key={i} className="flex items-center gap-4 pb-4 border-b border-slate-800 last:border-0">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-400">JD</div>
                      <div>
                         <div className="text-white text-sm font-medium">John Doe applied for CTO</div>
                         <div className="text-slate-500 text-xs">2 hours ago</div>
                      </div>
                   </div>
                ))}
             </div>
          </div>
       </div>
    </div>
  );
};

export const UsersList = () => {
  const users: User[] = [
     { id: '1', name: 'Alice Smith', role: 'Recruiter', status: 'Active', email: 'alice@lumina.com' },
     { id: '2', name: 'Bob Jones', role: 'Admin', status: 'Active', email: 'bob@lumina.com' },
     { id: '3', name: 'Charlie Day', role: 'Viewer', status: 'Inactive', email: 'charlie@lumina.com' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
       <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">User Management</h1>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium">Add User</button>
       </div>

       <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
          <div className="p-4 border-b border-slate-800 flex gap-4">
             <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input type="text" placeholder="Search users..." className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-blue-500" />
             </div>
             <button className="p-2 border border-slate-700 rounded-lg text-slate-400 hover:text-white"><Filter className="w-4 h-4" /></button>
          </div>
          <table className="w-full text-left">
             <thead className="bg-slate-950 text-slate-400 text-xs uppercase font-medium">
                <tr>
                   <th className="px-6 py-4">Name</th>
                   <th className="px-6 py-4">Role</th>
                   <th className="px-6 py-4">Status</th>
                   <th className="px-6 py-4">Actions</th>
                </tr>
             </thead>
             <tbody className="divide-y divide-slate-800">
                {users.map((u) => (
                   <tr key={u.id} className="hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4">
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
                            <div>
                               <div className="text-white font-medium text-sm">{u.name}</div>
                               <div className="text-slate-500 text-xs">{u.email}</div>
                            </div>
                         </div>
                      </td>
                      <td className="px-6 py-4 text-slate-300 text-sm">{u.role}</td>
                      <td className="px-6 py-4">
                         <span className={`px-2 py-1 rounded text-xs font-bold ${u.status === 'Active' ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}>
                            {u.status}
                         </span>
                      </td>
                      <td className="px-6 py-4 text-slate-400">
                         <button className="hover:text-white"><MoreVertical className="w-4 h-4" /></button>
                      </td>
                   </tr>
                ))}
             </tbody>
          </table>
       </div>
    </div>
  );
};