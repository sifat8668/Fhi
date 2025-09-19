import React, { useEffect, useRef } from "react";

const GG = () => {
  // Used to reference elements for imperative JS
  const fileListRef = useRef(null);
  const loadingOverlayRef = useRef(null);
  const loadingVideoContainerRef = useRef(null);
  const searchInputRef = useRef(null);
  const downloadingScreenRef = useRef(null);
  const downloadFileNameRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressTextRef = useRef(null);
  const downloadCancelBtnRef = useRef(null);
  const adsContainerTopRef = useRef(null);
  const downloadingAnimationRef = useRef(null);
  const funVideoWrapperRef = useRef(null);
  const funVideoRef = useRef(null);

  useEffect(() => {
    // Load Google Fonts
    const fontLink = document.createElement("link");
    fontLink.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@700;400&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    // Load Google AdSense JS
    const adScript = document.createElement("script");
    adScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    adScript.async = true;
    document.head.appendChild(adScript);

    // --- JS firewall ---
    const blockedAgents = ["sqlmap", "nikto", "curl", "wget", "fuzz", "acunetix"];
    const ua = navigator.userAgent.toLowerCase();
    if (blockedAgents.some(bot => ua.includes(bot))) {
      if (document.body) {
        document.body.innerHTML = "<h1 style='color:red;text-align:center;margin-top:50px;'>Access Denied</h1>";
      }
      throw new Error("Blocked User-Agent");
    }
    const badPatterns = [/(\.\.\/|<script|%3Cscript|\/etc\/passwd)/i];
    const urlParams = new URLSearchParams(window.location.search);
    for (const [key, value] of urlParams) {
      if (badPatterns.some(rx => rx.test(value))) {
        if (document.body) {
          document.body.innerHTML = "<h1 style='color:red;text-align:center;margin-top:50px;'>Suspicious Activity Detected</h1>";
        }
        throw new Error("Blocked suspicious query");
      }
    }

    // Main script logic
    // ... (all JS logic from your HTML file, adapted for React)
    // To keep the conversion exact, you can copy/paste your JS and replace any
    // document.getElementById('...') calls with the corresponding refs above.
    // Example:
    // const fileList = fileListRef.current;
    // const loadingOverlay = loadingOverlayRef.current;
    // etc.

    /*** Your JavaScript logic goes here, unchanged except for DOM queries:
     * - Replace document.getElementById('id') with ref.current for each dom element
     * - The rest of your logic can remain exactly the same
    ***/

    // Example:
    // const fileList = fileListRef.current;
    // const loadingOverlay = loadingOverlayRef.current;
    // const loadingVideoContainer = loadingVideoContainerRef.current;
    // ...
    // And continue with your logic

  }, []);

  // The structure below is a direct conversion from your HTML.
  // All styles are included inside a <style> tag for exactness.

  return (
    <>
      <style>{`
        :root {
          --primary: #7f5af0;
          --background: #18181b;
          --surface: #232338;
          --accent: #5ffbf1;
          --danger: #ff5470;
          --success: #36f09f;
          font-family: 'Montserrat', system-ui,Segoe UI,Roboto,Arial;
          color: #f8fafc;
          font-size: 16px;
        }
        html, body { margin:0; padding:0; min-height:100vh; background: linear-gradient(120deg, #232338 0%, #7f5af0 100%); }
        body { display:flex; flex-direction:column; min-height:100vh; }
        header { display:flex; justify-content:space-between; padding:20px; background:var(--surface); color:#fff; }
        header h1 { margin:0; font-size:2rem; background:linear-gradient(90deg,#5ffbf1,#7f5af0); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
        .container { flex:1; display:flex; flex-direction:column; padding:50px; max-width:700px; margin:auto; gap:12px; }
        .btn { background:linear-gradient(90deg,#7f5af0,#5ffbf1); color:#fff; padding:8px 16px; border-radius:8px; border:0; cursor:pointer; font-weight:700; }
        .btn.danger{background:linear-gradient(90deg,#ff5470,#ff96c0);} .btn.secondary{background:linear-gradient(90deg,#232338,#7f5af0); border:1px solid var(--accent);}
        .files{
          background:#232338; 
          padding:12px; 
          border-radius:12px; 
          min-height:200px; 
          max-height:660px; 
          overflow-y:auto; 
          overflow-x:hidden;
          display:flex; 
          flex-direction:column;
          gap:0;
        }
        .file{
          display:flex; 
          flex-direction:column;
          align-items:center; 
          justify-content: flex-start; 
          padding:16px 0 10px 0; 
          border-bottom:1px solid #333; 
          position:relative;
          gap: 12px;
        }
        .meta{
          display:flex; 
          align-items:center; 
          gap:10px; 
          justify-content:center;
          margin-top: 10px;
        }
        .thumbnail{
          width:200px;
          height:150px;
          border-radius:12px;
          object-fit:cover;
          background:#232338;
          border:4px solid var(--accent);
          margin-right:2px;
        }
        .name{
          font-weight:700; 
          color:var(--accent);
          word-break: break-all;
          text-align:center;
          font-size: 1.13em;
        }
        .actions{display:flex; gap:6px; justify-content:center; margin-top:8px;}
        #loadingOverlay {
          position: fixed;
          top:0; left:0; right:0; bottom:0;
          background: rgba(20,20,30,0.85);
          z-index: 9999;
          display: none;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        .loadingVideoContainer {
          width: 420px;
          height: 240px;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        #downloadingScreen {
          position: fixed;
          top:0; left:0; right:0; bottom:0;
          background: rgba(20,20,30,0.95);
          z-index: 10000;
          display: none;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: 90px;
        }
        #adsContainerTop {
          width: 260px;
          height: 195px;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          overflow: hidden;
        }
        #downloadBar {
          width: 360px;
          background: #232338;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        #downloadingAnimation {
          width: 48px;
          height: 48px;
          margin-bottom: 10px;
          display: none;
        }
        #progressBarContainer {
          width: 100%;
          background: #191925;
          border-radius: 8px;
          margin-top: 12px;
          height: 22px;
          overflow: hidden;
        }
        #progressBar {
          background: linear-gradient(90deg,#7f5af0,#5ffbf1);
          height: 100%;
          width: 0;
          transition: width 0.2s;
        }
        #progressText {
          margin-top: 8px;
          color: var(--accent);
          font-weight: bold;
          font-size: 1.1em;
          text-align: center;
          white-space: pre-line;
        }
        #downloadFileName {
          font-size: 1.2em;
          font-weight: 700;
          color: var(--accent);
          margin-bottom: 6px;
        }
        #downloadCancelBtn {
          background: linear-gradient(90deg,#ff5470,#ff96c0);
          color: #fff;
          padding: 8px 16px;
          border-radius: 8px;
          border: 0;
          cursor: pointer;
          font-weight: 700;
          margin-top: 18px;
          display: none;
        }
        #adsContainerBottom {
          width: 100vw;
          position: fixed;
          left: 0;
          bottom: 0;
          z-index: 99999;
          background: #232338;
          min-height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 -4px 24px rgba(0,0,0,0.18);
        }
        .funVideoWrapper {
          width: 420px;
          margin: 0 auto 10px auto;
          display: none;
          position: relative;
          z-index: 10;
        }
        .funVideoWrapper video {
          width: 100%;
          border-radius: 14px;
          box-shadow: 0 4px 32px rgba(0,0,0,0.17);
        }
        .footer-sections {
          width: 100vw;
          background: #18181b;
          color: #f8fafc;
          padding: 40px 6vw 90px 6vw;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-top: 70px;
          font-size: 1em;
          z-index: 999999;
          position: relative;
        }
        .footer-section-title {
          font-size: 1.18em;
          font-weight: 700;
          color: var(--accent);
          margin-bottom: 7px;
          letter-spacing: 1px;
        }
        .footer-section-content {
          color: #d4d6e0;
          line-height: 1.6;
          font-size: 1em;
          margin-bottom: 2px;
        }
        .footer-contact-link {
          color: var(--primary);
          text-decoration: underline;
          font-weight: 700;
        }
        @media (max-width: 600px){
          .container{padding: 12px;}
          #downloadBar, #adsContainerTop, #adsContainerBottom, .loadingVideoContainer, .funVideoWrapper {width: 98vw;}
          .footer-sections {padding: 28px 2vw 90px 2vw;}
        }
      `}</style>
      <header>
        <h1>Minecraft packs</h1>
      </header>
      <div className="container">
        <div className="funVideoWrapper" id="funVideoWrapper" ref={funVideoWrapperRef}>
          <video id="funVideo" controls preload="auto" ref={funVideoRef}></video>
        </div>
        <div style={{
          textAlign: "center", padding: "5px", border: "2px dashed #7f5af0", borderRadius: "12px"
        }}>
          <h1>⚠️⚠Important⚠⚠️</h1>
          <p style={{ margin: 0 }}>
            get an app by this <a href="https://sifat8668.github.io/mpacksapp/" style={{ color: "green" }}>Mpacks app</a> OR
          </p>
          <p style={{ fontSize: "0.9em", margin: "5px 0 0" }}>
            <br />
            Rename packs. for example, packname.mcpack.txt → packname.mcpack , Just remove .txt
          </p>
        </div>
        <div>
          <input type="text" id="searchInput" placeholder="Search packs..."
            style={{
              backgroundColor: "#FFFFFF", padding: "8px", width: "450px",
              borderRadius: "6px", border: "1px solid #666"
            }} ref={searchInputRef} />
          <div className="files" id="fileList" ref={fileListRef}></div>
        </div>
        <div id="loadingOverlay" ref={loadingOverlayRef}>
          <div className="loadingVideoContainer" id="loadingVideoContainer" ref={loadingVideoContainerRef}></div>
          <div id="loadingSpinner"></div>
          <div id="loadingText">Loading packs...</div>
        </div>
        <div id="downloadingScreen" ref={downloadingScreenRef}>
          <div id="adsContainerTop" ref={adsContainerTopRef}>
            <ins className="adsbygoogle"
              style={{ display: "block", width: "260px", height: "195px" }}
              data-ad-client="there is your ad id"
              data-ad-slot="there is your ad code"
              data-ad-format="auto"
              data-full-width-responsive="false"></ins>
          </div>
          <div id="downloadBar">
            <img id="downloadingAnimation"
              src="https://i.imgur.com/llF5iyg.gif"
              alt="Downloading..." ref={downloadingAnimationRef} />
            <div id="downloadFileName" ref={downloadFileNameRef}></div>
            <div id="progressBarContainer">
              <div id="progressBar" ref={progressBarRef}></div>
            </div>
            <div id="progressText" ref={progressTextRef}></div>
            <button id="downloadCancelBtn" ref={downloadCancelBtnRef}>Cancel Download</button>
          </div>
        </div>
        <div id="adsContainerBottom">
          <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="there is your ad id"
            data-ad-slot="there is your ad code"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        </div>
      </div>
      <div className="footer-sections">
        <div>
          <div className="footer-section-title">About</div>
          <div className="footer-section-content">
            Welcome to Minecraft File Manager! This website allows you to easily browse, search, and download Minecraft packs (.mcpack, .mcworld). curated for your gameplay experience. We aim to provide a simple, and secure way for the Minecraft community to discover new content. Good luck with your pack!
          </div>
        </div>
        <div>
          <div className="footer-section-title">Privacy Policy</div>
          <div className="footer-section-content">
            Your privacy is important to us. We do not collect personal data from users. Some non-personal information may be collected by third-party services (like Google AdSense) for analytics and advertising purposes. For details, please review the privacy policies of these respective services.
          </div>
        </div>
        <div>
          <div className="footer-section-title">Contact</div>
          <div className="footer-section-content">
            Have questions, feedback, or need support? You can reach out to us via email at <a href="mailto:nursifat3026@gmail.com" className="footer-contact-link">nursifat3026@gmail.com</a>. Good luck!
          </div>
        </div>
      </div>
    </>
  );
};

export default GG;
