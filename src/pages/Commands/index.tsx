import * as React from "react";
import "assets/sass/navbar.scss";
import { useState } from "react";
import {FiAlertTriangle} from "react-icons/fi";

const data = [
    {
        command: "/help",
        description: "Displays the current help menu"
    },
    {
        command: "/addrole [project_id] [min] [max] [@role]",
        description: `<p>Adds a <strong style="color:#f9a62b">[@role]</strong> if the user has the <strong style="color:#f9a62b">[min]</strong> to <strong style="color:#f9a62b">[max]</strong> number of NFTs from the <strong style="color:#f9a62b">[project_id]</strong></p>
        
        <p><strong style="color:#f9a62b">[project_id]</strong> - the name of the collection looks like: ABCD-1a2b3c</p>
        
        <p><strong style="color:#f9a62b">[min]</strong> - Needs to be at least 1 <br/>
        <strong style="color:#f9a62b">[max]</strong> - Must be greater than <strong style="color:#f9a62b">[min]</strong> or can be -1 if the max number does not count</p>
        
        <p>Usually if you use -1 you only check that the user has at least 1 NFT from the collection</p>
        
        <p><strong style="color:#f9a62b">[@role]</strong> - The role that you want to give to user</p>
        
        <p><strong>Examples:</strong><br/><br/>
        <strong>/addrole ABCD-1a2b3c 1 -1 @Adventurer</strong><br/>
        This will add the role @Adventurer for those who own at least 1 NFT from collection ABCD-1a2b3c<br/>
        <p><strong>/addrole ABCD-1a2b3c 1 5 @Novice</strong><br/><strong>/addrole ABCD-1a2b3c 6 -1 @Expert</strong></p>

        <p>This will add the role @Novice for those who own 1 to 5 NFTs from collection ABCD-1a2b3c or the role @Expert for those who own more then 6 NFTs from the same project.</p>`
    },
    {
        command: "/listroles",
        description: "List added roles"
    },
    {
        command: "/delroles [index]",
        description: "​Delete added roles. Use /listroles to get the INDEX of the role"
    },
    {
        command: "/verify",
        description: "A direct message will be sent to the user with instructions on how to authenticate on the ELROND network. A succesfull authentication will check if the user has the required NFTs from the collection and the coresponding roles will be asigned to them."
    }
];

const Commands = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i:any) => {
      if (selected == i) {
          return setSelected(null);
      }

      setSelected(i);
  };
  return ( 
      <div className="wrapper">
          <div className="importantMsg"><FiAlertTriangle/>&nbsp;<strong>Important: </strong>&nbsp;&nbsp;Make sure that the ENRA bot is under any Admin/mod role and ABOVE any role it needs to grant in order to work properly.</div>
          <div className="accordion">
              {data.map((item, i) => 
              (
                  <div key={i} className="item">
                      <div className="title" onClick={() => toggle(i)}>
                          <h2><strong>{item.command}</strong></h2>
                          <span className="selector"><strong>{selected === i ? "-" : "+"}</strong></span>
                      </div>
                      <div className={selected === i ? "content-show":"content"}><div dangerouslySetInnerHTML={{ __html: item.description }} /></div>
                  </div>
              ))}
          </div>
      </div>
  );
};


export default Commands;
