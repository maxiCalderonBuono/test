import Head from "next/head";
import Script from "next/script";
import Layout from "../components/layout";
import { ChatBot } from "../components/ChatBot";
import Card from "../components/Card";
import Link from "next/link";
import { BeatLoader } from "react-spinners";

export default function Home() {
  const EXAMPLES = [
    { text: "Hi", label: "gretting" },
    { text: "help", label: "help" },
    { text: "Hello", label: "gretting" },
    { text: "Good morning", label: "gretting" },
    { text: "Good afternoon", label: "gretting" },
    { text: "How are you?", label: "gretting" },
    { text: "Who are you?", label: "gretting" },
    { text: "Can we talk?", label: "gretting" },
    { text: "I have a doubt", label: "help" },
    { text: "Are you available?", label: "job" },
    { text: "Can you tell me a little bit about yourself?", label: "me" },
    { text: "Can you tell me about your background?", label: "me" },
    { text: "Can you tell me more about your experience?", label: "me" },
    { text: "How many years of experience do you have?", label: "tech" },
    { text: "Wich technologies do you know?", label: "tech" },
    {
      text: "Have you worked with cloud technologies such as AWS, Azure, or Google Cloud Platform?",
      label: "tech",
    },
    {
      text: "What are your thoughts on front-end frameworks like React or Angular?",
      label: "tech",
    },
    {
      text: "What is your experience with version control systems like Git or SVN?",
      label: "tech",
    },
    {
      text: "Have you worked with machine learning or artificial intelligence technologies?",
      label: "tech",
    },

    { text: "What technologies have you worked with before?", label: "tech" },
    {
      text: "What programming languages are you proficient in?",
      label: "tech",
    },
    { text: "Are you looking for a new opportunity?", label: "job" },
    { text: "Are you currently employed?", label: "job" },
    { text: "Where do you work?", label: "job" },
    { text: "Are you actively seeking a new opportunity?", label: "job" },
    { text: "What are you biggest strengths?", label: "profile" },
    {
      text: "Can you tell me about a time when you faced a challeging situation?",
      label: "profile",
    },
    { text: "What are you long-term career goals?", label: "profile" },
    { text: "Can you walk me through your resume?", label: "profile" },
    {
      text: "Can you highlight some of your key accomplishment?",
      label: "profile",
    },
    { text: "How can we meet eachother?", label: "contact" },
    { text: "How can we talk?", label: "contact" },
    {
      text: "Do you have preferred method of comunication?",
      label: "contact",
    },
    { text: "What is the best time to reach you?", label: "contact" },
    { text: "Do you have a personal website?", label: "contact" },
    { text: "Do you have a personal portfolio?", label: "contact" },
    { text: "What is your email?", label: "contact" },
    { text: "What is your telephone number?", label: "contact" },
    { text: "What is your github?", label: "contact" },
    { text: "How can I contact you?", label: "contact" },
    { text: "contact", label: "contact" },
    { text: "Can I have your resume?", label: "contact" },
    { text: "What are you social media?", label: "contact" },
    { text: "What is your dog's name?", label: "default" },
    { text: "Do you like barbecue?", label: "default" },
    { text: "What is your favourite movie?", label: "default" },
    { text: "When was the World War 2?", label: "default" },
    { text: "How many ovnis have you see?", label: "default" },
    { text: "0", label: "default" },
    { text: "1", label: "default" },
    { text: "2", label: "default" },
    { text: "3", label: "default" },
    { text: "4", label: "default" },
    { text: "5", label: "default" },
    { text: "6", label: "default" },
    { text: "7", label: "default" },
    { text: "8", label: "default" },
    { text: "9", label: "default" },
  ];

  const API_KEY = "6EUJF3wmdJvXogOK11fNXu5sHNUwvmuefsNvJSD1";

  const ANSWERS = {
    gretting: (
      <div>
        <img
          src="https://res.cloudinary.com/dvqlenul5/image/upload/v1677154574/571-5718065_bot-autoresponder-clipart_mj2gs1.webp"
          alt="Codey face"
          className="w-12 h-12"
        />
        <p className="m-0">
          Hey there! What's up? I'm Codey, the bot created by Maxi to help you
          with anything you need, no matter what it is! I will ask for him, just
          fire away with your questions, and I'll be here to assist you in no
          time! Don't forget, if you ever need assistance, just type{" "}
          <span className="font-bold text-teal-300">"help"</span> in the chat
        </p>
      </div>
    ),
    me: (
      <div className="flex gap-2">
        <img
          src="https://res.cloudinary.com/dvqlenul5/image/upload/v1677154574/571-5718065_bot-autoresponder-clipart_mj2gs1.webp"
          alt="Codey face"
          className="w-8 h-8"
        />
        <div className="flex flex-col">
          <p className="m-0 mb-3">
            I'm 31 years old and originally from Argentina, but I moved to
            Denmark in June 2022 with my wife. I'm really into listening to
            music and hiking, and I love pets and Italian food! Thanks to my
            grandpa, I'm a huge Ferrari fan too! And obviously, I'm super
            passionate about all things tech!
          </p>
          <p className="m-0 mb-3">
            I'm an industrial engineering graduate with 6 years of experience in
            a bunch of different industries. But, let me tell you, my real
            passion lies in technology and programming! That's why I made the
            jump into the IT world, and I haven't looked back since!
          </p>
          <div>
            <p className="mb-2 font-bold">My Greatest Hits</p>
            <ul>
              <li className="m-0 mb-2">
                - Co-created and codesigned a complete data management system
                for COVID-19 in my country.
                <a
                  href="https://www.youtube.com/watch?v=XZMlZ50xacY"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="font-bold text-red-400"
                >
                  {" "}
                  Check it out 🚀!{" "}
                </a>
              </li>
              <li className="m-0 mb-2">
                - Taking part in different communities to share knowledge,
                support, and help each other is what I do. Teamwork makes the
                dream work, right?
              </li>
              <li className="m-0 mb-2">
                - I was part of a startup for three months back in Argentina
                that aimed to connect developers with companies around the
                world.
              </li>
              <li className="m-0">
                - Participated in an internship at a Danish startup called
                Paytack for three months.
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
    job: (
      <div className="flex gap-2">
        <img
          src="https://res.cloudinary.com/dvqlenul5/image/upload/v1677154574/571-5718065_bot-autoresponder-clipart_mj2gs1.webp"
          alt="Codey face"
          className="w-8 h-8"
        />
        <div className="flex flex-col">
          <p className="m-0 mb-3">
            I am open to new opportunities and am always on the lookout for
            exciting projects and challenges. While I am not currently employed,
            I am always interested in exploring new opportunities and would love
            to hear about any roles or projects that may align with my skills
            and interests. Feel free to reach out to me via email, phone, or
            social media - you can find all of my contact information by
            typiying
            <span className="font-bold text-teal-300"> "contact"</span> in the
            chat. Looking forward to hearing from you!
          </p>
        </div>
      </div>
    ),
    tech: (
      <div className="flex gap-2">
        <img
          src="https://res.cloudinary.com/dvqlenul5/image/upload/v1677154574/571-5718065_bot-autoresponder-clipart_mj2gs1.webp"
          alt="Codey face"
          className="w-8 h-8"
        />
        <div className="flex flex-col">
          <p className="m-0 mb-3">
            I'm a big fan of the JavaScript ecosystem, with a focus on React.js.
            For styling, I've got Bootstrap, Tailwind CSS, Styled Components,
            and Chakra UI on lock. I'm also experienced with serverless
            databases like Firebase and Supabase. On the backend side, I've
            worked with Node.js, Express, and Mongo DB. Lately, I've been
            getting into Next.js and TypeScript and I'm excited to dive deeper
            into those technologies. I'm also interested in all the amazing uses
            of Artificial Intelligence in our world.
          </p>
        </div>
      </div>
    ),
    contact: (
      <div className="flex gap-2">
        <img
          src="https://res.cloudinary.com/dvqlenul5/image/upload/v1677154574/571-5718065_bot-autoresponder-clipart_mj2gs1.webp"
          alt="Codey face"
          className="w-8 h-8"
        />
        <div className="flex flex-col">
          <p className="m-0 mb-3">Sure, here's how you can contact me:</p>
          <ul>
            <li className="m-0 font-bold text-teal-400">
              <Link
                href="mailto:calderonmaxi@outlook.com"
                className="font-bold text-white"
                rel="noopener noreferrer"
              >
                Email
              </Link>
            </li>
            <li className="m-0 font-bold text-teal-400">
              <Link
                href="https://www.linkedin.com/in/mcalderonbuono/"
                className="font-bold text-white"
                rel="noopener noreferrer"
              >
                Linkedin
              </Link>
            </li>
            <li className="m-0 font-bold text-teal-400">
              <Link
                href="https://github.com/maxiCalderonBuono"
                rel="noopener noreferrer"
              >
                Github
              </Link>
            </li>
            <li className="m-0 font-bold text-teal-400">
              <Link
                href="https://twitter.com/mcalderonbuono"
                rel="noopener noreferrer"
              >
                Twitter
              </Link>
            </li>
          </ul>
          <p className="m-0 my-3">
            Need my resume?{" "}
            <a
              href="/data/maximilianoCalderónDeveloper.pdf"
              download="Maximiliano Calderón"
              className="font-bold text-teal-400"
            >
              Download
            </a>
          </p>
          <p className="m-0 my-3">
            Feel free to reach out to me during the weekdays, during the day.
            I'll get back to you as soon as I can!
          </p>
        </div>
      </div>
    ),
    help: (
      <div className="flex gap-2">
        <img
          src="https://res.cloudinary.com/dvqlenul5/image/upload/v1677154574/571-5718065_bot-autoresponder-clipart_mj2gs1.webp"
          alt="Codey face"
          className="w-8 h-8"
        />
        <div className="flex flex-col">
          <p className="m-0 mb-2">
            Of course! Here are some common questions you can ask me:
          </p>
          <ul>
            <li className="m-0"> 1- Can you tell me more about yourself?</li>
            <li className="m-0"> 2- Are you looking for new opportunities?</li>
            <li className="m-0"> 3 -Which technologies do you know?</li>
          </ul>
          <div className="flex items-center gap-2 mt-2">
            <span>Do you wanna try? Type any of that options</span>
            <div className="flex items-center justify-center w-6 h-6 bg-teal-400 rounded-full">
              1
            </div>
            <div className="flex items-center justify-center w-6 h-6 bg-teal-400 rounded-full">
              2
            </div>
            <div className="flex items-center justify-center w-6 h-6 bg-teal-400 rounded-full">
              3
            </div>
          </div>
        </div>
      </div>
    ),
    default: (
      <div className="flex gap-2">
        <img
          src="https://res.cloudinary.com/dvqlenul5/image/upload/v1677154574/571-5718065_bot-autoresponder-clipart_mj2gs1.webp"
          alt="Codey face"
          className="w-8 h-8"
        />
        <p>
          I'm sorry, I don't have an answer to that question right now. But
          don't worry, I'm constantly learning and updating my knowledge! Maybe
          you could try rephrasing your question or asking me something
          different? Let's try again!
        </p>
      </div>
    ),
    answering: (
      <div className="flex items-center gap-2">
        <img
          src="https://res.cloudinary.com/dvqlenul5/image/upload/v1677154574/571-5718065_bot-autoresponder-clipart_mj2gs1.webp"
          alt="Codey face"
          className="w-8 h-8"
        />
        <BeatLoader color="#36d7b7" />
      </div>
    ),
  };

  return (
    <Layout home>
      <Script
        src="https://kit.fontawesome.com/91231a0f83.js"
        strategy="lazyOnload"
      />
      <section>
        <article className="flex justify-center gap-8 mt-8 mb-3 text-xl font-bold">
          <div className="flex items-center gap-2">
            <i className="text-gray-300 fa-brands fa-linkedin"></i>
            <a
              href="https://www.linkedin.com/in/mcalderonbuono/"
              rel="nooponer noreferrer"
              target="_blank"
              className="text-violet-700"
            >
              {" "}
              Linkedin{" "}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <i className="text-gray-300 fa-brands fa-github"></i>
            <a
              href="https://github.com/maxiCalderonBuono"
              rel="nooponer noreferrer"
              target="_blank"
              className="text-violet-700"
            >
              {" "}
              Github{" "}
            </a>
          </div>
          <Card />
        </article>
        <article className="flex flex-col gap-4 text-xl font-medium text-gray-400">
          <p>
            Hello there! 👋 I'm a frontend developer with a passion for creating
            stunning and functional websites.
          </p>
          <p>
            I'm totally obsessed with tech, science, and entrepreneurship. 🤓 I
            mean, who wouldn't be? It's all just so cool!
          </p>
          <p>
            But let's be real, it's not all about work for me. When I'm not
            nerding out on code, you can find me riding my bike, hanging out
            with my family and friends, or exploring the great outdoors. 🌳
          </p>
          <p>Welcome to my personal webpage!. Let´s get in touch 🚀.</p>
        </article>
      </section>
      <section className="mt-12">
        <p className="my-3 text-2xl font-bold">
          Want to know more about me? Ask my personal assistant 🤖{" "}
        </p>

        <ChatBot
          apiKey={API_KEY}
          examples={EXAMPLES}
          answers={ANSWERS}
          initialMessage="Someone out there?"
        />
      </section>
    </Layout>
  );
}
