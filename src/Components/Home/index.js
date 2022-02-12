import React, { useEffect, useState } from "react";
import firebaseApp from "../../config/firebaseConfig";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import "./index.css";
export default function Home() {
  const [url, setUrl] = useState(null);

  const storage = getStorage(firebaseApp);

  async function getUrl() {
    const storageRef = ref(
      storage,
      `gs://portafolio-804f2.appspot.com/Cv/LauZarateCV.pdf`
    );
    const urlDowload = await getDownloadURL(storageRef).then((url) => url);
    setUrl(urlDowload);
  }

  function downloadCV() {
    window.open(url, "_blank");
  }

  useEffect(() => {
    getUrl();
  }, []);

  return (
    <div className="home">
      <div className="cvContain">
        <p className="name">Hi, I'm Lautaro Zarate</p>
        <p className="job">Web Developer</p>
        <p className="descrption">
          This is my personal portfolio, here you can see the projects I worked
          on and also my personal information. Thanks for your attention
        </p>
        <div className="btnContain">
          <button className="btn1" onClick={downloadCV}>
            Curriculum vitae
          </button>
        </div>
      </div>
    </div>
  );
}
