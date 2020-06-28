import React from "react";
import ReactParticles from "react-particles-js";

const Particles = (props) => (
  <ReactParticles
    params={{
      particles: {
        number: {
          value: 265,
          density: {
            enable: false,
            value_area: 2000,
          },
        },
        color: {
          value: "#FFFFFF",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#FFFFF",
          },
          polygon: {
            nb_sides: 2,
          },
        },
        opacity: {
          value: 0.2,
          random: true,
          anim: {
            enable: true,
            speed: 5,
            opacity_min: 0.01,
            sync: false,
          },
        },
        size: {
          value: 0,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#FFFFFF",
          opacity: 0.2,
          width: 1.5,
        },
        move: {
          enable: true,
          speed: 4,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 73.08694910712106,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    }}
  />
);

export default Particles;
