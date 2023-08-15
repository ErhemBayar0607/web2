const zuragnuud = ["🐶", "🐱", "🐭", "🐰", "🦊", "🐻", "🐼", "🐨"];

  const HusnegtHolih = (massiv) => massiv.sort(() => 0.5 - Math.random());

  const togloomEhluuleh = () => {
    const board = document.getElementById("board");
    board.innerHTML = "";

    const holisonZuragnuud = [...zuragnuud, ...zuragnuud];
    HusnegtHolih(holisonZuragnuud);

    for (const zurag of holisonZuragnuud) {
      const card1 = card1Uusgeh(zurag);
      board.appendChild(card1);
    }
  };

  const card1Uusgeh = (zurag) => {
    const card1 = document.createElement("div");
    card1.classList.add("card1");
    card1.textContent = "?";
    card1.addEventListener("click", () => card1Delgeh(card1, zurag));
    return card1;
  };

  let ehniiDelgesencard1 = null;
  let hoyrtDelgesencard1 = null;

const card1Delgeh = (card1, zurag)=> {
    if (!ehniiDelgesencard1) {
      ehniiDelgesencard1 = card1;
      ehniiDelgesencard1.textContent = zurag;
    } else if (!hoyrtDelgesencard1) {
      hoyrtDelgesencard1 = card1;
      hoyrtDelgesencard1.textContent = zurag;
      setTimeout(() => delgesencard1Shalgah(), 500);
    }
  }

  const delgesencard1Shalgah = () => {

    /*Дэлгэсэн 2 карт тохирч байгаа эсэхийг шалгах функц бичээрэй. 
    Таарсан картнуудыг "taarsan" гэсэн class-тай элеметүүд дээр 
    нэмээд дараа нь хожсон эсэхийг шалгана. Жишээ нь ehniiDelgesencard1.classList.add("taarsan");
    Таараагүй тохиолдолд картуудыг буцаагаад нууна.*/
    if(ehniiDelgesencard1.textContent==hoyrtDelgesencard1.textContent){
      ehniiDelgesencard1.classList.add("taarsan");
      hoyrtDelgesencard1.classList.add("taarsan")
      ehniiDelgesencard1 =null;
      hoyrtDelgesencard1 =null;
      hojsonEseh();
    } else card1aaNuuh();
  }

  const card1aaNuuh =() => {
    ehniiDelgesencard1.textContent="?"
    hoyrtDelgesencard1.textContent="?"
    ehniiDelgesencard1=null;
    hoyrtDelgesencard1 = null;
  }

  const hojsonEseh=()=> {
    const taarsancard1nuud = document.querySelectorAll(".card1.taarsan");
        if (taarsancard1nuud.length==zuragnuud.length*2) {
          setTimeout(() => {
            alert("Баяр хүргэе та яллаа");
          }, 500);
        }
  }