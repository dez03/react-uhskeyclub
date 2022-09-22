import Advisor from "../assets/advisors.jpg";
import "../App.css"

export default function Advisors() {
  return (
    <>
      <div className="pt-16 xl:py-24 ">
        <div className="pb-16 bg-[#3f0b0a] xl:p-0 xl:z-10 xl:relative ">
          <div className="xl:mx-auto xl:max-w-7xl xl:px-8 xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="relative xl:-my-8">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1/2 bg-[#F8F0E3] xl:p-0 xl:h1/4 xl:hidden"
              />
              <div className="mx-auto max-w-lg px-4 sm:max-w-3xl sm:px-6 xl:p-0 xl:w-full xl:h-full">
                <div className="overflow-hidden aspect-w-9 aspect-h-11 xl:aspect-none xl:h-full">
                  <img
                    className="object-top rounded-xl object-none xl:h-full teacherpics xl:w-[500px]"
                    src={Advisor}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className=" xl:m-0 xl:col-span-2 ">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 xl:px-0 xl:py-20 xl:max-w-none">
                <blockquote>
                  <div>
                    <svg
                      className="h-10 w-10 text-white m-0 opacity-25"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="mt-2 text-xl text-left font-medium text-white">
                      I have been a co-advisor for UHS key club for 12 years. It
                      is an honor to be involved with this amazing organization
                      and work with such an incredible group of key clubbers. I
                      currently teach honors and AP biology at the high school.
                    </p>
                  </div>
                  <footer className="mt-6">
                    <p className="text-base mb-0 font-medium text-white">
                      Miss. Courtney, Left
                    </p>
                    <p className="text-base mb-0 font-medium text-[#79777f]">
                      Co-Advisor, Biology Teacher
                    </p>
                  </footer>
                </blockquote>
                <blockquote className="m-0">
                  <div>
                    <svg
                      className="h-10 w-10 text-white opacity-25 m-0"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="mt-2 text-xl mb-0 text-left font-medium text-white">
                      Hi everyone! I am Mrs. Prieto and I am entering my 10th
                      year as co-advisor of the Union High School Key Club. I
                      hold a Bachelor of Arts in Biology from Ramapo College, a
                      Master of Arts in Education from St. Peter's University,
                      and I most recently received my Master of Arts in
                      Counseling from Montclair State University. Some of you
                      may already know me since I am a school counselor here at
                      UHS but before that, I taught biology for over 9 years.
                      Being part of Key Club has been an incredible experience.
                      I have had the pleasure of watching so many students grow
                      into leadership positions and harness their empathy into
                      helping others. I am looking forward to our new service
                      events this year and working together with our new board
                      and members!
                    </p>
                  </div>
                  <footer className="mt-6 mb-0">
                    <p className="text-base mb-0 font-medium text-white">
                      Mrs. Prieto, Right
                    </p>
                    <p className="text-base mb-0 font-medium text-[#79777f]">
                      Co-Advisor, Guidance Counselor
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



/*   <>
      <div className="pt-16 xl:py-24 ">
        <div className="pb-16 bg-[#3f0b0a] xl:pb-0 xl:z-10 xl:relative ">
          <div className="xl:mx-auto xl:max-w-7xl xl:px-8 xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="relative xl:-my-8 lg:my-2">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1/2 bg-[#F8F0E3] xl:hidden"
              />
              <div className="mx-auto max-w-lg px-4 sm:max-w-3xl sm:px-6 xl:p-0 xl:w-full xl:h-full">
                <div className="rounded-xl shadow-xl overflow-hidden aspect-w-9 aspect-h-11 xl:aspect-none xl:h-full">
                  <img
                    className="object-cover xl:h-full xl:w-full"
                    src={Advisor}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 xl:m-0 xl:col-span-2 xl:pl-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 xl:px-0 xl:py-20 xl:max-w-none">
                <blockquote>
                  <div>
                    <svg
                      className="h-10 w-10 text-white opacity-25"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="mt-6 text-xl text-left font-medium text-white">
                      I have been a co-advisor for UHS key club for 12 years. It
                      is an honor to be involved with this amazing organization
                      and work with such an incredible group of key clubbers. I
                      currently teach honors and AP biology at the high school.
                    </p>
                  </div>
                  <footer className="mt-2">
                    <p className="text-base font-medium text-white">
                      Miss. Courtney, Left
                    </p>
                    <p className="text-base font-medium text-[#79777f]">
                      Co-Advisor, Biology Teacher
                    </p>
                  </footer>
                </blockquote>
                <blockquote className="m-0">
                  <div>
                    <svg
                      className="h-10 w-10 text-white opacity-25 m-0"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="mt-2 text-2xl text-left font-medium text-white">
                      I have been a co-advisor for UHS key club for 10 years. I
                      hold a Bachelor of Arts in Biology from Ramapo College, a
                      Master of Arts in Education from St. Peter's University,
                      and I most recently received my Master of Arts in
                      Counseling from Montclair State University. Some of you
                      may already know me since I am a school counselor here at
                      UHS but before that, I taught biology for over 9 years.
                      Being part of Key Club has been an incredible experience.
                      I have
                      had the pleasure of watching so many students grow into
                      leadership positions and harness their empathy into
                      helping others. I am looking forward to our new service
                      events this year and working together with our new board
                      and members!
                    </p>
                  </div>
                  <footer className="mt-6 ">
                    <p className="text-base font-medium text-white">
                      Mrs. Prieto, Right
                    </p>
                    <p className="text-base font-medium text-[#79777f]">
                      Co-Advisor, Guidance Counselor
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

    </> */