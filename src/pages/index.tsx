import React from 'react';
import localFont from "next/font/local";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default function Home() {
    return (
        <div
            className={`${geistSans.variable} ${geistMono.variable} bg-gray-100 min-h-screen text-gray-900`}
        >
            <header className="bg-white py-16 px-8 text-center shadow-lg transition-transform transform hover:scale-105">
                <h1 className="text-4xl font-bold text-indigo-600">Lab10 Part C</h1>
            </header>

            <main className="px-4 md:px-12 py-8">
                <section className="mb-12 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h2 className="text-3xl font-semibold text-indigo-600 mb-4">1. Creating the NextJS project</h2>
                    <p className="text-lg text-gray-700 mb-4">For this project, I chose Next.js because it provides both static and dynamic rendering out-of-the-box, making it ideal for building fast and interactive pages. To get started, I used the following command to initialize a new Next.js project:</p>
                    <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto font-mono text-sm text-pink-500">
                        npx create-next-app partc
                    </pre>
                    <p className="mt-4 text-lg text-gray-700">This created a new Next.js app where I could begin structuring my page. I decided to use Tailwind CSS for easy styling and local fonts to personalize the design.</p>
                </section>

                <section className="mb-12 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h2 className="text-3xl font-semibold text-indigo-600 mb-4">2. Building the Page</h2>
                    <p className="text-lg text-gray-700 mb-4">Once the app was created, I started building out the page structure. Here&apos;s the core code that defines this page, which you are viewing now:</p>
                    <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto font-mono text-sm text-pink-500">
                        {`
import React from 'react';

export default function Home () {
  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <p>This is a simple web page I built for Lab10 Part C using Next.js!</p>
    </div>
  );
};
            `}
                    </pre>
                    <p className="mt-4 text-lg text-gray-700">I used Tailwind CSS for styling, which made it quick to build a responsive layout. Additionally, I used local fonts to give the page a unique, custom feel.</p>
                </section>
                <section className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h2 className="text-3xl font-semibold text-indigo-600 mb-4">3. Challenges and Solutions</h2>
                    <p className="text-lg text-gray-700 mb-4">While working on this page, I encountered a few challenges that I had to overcome:</p>
                    <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
                        <li>
                            <strong>Node Version Issues:</strong> I experienced some compatibility issues with my Node.js version. I resolved this by updating Node to the latest LTS version using <code className="bg-gray-100 px-2 py-1 rounded text-indigo-500">nvm</code>.
                        </li>
                    </ul>
                    <p className="mt-4 text-lg text-gray-700">Despite these minor setbacks, everything went smoothly in the end, and I was able to get the site up and running quickly!</p>
                </section>
            </main>
            <footer className="bg-white py-4 mt-16 text-center shadow-lg">
                <p className="text-gray-600">Happy coding with Next.js! 🎉</p>
            </footer>
        </div>
    );
}
