import React, { useState } from "react";
import './index.css';

const topics = [
  {
    name: "html",
    image: "html.png",
    pdfs: ["html.pdf","html2.pdf","html3.pdf"],
  },
  {
    name: "css",
    image: "csslogo.png",
    pdfs: ["css.pdf","css2.pdf"],
  },
  {
    name: "JavaScript",
    image: "jslogo.png",
    pdfs: ["js1.pdf","js2.pdf","js3.pdf"],
  },
  {
    name: "ReactJS",
    image: "react1.png",
    pdfs: ["react2.pdf","react3.pdf"],
  },
  {
    name: "MongoDB",
    image: "mongo.png",
    pdfs: ["mongo.pdf","mongo1.pdf","mongo2.pdf","mongo3.pdf","mongo4.pdf"],
  },
  {
    name: "Node.js",
    image: "node.png",
    pdfs: ["node1.pdf","node2.pdf","node3.pdf","node4.pdf","node5.pdf","node6.pdf","node7.pdf"],
  },
  {
    name: "Express.js",
    image: "express1.png",
    pdfs: ["express1.pdf"],
  },
  {
    name: "HR-ROUND",
    image: "hr.jpg",
    pdfs: ["hr.pdf","hr2.pdf","hr3.pdf"],
  },
  {
    name: "BOOTSTRAP",
    image: "bootstrap.jpg",
    pdfs: ["boot.pdf","boot2.pdf"]
  },
  {
    name: "MERN STACK ",
    image: "mern.jpg",
    pdfs: ["mern1.pdf","mern2.pdf","mern3.pdf","mern4.pdf","mern5.pdf","mern6.pdf","mern7.pdf","mern8.pdf","mern9.pdf","mern10.pdf"],
  },
];

const App = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleClick = (index) => {
    setSelectedTopic(index);
  };

  const handleDownload = (pdf) => {
    const link = document.createElement('a');
    link.href = `/pdfs/${pdf}`;
    link.download = pdf;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container">
      <h1>JOE'S INTERVIEW PREPARATION PORTAL</h1>
      <div className="topics">
        {topics.map((topic, index) => (
          <div className="topic" key={index} onClick={() => handleClick(index)}>
            <img src={process.env.PUBLIC_URL + "/" + topic.image} alt={topic.name} />
            <h2>{topic.name}</h2>
          </div>
        ))}
      </div>
      {selectedTopic !== null && (
        <div className="pdfs">
          <h2>{topics[selectedTopic].name} PDFs</h2>
          {topics[selectedTopic].pdfs.map((pdf, index) => (
            <div className="pdf" key={index} onClick={() => handleDownload(pdf)}>
              <p>{pdf}</p>
              <button>Download</button>
            </div>
            
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
