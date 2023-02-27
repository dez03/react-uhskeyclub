// how to become a member

// how to pay dues

// what is key club
// Key Club is the oldest and largest service program for high school students. It is a student-led organization that teaches leadership through service to others. Members of the Kiwanis International family, Key Club members build themselves as they build their schools and communities. Key Club has approximately 265,000 members in approximately 5,000 clubs. Key Club is represented in 31 countries.



// how much are dues?

// why do we have to pay?
//https://nydkc.org/dues/#:~:text=Why%20Should%20Clubs%20Pay%20Dues,considered%20a%20Key%20Club%20member.

const faqs = [
  {
    id: 1,
    question: "What is Key Club?",
    answer:
      "Key Club is the oldest and largest service program for high school students. It is a student-led organization that teaches leadership through service to others. Members of the Kiwanis International family, Key Club members build themselves as they build their schools and communities. Key Club has approximately 265,000 members in approximately 5,000 clubs. Key Club is represented in 31 countries. ",
  },
  {
    id: 2,
    question: "How do I become a member?",
    answer:
      "Currently, we are not accepting any new members. You can sign up when registration reopens in April. Stay tuned for more information. But if you have any questions about joining, feel free to contact any officers or advisors. ",
  },
  {
    id: 3,
    question: "How much are Key Club dues?",
    answer: "Key Club dues are 18 dollars.  ",
  },
  {
    id: 4,
    question: "How do I pay my dues?",
    answer:
      "All dues are payable in PaySchoolsCentral. The payment will be added to your account once you have completed your 10 hours and attended all required meetings. Keep in mind that this happens only once a year when we are accepting new members, which we are not currently. ",
  },
  {
    id: 5,
    question: "What are the benefits of joining Key Club?",
    answer:
      "By joining Key Club, you have the opportunity to serve your community, gain leadership skills, and make new friends. ",
  },
];

export default function Example() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6  lg:px-8">
        <h2 className="text-5xl mt-4  leading-10 tracking-tight text-gray-900">
          Frequently Asked Questions
        </h2>
        <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                {faq.question}
              </dt>
              <dd className="lg:col-span-7 lg:mt-0">
                <p className="text-base leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <h1 className="">Sponsoring Kiwanis - South Orange-Maplewood</h1>
      <div className="flex flex-col items-center justify-around">
        <div className="w-3/4">
          <div className="flex flex-col lg:flex-row items-center justify-around mb-6">
            <div>
              <h3>Gordon Meth</h3>
              <p>Secretary/Treasurer</p>
              <a href="mailto:gmeth@optonline.net">
                <h5>gmeth@optonline.net</h5>
              </a>
            </div>

            <div>
              <h3>Bruce Van Ysseldyk</h3>
              <p>President</p>
              <a href="mailto:bruce.van.ysseldyk@gmail.com">
                <h5>bruce.van.ysseldyk@gmail.com</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
