import Presient from "../assets/jer.jpg";
import vp from "../assets/meya.jpg";
import Secra from "../assets/sneha.jpg";
import Tres from "../assets/angel.JPG";
import Hist from "../assets/ana.jpg";
import Web from "../assets/aviel.jpg";

const people = [
  {
    name: "Jeremiah Aviola",
    role: "President",
    imageUrl: Presient,
    bio: "Hi! My name is Jeremiah, and I am your president. As a current senior, I hope to spend my last year at UHS leading Key Club into a future of success for all of our members. I like to think of myself as a liason between our members and our pioneers of change within our community. I love getting to know each and every one of you, and I love meeting new faces everyday. Outside of Key Club, I am our marching band drum major and a private math tutor! I absolutely love biochemistry and working with genetics and macromolecules- I envision myself as a pathologist or at a lab. My goal for our Key Club is to open up our interaction with our NJ district and beyond, starting with Fall Rally participation!",
  },
  {
    name: "Meya Alverna",
    role: "Vice President",
    imageUrl: vp,
    bio: "Hey Guys, my name is Meya Alverna, I am a senior, and I am this year’s Key Club Vice President! I have been in the key club since my freshman year and I am so excited to help lead the club this year. Some of my hobbies are video games, doing hair and nails, and karaoke. To me, key club is a fun and easy way for high school students to help their community. For this upcoming year, I hope to find new community service opportunities and get more people involved in Key Club!",
  },
  {
    name: "Sneha Mexon",
    role: "Secretary",
    imageUrl: Secra,
    bio: "Hi Everyone! My name is Sneha Mexon and I am the Key Club Secretary for the 2022-2023 service year. I am so excited to serve as your Key Club Secretary. I initially joined Key Club at the beginning of my Freshman year. I remember one of my first in-person events was at the Food Truck Festival, I genuinely felt very good about serving my Community and left that event with a passion for service. I am honored to have this leadership position and hope to do my best along with the other officers to have a profound impact on Key Club!",
  },
  {
    name: "Angelica Monderin",
    role: "Treasurer",
    imageUrl: Tres,
    bio: "Hello Key Clubbers! My name is Angelica (or Angel :) and I am your UHS Key Club 2022 - 2023 Treasurer! Currently, I am a senior on the Girls Varsity Tennis team. I’m so excited to be fulfilling this role alongside my fellow board! This year marks my 3rd year in Key Club and 1st year on the board. Having attended DECON (District Educational Conference) for the first time this past April, I was able to learn various ways of expanding our club’s outreach to the community. As treasurer, it is my goal and hope to effectively coordinate fundraisers in order to benefit the board as well as further the involvement of every member, alongside creating a stronger bond to our Kiwanis family. Please feel free to reach out to any board member, especially myself, with any input or suggestions regarding UHS Key Club! After all, community service is our way of life!",
  },
  {
    name: "Ana Figuerido",
    role: "Historian",
    imageUrl: Hist,
    bio: "Hey everyone! My name is Ana Figueiredo, a current Junior. I am 2022-2023 Key Club’s Historian officer! During freshman year, I joined this club to gain my community service hours. Within those hours I made new friends and had amazing experiences with the people around me. I’m thankful to be chosen to help this year! Some topics I love to learn about include Biology and concepts within the medical field. Learning about the human body, diseases, and how to help other people is fascinating to me. Some of my hobbies include running, going to the gym, and cooking. My goal for this upcoming year is to encourage upcoming new members. In addition, I will capture photos during events to save and share these precious memories with those in our community. This club not only benefits the community, but it makes each member a better version of themselves. Please feel free to contact me or any other officer with questions about UHS Key club :)",
  },

  {
    name: "Aviel Hernandez",
    role: "Web Master",
    imageUrl: Web,
    bio: "As your web master, I aim to create an efficient and intuitive website so UHS Key Club members can quickly retrieve the information they want. I have made this website as efficient as I possibly could. Here, you check how many service hours you have as the spreadsheet is live and updates automatically. You can look at the calendar to see what events we are hosting and when. On the gallery page you will find pictures of all service events we have hosted, as well as a cool search bar feature where you can search your name and only the pictures you're in show up! Every month there will be a newsletter uploaded to the newsletters page. There you can stay updated with current news regarding the outcome of past events, UHS Key Club member of the month, upcoming events, and more! I have also hidden some easter eggs throughout this website and plan on adding more. Some are easier to find then others, but there are plenty, so have fun looking for them! If you notice any bugs, inaccurate information, or have a suggestion, please do not hesitate to email me anytime.",
  },
];

export default function Example() {
  return (
    <div>
      <div className="mx-auto pt-8 pb-12 px-4 max-w-7xl lg:px-6 lg:px-8 lg:py-24 sm:px-6 ">
        <div className="space-y-12">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl l">
            Meet our leadership
          </h2>
          <hr></hr>
          <h1>Lieutenant Governor - Division 14</h1>
          <h3>Krystlove Yeboah</h3>
          <a href="mailto:kyeboah@njkeyclub.org">
            <h5>kyeboah@njkeyclub.org</h5>
          </a>
          <ul
            role="list"
            className="pr-8 tb:pr-0   space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0 lg:gap-8">
                  <div className="h-0 aspect-w-3 aspect-h-2 lg:aspect-w-3 lg:aspect-h-4">
                    <img
                      className="object-cover object-top  shadow-lg rounded-lg"
                      src={person.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <div className="space-y-4">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{person.name}</h3>
                        <p className="text-indigo-600">{person.role}</p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500 text-left">{person.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
