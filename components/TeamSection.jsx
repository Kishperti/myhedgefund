import React from 'react';

const teamMembers = [
  {
    name: 'Pranav Dhingra',
    role: 'CEO-Founder',
  },
  {
    name: 'Arjun Khurana',
    role: 'CFO',
  },
  {
    name: 'Prince Suneja',
    role: 'CTO',
  },
  {
    name: 'Rajesh Kumar',
    role: 'COO',
  },
  {
    name: 'Sukhwinder Singh',
    role: 'CIO',
  },
  {
    name: 'Arjun Tanwar',
    role: 'CMO',
  },
];
const getRandomColor = () => {
  const colors = ['#FFC0CB', '#ADD8E6', '#c2d9c2', '#cecbbb', '#cfcfcf', '#87CEFA'];
  return colors[Math.floor(Math.random() * colors.length)];
};
const TeamSection = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Our team brings innovative financial strategies to the forefront, blending modern market insights with a personalized approach to hedge fund management.
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {teamMembers.map((member, index) => (
              <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div
                    className="w-16 h-16 flex-shrink-0 rounded-full mr-4 flex items-center justify-center text-gray-900 text-lg font-bold"
                    style={{ backgroundColor: getRandomColor() }}
                  >
                    {member.name.charAt(0)}
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">{member.name}</h2>
                    <p className="text-gray-500">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default TeamSection;
