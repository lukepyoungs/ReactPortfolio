import React from 'react';

function Resume() {
  return (
    <div className="p-8 bg-primary text-textLight min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-8">My Resume</h2>
      <div className="max-w-4xl mx-auto bg-secondary p-8 rounded-lg shadow-xl">
        <section className="mb-8">
          <h3 className="text-2xl font-semibold">Professional Summary</h3>
          <p className="mt-4 text-lg">
            Dedicated Electrical and Computer Engineering graduate focused on Data Science, Software Engineering, and Signal Processing. Seeking a role to apply my technical skills in software engineering, embedded systems, or machine learning.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold">Education</h3>
          <div className="mt-4">
            <h4 className="text-xl font-semibold text-center">University of Texas at Austin</h4>
            <p className="italic text-center">Bachelor of Science, Electrical and Computer Engineering (Aug 2019 – Aug 2024)</p>
            <ul className="list-disc list-inside mt-4">
              <li>Technical Core focus in Data Science and Information Technology</li>
              <li>Relevant Coursework: Software Design and Implementation, Algorithms, Data Science Principles, Data Science Laboratory</li>
              <li>Led student initiatives for remote-learning during COVID-19 pandemic (2020-2021)</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold">Experience</h3>

          <div className="mt-4">
            <h4 className="text-xl font-semibold text-center">DataAnnotation – Software Developer (AI Trainer)</h4>
            <p className="italic text-center">Apr 2024 – Present</p>
            <ul className="list-disc list-inside mt-4">
              <li>Developed programs leveraging LLMs across multiple programming languages.</li>
              <li>Specialized in predictive modeling, working on 50+ datasets for impactful insights.</li>
              <li>Designed and implemented deep learning models and various predictive techniques.</li>
              <li>Optimized AI code responses in C, C++, Java, JavaScript, SQL, and Python.</li>
              <li>Applied advanced feature engineering, including PCA and vectorization, for accuracy.</li>
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="text-xl font-semibold text-center">Southwest Research Institute – Student Engineer (Embedded Systems)</h4>
            <p className="italic text-center">Jun 2023 – Aug 2023</p>
            <ul className="list-disc list-inside mt-4">
              <li>Utilized LDRA Tool Suite for static analysis code testing of avionic systems in C and C++.</li>
              <li>Implemented code changes in pre-existing software to remove over 700 CWE cyber-security violations.</li>
              <li>Led multiple meetings with senior engineers to present work and find insight on design issues.</li>
              <li>Praised for effective communication throughout the project by Software Lead.</li>
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="text-xl font-semibold text-center">Favor – Delivery Driver</h4>
            <p className="italic text-center">Jun 2020 – Present</p>
            <ul className="list-disc list-inside mt-4">
              <li>Independently delivered groceries and food to retail and commercial customers.</li>
              <li>Recorded over 100 customer deliveries with a 5/5 rating.</li>
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="text-xl font-semibold text-center">Einstein Bagels – Seasonal Crew Member</h4>
            <p className="italic text-center">Oct 2020 – Dec 2020</p>
            <ul className="list-disc list-inside mt-4">
              <li>Upheld high standards of customer service during fast-paced breakfast rush.</li>
              <li>Developed initial workplace communication with coworkers and customers.</li>
              <li>Performed kitchen duties and diligently kept the workplace clean.</li>
              <li>Collaborated with coworkers to increase workplace efficiency when busy.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold">Projects</h3>
          <div className="mt-4">
            <h4 className="text-xl font-semibold text-center">Predicting Housing Prices, Data Science Laboratory</h4>
            <p className="italic text-center">Mar 2023</p>
            <ul className="list-disc list-inside mt-4">
              <li>Trained a predictive model using optimized Gradient Boosted Regressors, achieving test accuracy over 90%.</li>
              <li>Employed feature engineering techniques: outlier detection, categorical variable transform, and log level transform.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold">Skills & Accomplishments</h3>
          <ul className="list-disc list-inside mt-4">
            <li>Proficient in Python, C, C++, SKLearn, Pandas, Numpy, Microsoft Word, PowerPoint, Interpersonal Communication</li>
            <li>Familiar with TensorFlow, PyTorch, Requests, Scipy, MongoDB, Microsoft Excel, Tableau, Matlab, Java, Verilog, SQL</li>
            <li>HackerRank Python Certification (2021)</li>
            <li>UT Club Golf Team (2019 – Present)</li>
            <li>Volunteer at San Antonio Food Bank and Ronald McDonald House</li>
            <li>Avid golfer with multiple amateur tournament victories</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Resume;
