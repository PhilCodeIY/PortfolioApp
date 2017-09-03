import React, { Component } from 'react';

import { Link } from 'react-router-dom';


export default class References extends Component {
  render() {
  let style = {
    "backgroundColor": "gray",
    "backgroundSize": "cover",
    "height": "100%",
    "padding": "100px"
  }

  return (
    <div>
      <section className="row" style={style}>
        <div>
          <h3>References Page</h3>
            <div class="card">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Barry Allen </li>
                <li class="list-group-item">Phone: 702-The-Flash</li>
                <li class="list-group-item">Able to run at near light-speeds, his powers provide the ultimate caffeine kick: He can run up buildings, move so swiftly he phases through objects, create sonic booms with the snap of his fingers—and never need to order delivery. Despite his speed, Barry can become so obsessed with crime-solving he can still lose track of everything else around him, leaving the fastest man alive constantly running a minute behind.</li>
              </ul>
            </div>  

            <div class="card">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Diana Prince</li>
                <li class="list-group-item">Phone: 702-Fight-Me</li>
                <li class="list-group-item">Wonder Woman is Princess Diana of the immortal Amazons from Greek mythology.  When army pilot Steve Trevor crashes on the warriors’ secluded island paradise, Diana wins the right to escort him home and make her people known to the world. Entering our cynical world for the first time, there’s a lot she must wrap her head around, especially our ways of war, hate, and, well… dating. Helping her are her superhuman strength and speed, as well as the trademark bulletproof bracelets, but it’s probably her Golden Lasso of Truth most people really wish they had.</li>
              </ul>
            </div>  

            <div class="card">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Bruce Wayne</li>
                <li class="list-group-item">702-The-Bat</li>
                <li class="list-group-item">Millionaire Bruce Wayne was just a kid when he watched his parents get gunned down during a mugging in Gotham City. The crime would define his life, as he dedicated himself to becoming the world’s greatest weapon against crime—the Batman.

                  Forget his Batarangs, Batmobile, or Utility Belt filled with high-tech weapons. Batman is the most feared superhero of all, because he’s pushed himself to the absolute pinnacle of human achievement. He’s a brilliant detective who’s mastered fighting techniques the world’s barely heard of. An Olympic-caliber athlete with a plan for every occasion, Batman’s seemingly always five steps ahead of his foes. But in his crusade against injustice, two questions always loom: How far will he go to protect the innocent, and will he sacrifice his humanity along the way?</li>
              </ul>
            </div>  

                <Link to="./Contact">
                  <button id="next">
                      Contact Me
                  </button>
                </Link>


        </div>
      </section>
    </div>
      )
    }
  }
