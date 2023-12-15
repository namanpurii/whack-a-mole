import { useEffect, useState } from "react";
import holeImg from "/hole.png";
import moleImg from "/mole.png";

function Game() {
  const [score, setScore] = useState(0);
  const [moles, setMoles] = useState(new Array(9).fill(false));

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIdx = Math.floor(Math.random() * moles.length);
      setMoles((currMoles) => {
        const newMoles = [...currMoles];
        newMoles[randomIdx] = true;
        return newMoles;
      });
      setTimeout(() => {
        setMoles((currMoles) => {
          const newMoles = [...currMoles];
          newMoles[randomIdx] = false;
          return newMoles;
        });
      }, 530);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [moles]);

  function wackMole(index) {
    if (!moles[index]) return;
    const newMoles = [...moles];
    newMoles[index] = false;
    setScore(score + 1);
    setMoles(newMoles);
  }
  return (
    <div className="h-screen flex flex-col bg-black items-center justify-center space-y-8">
      <span className="text-3xl text-white">Score {score}</span>
      <div className=" cursor-fancy place-items-center bg-[#bdf15a] grid grid-cols-3 grid-rows-3 w-fit">
        {moles.map((isMole, idx) => (
          <div key={idx}>
            <img
              src={isMole ? moleImg : holeImg}
              alt=""
              onClick={() => {
                wackMole(idx);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game;
