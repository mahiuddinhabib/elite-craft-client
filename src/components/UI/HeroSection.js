import React from 'react';

const HeroSection = () => {
    return (
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to EliteCraft</h1>
            <p className="mb-5">
              EliteCraft is a Next.js web app that lets users build custom PCs
              by selecting components. It features user authentication,
              protected routes, and responsiveness for an optimal experience.
            </p>
          </div>
        </div>
      </div>
    );
};

export default HeroSection;