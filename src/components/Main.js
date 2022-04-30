import React from "react";
import heroImage from "../images/dan-dimmock-sNwnjxm8eTY-unsplash.jpeg";

function Main() {
  return (
    <div>
      <main>
        <section className="intro">
          <img src={heroImage} className="image__main" alt="logo" />
        </section>
        <section>
          <p>
            Navigating college admissions can be overwhelming. There are over
            5000 colleges and universities in the United States alone. LEAD
            offers services for students at all levels of preparation that
            include: extracurricular consulting, mentorship, application
            preparation, developing your application list, choosing your school,
            choosing your major, and many others completely depending on the
            needs of the student.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Main;
