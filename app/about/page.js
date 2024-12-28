import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700 ">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0 ">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/aqsa.png"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full bg-black"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center ">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                About Me
              </h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                {` Hello! I'm Aqsa, a passionate web developer, generative AI engineer, and graphic designer. I specialize in working with modern web development tools like Next.js and Tailwind CSS. I have worked on various projects, including responsive websites, personal portfolios, and hackathon pages. In graphic designing, I have created innovative designs using tools like Figma and other design software. I am passionate about learning new technologies and applying them practically to deliver unique and effective solutions.`}
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">{`Aqsa's Journey as a Coder`}</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
              {` From curious beginner to seasoned developer, here's how Aqsa navigated the world of programming.`}
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <img
                  src="/about1.png"
                  alt="Aqsa as a beginner"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  The Spark of Curiosity
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  {`After completing my intermediate studies, I started my journey in the IT field. I first learned HTML, CSS, and JavaScript. I kept working on small projects and dedicated most of my time to coding to enhance my skills.`}
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <img
                  src="/about5.jpg"
                  alt="Aqsa learning new skills"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Diving Deeper
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  {` After mastering the basics, Aqsa has enhanced her skills by learning modern technologies like Next.js, Tailwind CSS, TypeScript, and Figma. These skills strengthen her web development and design capabilities, allowing her to implement innovative solutions in new projects.`}
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <img
                  src="/about3.jpg"
                  alt="Aqsa working on a big project"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Taking on Challenges
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  {`During this time, I did internships at several places, which provided me with great experience.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
