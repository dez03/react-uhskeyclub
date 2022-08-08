// This page is not going to be on the main website since I don't know what to put here, I might add it in the future, but for now, no.
import React from "react";

const Dues = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="m-0 mt-4">
          Union High School Key Club dues are $18 per member.
        </h1>

        <p className="m-0 mt-4 w-3/5 text-2xl text-left">
          Key Club is the oldest and largest student-led service organization
          for high school students. Your payment helps us continue giving
          members a place to develop leadership through service. Clubs like ours
          made an impact—collecting food for local food banks, raising money and
          participating in Trick or Treat for UNICEF, bringing awareness to the
          global water crisis with the Thirst Project, supporting community
          initiatives and much more.
        </p>

        <h2>Pay Schools Central</h2>
        <h5>
          We use Pay Schools Central to handle all payments for UHS Key Club
        </h5>
      </div>

      <h1>Registration</h1>
      <h4>Create User</h4>
      <article className="prose lg:prose-xl">
        1) To set up an account, go to www.payschoolscentral.com and click{" "}
      </article>
    </>
  );
};

export default Dues;
