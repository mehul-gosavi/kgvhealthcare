import React from "react";
import "./OurTeam.css";

function OurTeam() {
  return (
    <div className="team-page">

      {/* Header Section */}
      <section className="team-hero">
        <h1>Meet Our Team</h1>
        <p>
          A passionate group of professionals dedicated to animal health,
          innovation, and natural care.
        </p>
      </section>

      {/* Team Members */}
      <section className="team-section">
        <h2>Our Leadership & Experts</h2>

        <div className="team-grid">

          {/* MEMBER 6 (NEW) */}
          <div className="team-card">
            <img src="/images/team/VilasPhoto.jpeg" alt="Quality Assurance Head" />
            <h3>Dr. Vilasgiri Govindgiri Gosavi</h3>
            <span>Director Technical Support </span>
            <p>
              With 27 years of distinguished experience across the pharmaceutical, chemical, and pharma engineering sectors, Dr. Vilasgiri Govindgiri Gosavi is a seasoned leader specializing in technical strategy and quality compliance. A postgraduate in Analytical Chemistry and a certified Naturopathy Doctor, he uniquely blends scientific rigor with holistic wellness expertise. Dr. Vilasgiri is a certified ISO 9001:2015 Lead Auditor with an extensive background in Quality Control and Quality Assurance, ensuring that operational standards meet the highest global benchmarks. Having previously served as a CEO in the feed and feed supplement industry, he now leverages his executive acumen as Director of Technical Support, where he focuses on mentoring high-performance teams and providing the strategic technical oversight necessary to drive innovation and business growth.

            </p>
          </div>


        {/* MEMBER 5 (NEW) */}
          <div className="team-card">
            <img src="/images/team/AvinashPhoto.jpeg" alt="Production Manager" />
            <h3>Mr. Avinash Popat Karde </h3>
            <span>Director Production</span>
            <p>
              Mr. Avinash Popat Karde, a production expert with over 13 years of experience. With a background in Electrical Engineering, Mr. Avinash spent over a decade managing high-quality production for major companies like Alcon Electronics and TDK (ARC). Later, as a Production Head in the Mack Pharmatech and in healthcare and feed supplement industry Solman Healthcare, he gained a deep understanding of how to make the best nutritional supplements for animals. Today, he uses all that technical knowledge to run his own business, focusing on one goal: providing high-quality, healthy feed supplements for your cattle.
            </p>
          </div>


         {/* MEMBER 4 */}
          <div className="team-card">
            <img src="/images/team/SanujaPhoto.jpeg" alt="Sales Head" />
            <h3>Miss Sanuja Vikas Vadgaonkar </h3>
            <span>Director Marketing</span>
            <p>
              Miss. Sanuja is a young, dynamic, enthusiastic person having a engineering degree in electrical. She  has total 16 years of working experience in different organizations and different departments like production, QA, QC and Marketing.She had worked as  Assistant Manager in marketing department in the companies like Mack Pharmatech Pvt. Ltd. Due to her passion in marketing and love for Animals she has decided to enter in new business for Animals lie manufacturing of Feed and Feed Supplement. 
            </p>
          </div>

          {/* MEMBER 2 */}
          <div className="team-card">
            <img src="/images/team/SunitaPhoto.jpeg" alt="Co-Founder" />
            <h3>Mrs. Sunita Popat Karde</h3>
            <span>Director</span>
            <p>
              She is well educated person having experience of marketing in the company like Maitrey.She has worked as Senior Marketing and market development department and expanded the business. She had around 500 people working under her guidance in India and Abroad. But due to unexpected reason her company is stopped working in Maitrey and now decided to move into new business of FEED and FEED SUPPLEMENTS.
            </p>
          </div>

           {/* MEMBER 3 */}
          <div className="team-card">
            <img src="/images/team/MehulPhoto.jpeg" alt="R&D Head" />
            <h3>Mr. Mehul Vilasgiri Gosavi</h3>
            <span>Director</span>
            <p>
              Mehul Vilasgiri Gosavi is a dynamic entrepreneur who seamlessly bridges the gap between high-level technical expertise and a deep-seated passion for animal welfare. With a solid foundation in Computer Engineering and a Post Graduate Diploma in Advanced Computing (DAC), he possesses the analytical rigour and programming depth required to navigate today’s complex digital landscape. Motivated by a desire for fresh challenges and a genuine love for animals, Mehul is embarking on a visionary journey to integrate Artificial Intelligence into the animal care sector. 

            </p>
          </div>

          {/* MEMBER 1 */}
          <div className="team-card">
            <img src="/images/team/SunaynaPhoto.jpeg" alt="Founder" />
            <h3>Mrs. Sunayana Vikas Vadgaonkar</h3>
            <span>Director</span>
            <p>
              She has highly qualified person with M.A B.Ed. qualification. She left her teaching profession to pursue her interest in business and her passion for starting her own venture. For the past 20 years, she has been running her own business, exporting food products to foreign countries such as the UK, USA, Singapore, Abu Dhabi, Saudi Arabia, and Japan, etc. since last 20 years.
              Now she decided to move in the new business of FEED and FEED SUPPLEMENTS manufacturing for the Animals as she think that “Service to Animal is Service to God”.
            </p>
          </div>

         

          

          
          

        </div>
      </section>

      {/* Company Culture */}
      <section className="team-culture">
        <h2>Our Culture</h2>
        <p>
          We believe in teamwork, transparency, and trust. Our culture blends
          traditional knowledge with modern science to create effective and
          sustainable animal healthcare products.
        </p>

                <div class="culture-slider">
                    <div class="culture-track">
                      {/* <!-- First set --> */}
                      
                      <img src="/images/company/comp3.jpeg" alt="Quality Assurance Head"/>
                      <img src="/images/company/comp2.jpeg" alt="Quality Assurance Head" />
                      <img src="/images/company/comp1.jpeg" alt="Quality Assurance Head" />
                      <img src="/images/company/comp4.jpeg" alt="Quality Assurance Head"/>
                      <img src="/images/company/img1.jpeg" alt="Quality Assurance Head"/>

                      {/* <!-- Duplicate set --> */}
                    
                      <img src="/images/company/comp3.jpeg" alt="Quality Assurance Head"/>
                      <img src="/images/company/comp2.jpeg" alt="Quality Assurance Head" />
                      <img src="/images/company/comp1.jpeg" alt="Quality Assurance Head" />
                      <img src="/images/company/comp4.jpeg" alt="Quality Assurance Head"/>
                      <img src="/images/company/img1.jpeg" alt="Quality Assurance Head"/>
                  </div>
                </div>
      </section>

    </div>
  );
}

export default OurTeam;
