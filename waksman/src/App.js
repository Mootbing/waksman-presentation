import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <head>
        <title>Advanced Waksman 2024</title>
        <meta name="description" content="This is a website for the Advanced Waksman 2024 team. We are a group of students from the Waksman Institute of Microbiology who are interested in learning more about the field of microbiology. We are currently working on a project that involves studying the role of oil exterminators in the environment. Our goal is to raise awareness about the importance of these microorganisms and their potential applications in bioremediation. We hope that you find our website informative and engaging. Thank you for visiting!"/>
      </head>

      <body>
        <h1>E-Poster</h1>
        <iframe style={{height: "80vh"}} src="https://drive.google.com/file/d/1-uuHndjDpgM0UvXLHJPvG4g4h01Hp6le/preview" width="100%" height="100%" allow="autoplay"></iframe>
        <h1>Videos</h1>
        {/* intro */}
        <iframe width="100%" height="300vw" src="https://www.youtube.com/embed/rjTokjiB0D4?si=8_qFy0mTZHlTJsap" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="100%" height="300vw" src="https://www.youtube.com/embed/3zYNcor2Soc?si=1sQbXEhzXScqkYl8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="100%" height="300vw" src="https://www.youtube.com/embed/FtVhqCX6Pfw?si=1kKgQK5xExqco0eR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        {/* bacillus */}
        <iframe width="100%" height="300vw" src="https://www.youtube.com/embed/5oEwQ401Ggw?si=4J-Tmkvu06pdE0sY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h1>Acknoweldgements</h1>
        <p>We would like to thank Ms. Wleklinski, Dr. Pierce, and Ms. Zanfardino of Rutgers Preparatory School for their continued support of our project and the Waksman Institute of Rutgers University for providing additional resources.</p>
        <div id="discussions">
          <h1>Discussions</h1>
          <a href="https://drive.google.com/file/d/1-uuHndjDpgM0UvXLHJPvG4g4h01Hp6le/view?usp=sharing" target="_blank">Click here to open our E-poster on google drive and provide comments and engage in discussions with one another and original poster authors!</a>
        </div>
        <h1>About</h1>
        <p>
          This website is made to display our project on the role of oil exterminators in the environment. We are a group of students from Rutgers Preparatory School who are interested in learning more about the field of microbiology and have chosen this topic for our year round advanced research course taught by and guided by Ms. Wleklinski. Thank you for visiting!
        </p>
      </body> 
    </div>
  );
}

export default App;
