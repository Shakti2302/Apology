import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [showApology, setShowApology] = useState(false);
  const [ifYes, setIfYes] = useState(false);
  const [ifNo, setIfNo] = useState(false);
  const [ifDateYes, setIfDateYes] = useState(false);
  const [ifDateNo, setIfDateNo] = useState(false);

  const handleButtonClick = () => {
    setShowApology(true);
  };

  const yesButtonClick = () => {
    setIfYes(true);
    setIfNo(false); // Ensure that ifNo is hidden
  };

  const noButtonClick = () => {
    setIfNo(true);
    setIfYes(false); // Ensure that ifYes is hidden
  };
  const yesDateButtonClick = () => {
    setIfDateYes(true)
    setIfDateNo(false);
  }
  const noDateButtonClick = () => {
    setIfDateNo(true);
    setIfDateYes(false);
  }
  const CloseEveryhtingClick = () => {
    setShowApology(false)
    setIfYes(false);
    setIfNo(false);
    setIfDateYes(false);
    setIfDateNo(false);
  }
  return (
    <>
      <div className="container">
        <div className="image_container">
          <img
            src="https://m.media-amazon.com/images/I/81V+yXtxcIL._AC_UL320_.jpg"
            alt=""
          />
          <h1 className="img_h1">Hello Subhadra!</h1>
        </div>

        <div className="first-coulmn">
          <button className="sorry_btn" onClick={handleButtonClick}>
            I AM SORRY! Please Click ME 🥺
          </button>

          {showApology && (
            <div className="apology_message">
              <h2>
                I know I was rude yesterday <br />I Am Very Sorry For That!
              </h2>
              <h2>Please Forgive Me!</h2>
              <button className="yes_button" onClick={yesButtonClick}>
                Yes!
              </button>
              <br />
              <button className="no_button" onClick={noButtonClick}>
                No!
              </button>
            </div>
          )}

          {ifYes && (
            <div className="if_yes">
              <h1>Thank You For Forgiving Me Really! 🫣</h1>
              <h2>
                After Talking In These Few Days I've Come To Realize That How
                Much I Respect You And Your Thinking. And I don't Want To Ruin
                It By My Stupid Mistake
              </h2>
              <h2>
                If you're available on 22nd of December Can I Take You For A
                Dinner As An Apology Please? 🥺
              </h2>
              <button className="date_yes_btn" onClick={yesDateButtonClick}>
                If Yes!
              </button>
              <button className="date_no_btn" onClick={noDateButtonClick}>
                If No!
              </button>
            </div>
          )}

          {ifNo && (
            <div className="if_no">
              <h1>
                Please Forgive Me! I know I took it too lightly but when I felt
                so bad about myself! I am honestly Sorry
              </h1>
              <h2 style={{ fontFamily: "cursive" }}>
                Please Click The Yes Button! 🥺
              </h2>
            </div>
          )}

          {ifDateYes && (
            <div className="if_date_yes">
              <h2>
                I'll Reach Odisha On 22nd of December. <br /> Let's go to a
                great momo place, I know.
              </h2>
              <h2>
                I have no idea you've said Yes in this application. Can you just
                Text ME. <br />
                "Thik Hai Maff Kiya" <br />
                I'll know you've said Yes For A Momo Dinner!
              </h2>
              <button
                className="close_container"
                onClick={CloseEveryhtingClick}
              >
                Go To The Beginning To See Evrything Again
              </button>
            </div>
          )}

          {ifDateNo && (
            <div className="if_date_no">
              <h1>Ek Chance Please!</h1>
              <h2>
                I know 1year chote hein aap se par you see Virat V Anuskha se
                chote hein. I think they are a great couple. I really don't care
                about age there is enough understanding and mutual respect!
              </h2>
              <h2>Itne v bure nehi hai 🥺</h2>

              <h2> A joke if you laugh you'll click the above Yes button </h2>
              <h3>
                Boy: Challte Chalte Yunhi Ruk Jata Hoon <br />
                Main Bethe Bethe Yunhi Kho Jata Hoon <br />
                Main Kya Ye Hi Pyaar Hy . . .??? <br /> Girl: Nahi Ye Kamzori Hy
                Subha Shaam Glucose Piya Karo . . .
              </h3>
              <button
                className="close_container"
                onClick={CloseEveryhtingClick}
              >
                Go To The Beginning To See Everything Again
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
