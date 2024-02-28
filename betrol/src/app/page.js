const cards = [
  {
    title: "Employee Training",
    text: "Improve your team's skills and knowledge with our training programs.",
  },
  {
    title: "HR Consultancy",
    text: "Get expert advice on all things HR from our dedicated consultants.",
  },
  {
    title: "Payroll Processing",
    text: "Our payroll processing is fast, accurate, and reliable.",
  },
  {
    title: "Benefits Administration",
    text: "We provide benefits administration that makes it easy to manage employees benefits.",
  },
  {
    title: "HR Compliance",
    text: "We provide HR compliance services that helps you stay on top of new regulations.",
  },
];
export default function Home() {
  const renderedCards = cards.map((card, index) => {
    return (
      <div
        key={index}
        className=" w-80 border border-blue-900 p-3 md:p-6 rounded-lg transform transition-transform ease-in-out hover:scale-105 hover:shadow-2xl bg-blue-5 shadow-gray-400 shadow-inner"
      >
        <h4 className="font-bold text-blue-800 text-base mb-1 md:mb-4">{card.title}</h4>
        <p className="text-center text-sm leading-6 font-normal">{card.text}</p>
      </div>
    );
  });
  return (
    <main className="h-screen w-screen">
      <div className="h-full w-full overflow-x-hidden">
        <div className=" bg-no-repeat bg-cover bg-center w-full bg-hero-pattern h-1/2 md:h-2/3 flex flex-col justify-center items-center gap-4 px-10 lg:p-0">
          <p className=" text-slate-50 font-bold md:font-extrabold text-xl sm:text-3xl md:text-5xl xl:text-7xl 2xl:text-8xl text-center">
            Human Resources Solutions
          </p>
          <p className=" text-slate-200 text-sm sm:text-base lg:text-lg text-center">
            We are your trusted HR partner with a broad portfolio of services,
            including employee training, HR consultancy, and more.
          </p>
          <button className=" border border-blue-700 bg-blue-700 px-5 md:px-8 py-3 text-slate-50 rounded-xl text-sm md:text-lg">
            Learn More
          </button>
        </div>
        <div className=" py-5 md:py-10 px-16 text-2xl md:text-3xl lg:text-4xl md:font-bold font-semibold text-center text-black">
          What we do
          <div className=" 2xl:w-4/5 mx-auto flex justify-evenly flex-wrap gap-10 mt-5 md:mt-10">{renderedCards}</div>
        </div>
      </div>
    </main>
  );
}
