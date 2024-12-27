export function Features() {
  const features = [
    {
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing systems',
      icon: '🔄'
    },
    {
      title: 'Secure Platform',
      description: 'Enterprise-grade security for your peace of mind',
      icon: '🔒'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team',
      icon: '💬'
    }
  ];

  return (
    <div id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Features</h2>
          <p className="mt-4 text-xl text-gray-500">Everything you need to succeed</p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg transform -translate-y-1/2">
                      <span className="text-3xl">{feature.icon}</span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.title}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}