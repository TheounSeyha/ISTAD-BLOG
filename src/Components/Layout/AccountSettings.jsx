import React from "react";
import {
  UserCircle,
  Shield,
  Eye,
  LayoutDashboard,
  Bell,
  CreditCard,
  Globe,
  Map,
  BarChart3,
  CheckSquare,
  ArrowLeft,
} from "lucide-react";

const OptionCard = ({ icon, title, description }) => (
  <div className="p-4 bg-gray-50 border rounded-lg shadow hover:shadow-md hover:bg-gray-100 transition cursor-pointer">
    <div className="flex items-center gap-4 mb-2">
      <div className="p-2 bg-gray-200 rounded-full">{icon}</div>
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>
    </div>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const AccountSettings = ({ onNavigate }) => {
  const options = [
    {
      icon: <UserCircle className="w-5 h-5" />,
      title: "Personal Info",
      description: "Provide personal details and how we can reach you.",
      path: "/personal-info",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Login & Security",
      description: "Update your password and secure your account.",
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Privacy & Sharing",
      description: "Manage your personal data and sharing settings.",
    },
    {
      icon: <LayoutDashboard className="w-5 h-5" />,
      title: "Taxes",
      description: "Manage taxpayer information and tax documents.",
    },
    {
      icon: <Bell className="w-5 h-5" />,
      title: "Notifications",
      description:
        "Choose notification preferences and how you want to be contacted.",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Payments & payouts",
      description: "Review payments, payouts, coupons, and gift cards.",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Global preferences",
      description: "Set your default language, currency, and timezone.",
    },
    {
      icon: <Map className="w-5 h-5" />,
      title: "Travel for work",
      description: "Add a work email for business trip benefits.",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Professional hosting tools",
      description:
        "Get professional tools if you manage several properties on Airbnb.",
    },
    {
      icon: <CheckSquare className="w-5 h-5" />,
      title: "Referral credit & coupon",
      description: "You have $0 referral credits and coupon. Learn more.",
    },
  ];

  return (
    <div className="w-full max-w-5xl p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Account</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => option.path && onNavigate(option.path)}
          >
            <OptionCard
              icon={option.icon}
              title={option.title}
              description={option.description}
            />
          </div>
        ))}
      </div>

      <div className="mt-6">
        <button
          onClick={() => onNavigate("/")}
          className="flex items-center gap-2 text-purple-600 font-medium px-4 py-2 bg-purple-100 rounded-lg hover:bg-purple-200 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
      </div>
    </div>
  );
};

export default AccountSettings;
