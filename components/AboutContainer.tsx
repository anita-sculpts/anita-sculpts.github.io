import Header from "./Header";

const AboutContainer = () => (
    <div className="container about-container">
        <Header color="white" addTopMargin={true}>
            About
        </Header>
        <div className="text-container">
            <p>Ms. Ohriker has been sculpting since 1989.  She works primarily in stone.  Her pieces consist of Alabaster, Agate, Marble, Limestone and African Wonderstone.  She has also worked with Acrylic, which affords a unique three-dimensional quality to a subject.  Her pieces are mostly abstract or representational as she prefers a direct approach to carving although she does have realistic pieces, such as a bust of her father, in her collection.</p>
            <p>She is the recipient of the Peacock Award and has participated in numerous exhibits in New York at LaGuardia Airport, St. John’s College, United Artists Theater at Broadway, Post College, Chelsea Center, L.I. and the Weisser Library.  She has been a member of the Alliance of Queens Artists, the Great Neck Artists’ Network, and the Catherine Lollard Wolf Art Club.</p>
            <p>Ms. Ohriker was born in Istanbul, Turkey, and lived in Holland, Italy and France before coming to the United States at the age of 8.  She is a graduate of Barnard College where she majored in Art History/Environmental Sciences.  Her first exposure to sculpting was at Columbia University, which awakened an interest to pursue further study at the Aline Geist Sculpture Workshop.</p>
            <p>The majority of her work has been acquired; however, there are several pieces available for purchase.</p>
            <p>Email: ansculptor@aol(dot)com</p>
        </div>
        <Header color="white" addTopMargin={true}>
            FAQ
        </Header>
        <div className="text-container">
            <p>How long does it take to make a sculpture?</p>
            <p><i>It depends on how complicated a piece it is.  Making a sculpture involves picking out a stone, deciding on a subject if it’s an indirect carving (something representational), or seeing where the stone takes you if it’s a direct carving (abstract).  Sometimes, it goes smoothly, but sometimes it’s more challenging.  Once you have completed giving shape to the stone (chiseling), there is the process of finishing—rasping, sanding, and polishing—before you have the final product. Then comes the mounting—this requires putting a pin in the stone so that you can anchor it to a base. On average, it usually takes me 4 to 6 months to complete a piece.</i></p>
            <p>How do you decide what to make?</p>
            <p><i>Sometimes, in the course of my everyday life, something catches my eye, and I think it would be an interesting subject to carve.  But more often, I’ve been fortunate in knowing the people for whom I’ve made sculptures, and I direct my efforts to what is relevant to them.  Each piece has a story—when my friend had a second child, her first child was 3 years old (constantly seeking her attention), so “Divided Attention” came about; when my cousin graduated from optometry school, I made “Blink”, to represent an abstract eye; I made “Underarms” and “Bikini Line” for my friend who owns a spa specializing in hair removal.  I made “Just Looking," (something I often hear in my line of work) for the challenge of carving a pair of glasses out of stone.  My sculptures have a personal appeal to their owner’s, therefore each feels their piece is special.  If I don’t have anyone in mind when starting a sculpture, I let the stone guide me, “Peak”, “Evolution”, “Gazing Up” and “Gazing Up Too” are examples of this.</i></p>
            <p>Are the sculptures you have for sale?</p>
            <p><i>All the sculptures that are available are so noted and certainly for sale.</i></p>
            <p>How do you price your work?</p>
            <p><i>I calculate prices from the cost of materials, the cost of studio time, and the number of hours that went into a piece.</i></p>
            <p>What advice would you give to aspiring sculptors?</p>
            <p><i>When you are an artist, whatever your medium, you have an innate need to create. You get satisfaction from having your vision come to life. I have been sculpting for over 30 years, and, for me, the most difficult part of creating an abstract sculpture is resisting my tendency to plan ahead.  What I consider some of my best pieces were a result of unexpected breakage. Unlike clay, when you work with stone, wood, or acrylic, once you take something out, you cannot put it back, so the “negative space” becomes very important. In sculpture, as well as in life, when you work with preconceptions, you are not open to other possibilities, and it limits your ability to maximize your potential. Lastly, in my opinion, every work of art should be a labor of love. If the result is financial success, that’s a bonus!</i></p>
            <p className="text-end">***</p>
        </div>
    </div>
);

export default AboutContainer;