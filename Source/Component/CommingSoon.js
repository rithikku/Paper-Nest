import { COMMING_URL } from "../Utils/constants";

const CommingSoon = () => {
    return (
        <div className="coming-soon">
            <div className="coming-soon-container">
                <h1>📄 The Question Paper You’re Looking For</h1>
                <p className="highlight">✨ Coming Soon ✨</p>
                <p className="message">
                    We’re working hard to add this paper. Please check back later!
                </p>
            </div>
            <img src={COMMING_URL} alt="Coming Soon Illustration" />
        </div>
    );
};

export default CommingSoon;
