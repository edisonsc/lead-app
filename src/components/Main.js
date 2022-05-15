import React from "react";
import heroImage from "../images/dan-dimmock-sNwnjxm8eTY-unsplash.jpeg";

function Main() {
  return (
    <div>
      <main>
        <section className="section">
          <img src={heroImage} className="image__main" alt="logo" />
        </section>
        <section className="section">
          <p className="text">
            Navigating college admissions can be overwhelming. There are over
            5000 colleges and universities in the United States alone. LEAD
            offers services for students at all levels of preparation that
            include: extracurricular consulting, mentorship, application
            preparation, developing your application list, choosing your school,
            choosing your major, and many others completely depending on the
            needs of the student.  Our team has over two decades of combined experience in higher
            education. We can guide you during this process. From your first
            college visit to application review to major consultation, we will
            be there every step of the way.
          </p>
      
        </section>
      </main>
    </div>
  );
}

export default Main;
