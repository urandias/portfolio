import lightmodeU from './assets/lightmodeU.jpg'
import BioContainer from "./BioContainer"; 

const Uran = () => {
    return (
        <BioContainer>
            <img src={lightmodeU} alt="image of myself" className="profilePic" />
            <div className="text">
                <header className="name">Uran Dias</header>
                <h1 className="title">Full Stack Developer</h1>
                <h2 className="bio">Skilled in both front-end and back-end developement, I am passionate about transforming complex challenges into efficient, scalable and elegant solutions. I specialise in crafting robust, user-friendly applications that bring innovative ideas to life.</h2>
            </div>
        </BioContainer>
    );
};

export default Uran;
