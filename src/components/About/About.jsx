import Team from "../Home/Team/Team";
import Banner from './../Banner/Banner';


const About = () => {
    return (
      <div>

        <Banner></Banner>

        <div className="py-8">
            <h2 className="text-5xl font-bold mb-5 mt-5 my-2">About<span className="text-orange-800"> Us</span></h2>
            <p className="text-left"><span className="font-semibold text-base">Software Developers:</span> are crucial in building and maintaining software applications. They work with various programming languages, including Python, Java, and JavaScript, to create functional and efficient code. Their work involves designing, coding, testing, and debugging to ensure applications meet user needs and perform optimally.</p><br/>
            <p className="text-left"><span className="font-semibold text-base">Cyber Specialist:</span> play a key role in safeguarding digital environments from security threats. They implement security protocols, monitor networks for unusual activity, and respond to potential breaches. Their expertise helps protect sensitive information and ensure system integrity.</p> <br/>
            <p className="text-left"><span className="font-semibold text-base">Backend Developers:</span> focus on the server-side infrastructure of applications. They design and manage databases, develop server logic, and create APIs that facilitate communication between the server and the frontend. Their work ensures that applications run smoothly and securely.</p><br/>
            <p className="text-left"><span className="font-semibold text-base">Product Managers:</span> oversee the entire development process of software products. They coordinate between developers, designers, and stakeholders to define product requirements, manage timelines, and ensure that the final product aligns with business goals and market needs.</p>
        </div>
            <Team></Team>
        </div>
    );
};

export default About;