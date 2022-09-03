import React from 'react';
import { useState } from 'react'; 
import ReactDOM from 'react-dom/client';
import Profile from "./profile.js";
import PortFolioMain from "./portfolio.js";


import "./css.css"
var cc=(<>
            <div class="split1">
                <Profile/>
            </div>
            <PortFolioMain/>
        </>
)
var roots=ReactDOM.createRoot(document.getElementById("root"));
roots.render(cc);
