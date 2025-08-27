'use client';

import { useState } from 'react';
import Header from './components/Header';
import ServiceCard from './components/ServiceCard';
import ServiceModal from './components/ServiceModal';
import Toast from './components/Toast';
import { accountsData, mailData, Service } from './data/services';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'accounts' | 'mail'>('accounts');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  const currentData = activeTab === 'accounts' ? accountsData : mailData;

  const showToast = (message: string) => {
    setToastMessage(message);
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 3000);
  };

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    // Wait for animation to complete before hiding modal
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedService(null);
      setIsClosing(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-100">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        {/* Enhanced Tabs */}
        <div className="mb-8 sm:mb-12">
          <div className="
            bg-white/60 backdrop-blur-sm rounded-2xl p-1 sm:p-2
            shadow-lg border border-white/20
            max-w-sm sm:max-w-md mx-auto
          ">
            <nav className="flex space-x-1 sm:space-x-2">
              <button
                onClick={() => setActiveTab('accounts')}
                className={`
                  flex-1 py-2 sm:py-3 px-3 sm:px-6 rounded-xl font-bold text-sm sm:text-lg
                  transition-all duration-300 ease-out
                  ${activeTab === 'accounts'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
                  }
                `}
              >
                Accounts
              </button>
              <button
                onClick={() => setActiveTab('mail')}
                className={`
                  flex-1 py-2 sm:py-3 px-3 sm:px-6 rounded-xl font-bold text-sm sm:text-lg
                  transition-all duration-300 ease-out
                  ${activeTab === 'mail'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
                  }
                `}
              >
                Mail
              </button>
            </nav>
          </div>
        </div>

        {/* Service Cards Grid with enhanced spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {currentData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onClick={() => handleServiceClick(service)}
            />
          ))}
        </div>

        {/* Empty state or loading indicator could go here */}
        {currentData.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">No services available</div>
          </div>
        )}
      </main>

      {/* Modal */}
      {isModalOpen && selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={closeModal}
          isClosing={isClosing}
          onShowToast={showToast}
        />
      )}

      {/* Toast */}
      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
      />
    </div>
  );
}
