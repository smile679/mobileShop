import aboutBanner from "../../assets/aboutBanner.png"

function About() {
  return (
    <section>
      <div className="w-full flex justify-center items-center bg-gray-900
      bg-[url('/src/assets/aboutBanner.png')] bg-cover bg-right bg-no-repeat h-100">
        <div className="flex flex-col text-center w-2xl gap-5 p-5 backdrop-opacity-100">
          <h1 className="text-5xl text-white font-semibold">About us</h1>
          <p className="text-muted text-lg text-pretty text-shadow-gray-800 text-shadow-sm leading-8">
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;