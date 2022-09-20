import React, { useRef, useState } from "react";
import { useParallax } from "react-scroll-parallax";

const Test = () => {
  //   const ref = useRef(null);
  const pRef = useRef(null);

//   const train = useParallax({
    // easing: "easeOutQuad",
    // translateX: [0, 100],
    // targetElement: pRef,
//   });
    
    const train = useParallax({
        ref: pRef,
        easing: "easeOutQuad",
        translateX: [100, 0],
    controller: null,
    element: Element | undefined
   })

//   const [entered, setEntered] = useState(false);
//   const [progress, setProgress] = useState(false);
//   console.log(entered, "entered");
//   console.log(progress, "progress");

  return (
    <div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in
          explicabo perferendis, tempora sapiente odio corporis temporibus autem
          pariatur iusto consequuntur dolorem. Aliquid, soluta culpa incidunt
          recusandae velit amet repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in
          explicabo perferendis, tempora sapiente odio corporis temporibus autem
          pariatur iusto consequuntur dolorem. Aliquid, soluta culpa incidunt
          recusandae velit amet repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in
          explicabo perferendis, tempora sapiente odio corporis temporibus autem
          pariatur iusto consequuntur dolorem. Aliquid, soluta culpa incidunt
          recusandae velit amet repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in
          explicabo perferendis, tempora sapiente odio corporis temporibus autem
          pariatur iusto consequuntur dolorem. Aliquid, soluta culpa incidunt
          recusandae velit amet repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in
          explicabo perferendis, tempora sapiente odio corporis temporibus autem
          pariatur iusto consequuntur dolorem. Aliquid, soluta culpa incidunt
          recusandae velit amet repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in
          explicabo perferendis, tempora sapiente odio corporis temporibus autem
          pariatur iusto consequuntur dolorem. Aliquid, soluta culpa incidunt
          recusandae velit amet repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in
          explicabo perferendis, tempora sapiente odio corporis temporibus autem
          pariatur iusto consequuntur dolorem. Aliquid, soluta culpa incidunt
          recusandae velit amet repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in
          explicabo perferendis, tempora sapiente odio corporis temporibus autem
          pariatur iusto consequuntur dolorem. Aliquid, soluta culpa incidunt
          recusandae velit amet repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in
          explicabo perferendis, tempora sapiente odio corporis temporibus autem
          pariatur iusto consequuntur dolorem. Aliquid, soluta culpa incidunt
          recusandae velit amet repudiandae.
        </p>
        <div ref={pRef} style={{ height: "100vh", border: "2px solid red", overflowX:"hidden" }}>
          <h1>THIS IS THE BEGGENING</h1>

          <div
            ref={train.ref}
            style={{ height: "200px", border: "2px solid blue" }}
          >
            hello world Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Culpa in explicabo perferendis, tempora sapiente odio corporis
            temporibus autem pariatur iusto consequuntur dolorem. Aliquid,
            soluta culpa incidunt recusandae velit amet repudiandae.
          </div>
          <h1>THIS IS THE END</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in
          explicabo perferendis, tempora sapiente odio corporis temporibus autem
          pariatur iusto consequuntur dolorem. Aliquid, soluta culpa incidunt
          recusandae velit amet repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in
          explicabo perferendis, tempora sapiente odio corporis temporibus autem
          pariatur iusto consequuntur dolorem. Aliquid, soluta culpa incidunt
          recusandae velit amet repudiandae.
        </p>{" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in
          explicabo perferendis, tempora sapiente odio corporis temporibus autem
          pariatur iusto consequuntur dolorem. Aliquid, soluta culpa incidunt
          recusandae velit amet repudiandae.
        </p>
        {/* <Parallax
          onProgressChange={(progress) => setProgress(progress)}
          onEnter={() => setEntered(true)}
          onExit={() => setEntered(false)}
        /> */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in
          explicabo perferendis, tempora sapiente odio corporis temporibus autem
          pariatur iusto consequuntur dolorem. Aliquid, soluta culpa incidunt
          recusandae velit amet repudiandae.
        </p>{" "}
        {/* <Parallax
          translateX={["-400px", "0px"]}
          scale={[0.75, 1]}
          rotate={[-180, 0]}
          easing="easeInQuad"
        /> */}
        <p>
          THIS IS BETWWEN Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Culpa in explicabo perferendis, tempora sapiente odio corporis
          temporibus autem pariatur iusto consequuntur dolorem. Aliquid, soluta
          culpa incidunt recusandae velit amet repudiandae.
        </p>
        {/* <Parallax
          translateX={["-400px", "0px"]}
          scale={[0.75, 1]}
          rotate={[-180, 0]}
          easing="easeInQuad"
        /> */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in
          explicabo perferendis, tempora sapiente odio corporis temporibus autem
          pariatur iusto consequuntur dolorem. Aliquid, soluta culpa incidunt
          recusandae velit amet repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in
          explicabo perferendis, tempora sapiente odio corporis temporibus autem
          pariatur iusto consequuntur dolorem. Aliquid, soluta culpa incidunt
          recusandae velit amet repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in
          explicabo perferendis, tempora sapiente odio corporis temporibus autem
          pariatur iusto consequuntur dolorem. Aliquid, soluta culpa incidunt
          recusandae velit amet repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in
          explicabo perferendis, tempora sapiente odio corporis temporibus autem
          pariatur iusto consequuntur dolorem. Aliquid, soluta culpa incidunt
          recusandae velit amet repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in
          explicabo perferendis, tempora sapiente odio corporis temporibus autem
          pariatur iusto consequuntur dolorem. Aliquid, soluta culpa incidunt
          recusandae velit amet repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in
          explicabo perferendis, tempora sapiente odio corporis temporibus autem
          pariatur iusto consequuntur dolorem. Aliquid, soluta culpa incidunt
          recusandae velit amet repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in
          explicabo perferendis, tempora sapiente odio corporis temporibus autem
          pariatur iusto consequuntur dolorem. Aliquid, soluta culpa incidunt
          recusandae velit amet repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in
          explicabo perferendis, tempora sapiente odio corporis temporibus autem
          pariatur iusto consequuntur dolorem. Aliquid, soluta culpa incidunt
          recusandae velit amet repudiandae.
        </p>
      </div>
    </div>
  );
};

export default Test;
